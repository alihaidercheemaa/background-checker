export const dynamic = "force-dynamic";
import axios from "axios";
import { Metadata } from "next";
import Link from "next/link";
import https from 'https';
import HeroSection from "@/components/ui/industries/HeroSection";
import IndustriesListing from "@/components/ui/industries/IndustriesListing";

export const metadata: Metadata = {
    title: "Industries | Stay Updated with the Latest from Background Checker",
    description:
        "Discover the latest news, insights, and updates from Background Checker. Read our blog to stay informed about technology trends and company innovations.",
    metadataBase: new URL("http://localhost:3000/services"),
};

const axiosInstance = axios.create({
    httpsAgent: new https.Agent({ rejectUnauthorized: false })
});

const fetchBlogs = async () => {
    try {
        const response = await axiosInstance.get(
            `${process.env.NEXT_API_ENDPOINT}/api/industries/list.php`
        );
        return response.data.payload;
    } catch (error) {
        console.error("Error fetching industries:", error);
        return null;
    }
};

const page = async () => {
    const industriesListing = await fetchBlogs();

    if (!industriesListing || industriesListing.length === 0) {
        return (
            <>
                <section className="h-screen flex flex-col justify-center items-center gap-y-6">
                    <h1 className="text-midnight font-semibold lg:text-[22px] sm:text-2xl text-xl lg:leading-7">
                        OOPS! No Industry Avaliable
                    </h1>
                    <p>
                        Go back to{" "}
                        <Link
                            href="/"
                            className="text-azure-100 underline underline-offset-2"
                        >
                            Home
                        </Link>
                    </p>
                </section>
            </>
        );
    }

    return (
        <>
            <HeroSection/>
            <IndustriesListing industriesListing={industriesListing} next_api_endpoint={process.env.NEXT_API_ENDPOINT} />
        </>
    );
};

export default page;
