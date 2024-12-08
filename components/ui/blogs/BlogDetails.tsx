"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FacebookMessengerIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

export interface BlogDetailsTypes {
  blogDetails: {
    id: string;
    slug: string;
    title: string;
    author: string;
    short_description: string;
    detailed_description: string;
    blog_image: string;
    blog_date: string;
  };

  api_endpoint: string | undefined
}

const BlogDetails: React.FC<BlogDetailsTypes> = ({ blogDetails }) => {
  if (!blogDetails) {
    return (
      <section className="h-screen flex flex-col justify-center items-center gap-y-6">
        <h1 className="text-midnight font-semibold lg:text-[22px] sm:text-2xl text-xl lg:leading-7">
          OOPS! No Blog Avaliable
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
    );
  }
  return (
    <section className={`container lg:pt-40 pb-36 pt-28`}>
      <div className="max-w-[600px] mx-auto">
        <div className="mx-auto max-w-[600px] mb-10">
          <h1 className="font-semibold md:text-5xl md:leading-[55px] sm:text-4xl text-3xl text-black text-center mb-5">
            {blogDetails.title}
          </h1>
          <p className="text-[#11181f] font-normal text-[13px] leading-[16px] text-center">
            Published by {blogDetails.author} on {blogDetails.blog_date}
          </p>
        </div>
        <div className="h-[580px] relative w-full rounded-2xl overflow-hidden mb-10">
          {/* <Image
            src={`https://invoice.orio.digital/assets/uploads/${blogDetails.blog_image}`}
            className="object-cover w-full h-full"
            alt={blogDetails.blog_image}
            quality={100}
            fill
          /> */}
        </div>
        <div className="mb-5">
          <div
            className="text-start break-words mb-3"
            dangerouslySetInnerHTML={{
              __html: blogDetails.short_description,
            }}
          ></div>
          <div
            className="text-start break-words"
            dangerouslySetInnerHTML={{
              __html: blogDetails.detailed_description,
            }}
          ></div>
        </div>
        <div className="flex gap-4 justify-start">
          <FacebookShareButton
            url={`https://getorio.com/blogs/${blogDetails.slug}`}
          >
            <FacebookMessengerIcon className="w-[35px] h-[35px] rounded-full" />
          </FacebookShareButton>

          <LinkedinShareButton
            url={`https://getorio.com/blogs/${blogDetails.slug}`}
          >
            <LinkedinIcon className="w-[35px] h-[35px] rounded-full" />
          </LinkedinShareButton>

          <WhatsappShareButton
            url={`https://getorio.com/blogs/${blogDetails.slug}`}
          >
            <WhatsappIcon className="w-[35px] h-[35px] rounded-full" />
          </WhatsappShareButton>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
