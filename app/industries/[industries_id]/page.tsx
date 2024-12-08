import axios from "axios";
import { Metadata } from "next";
import React from "react";
import https from 'https';
import GenericHeroSection from "@/components/ui/global/GenericHeroSection";
import IndustriesDetails from "@/components/ui/industries/IndustriesDetails";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "Industries | Stay Updated with the Latest from Background Checker",
    description:
        "Discover the latest news, insights, and updates from Background Checker. Read our blog to stay informed about technology trends and company innovations.",
    metadataBase: new URL("http://localhost:3000/blogs"),
};

const axiosInstance = axios.create({
    httpsAgent: new https.Agent({ rejectUnauthorized: false })
});

async function fetchBlogs(industries_id: string) {
    try {
        const response = await axiosInstance.post(
            `${process.env.NEXT_API_ENDPOINT}/api/industry_details/list`,
            {
                industries_id: industries_id,
            }
        );
        return response.data.payload;
    } catch (error) {
        console.error("Error fetching service details:", error);
        return null;
    }
}

const page = async ({ params }: { params: { industries_id: string } }) => {
    const { industries_id } = await params
    const industriesDetails = await fetchBlogs(industries_id);
    return (
        <>
            <GenericHeroSection title="sss" description="lorem ipsum lorem ipsum lorem ipsum" />
            <IndustriesDetails industriesDetails={industriesDetails} next_api_endpoint={process.env.NEXT_API_ENDPOINT} />
        </>
    );
};

export default page;
