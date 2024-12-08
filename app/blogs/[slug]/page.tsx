export const dynamic = "force-dynamic";
import BlogDetails from "@/components/ui/blogs/BlogDetails";
import axios from "axios";
import { Metadata } from "next";
import React from "react";
import https from 'https';

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
            `${process.env.API_ENDPOINT}/api/blogs/details.php`,
            {
                slug: slug,
            }
        );
        return response.data.payload;
    } catch (error) {
        console.error("Error fetching blog details:", error);
        return null;
    }
}

const page = async ({ params }: { params: { slug: string } }) => {
    const blogDetails = await fetchBlogs(params.slug);
    return (
        <>
            <BlogDetails blogDetails={blogDetails} api_endpoint={process.env.API_ENDPOINT} />
        </>
    );
};

export default page;
