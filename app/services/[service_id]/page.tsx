import axios from "axios";
import { Metadata } from "next";
import React from "react";
import https from 'https';
import GenericHeroSection from "@/components/ui/global/GenericHeroSection";
import ServicesDetails from "@/components/ui/services/ServicesDetails";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "Services | Stay Updated with the Latest from Background Checker",
    description:
        "Discover the latest news, insights, and updates from Background Checker. Read our blog to stay informed about technology trends and company innovations.",
    metadataBase: new URL("http://localhost:3000/blogs"),
};

const axiosInstance = axios.create({
    httpsAgent: new https.Agent({ rejectUnauthorized: false })
});

async function fetchBlogs(service_id: string) {
    try {
        const response = await axiosInstance.post(
            `${process.env.NEXT_API_ENDPOINT}/api/service_details/list`,
            {
                service_id: service_id,
            }
        );
        return response.data.payload;
    } catch (error) {
        console.error("Error fetching service details:", error);
        return null;
    }
}

const page = async ({ params }: { params: Promise<{ service_id: string }> }) => {
    const service_id = (await params).service_id
    const servicesDetails = await fetchBlogs(service_id);
    return (
        <>
            <GenericHeroSection title={servicesDetails[0].title} description="lorem ipsum lorem ipsum lorem ipsum" />
            <ServicesDetails servicesDetails={servicesDetails} next_api_endpoint={process.env.NEXT_API_ENDPOINT} />
        </>
    );
};

export default page;
