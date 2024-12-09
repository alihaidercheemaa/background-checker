export const dynamic = 'force-dynamic'
import BlogDetails from "@/components/ui/blogs/BlogDetails";
import axios from "axios";
import { Metadata } from "next";
import React from "react";
import https from 'https';
import GenericHeroSection from "@/components/ui/global/GenericHeroSection";
import Link from "next/link";


export const metadata: Metadata = {
    title: "Blogs | Stay Updated with the Latest from Background Checker",
    description:
        "Discover the latest news, insights, and updates from Background Checker. Read our blog to stay informed about technology trends and company innovations.",
    metadataBase: new URL("http://localhost:3000/blogs"),
};

const axiosInstance = axios.create({
    httpsAgent: new https.Agent({ rejectUnauthorized: false })
});

async function fetchBlogs(slug: string) {
    try {
        const response = await axiosInstance.post(
            `${process.env.NEXT_API_ENDPOINT}/api/blogs/details.php`,
            {
                slug: slug,
            }
        );
        return response.data.payload;
    } catch (error) {
        console.error("Error fetching blog details:", error);
        return error;
    }
}

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const slug = (await params).slug
    const blogDetails = await fetchBlogs(slug);

    if (!blogDetails) {
        return (
            <section className="min-h-screen flex flex-col justify-center items-center gap-y-6 bg-midNight/90">
                <h1 className="text-white font-semibold lg:text-[22px] sm:text-2xl text-xl lg:leading-7">
                    OOPS! No Blog Avaliable
                </h1>
                <p className="text-white">
                    Go back to{" "}
                    <Link
                        href="/"
                        className="text-primary-100 underline underline-offset-2"
                    >
                        Home
                    </Link>
                </p>
            </section>
        );
    }
    return (
        <>
            <GenericHeroSection title="Blog Details" description="Contact us today to discover how our customized background check solutions enhance your hiring process and ensure a safer workplace." />
            <BlogDetails blogDetails={blogDetails} next_api_endpoint={process.env.NEXT_API_ENDPOINT} />
        </>
    );
};

export default page;
