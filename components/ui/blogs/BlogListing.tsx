"use client";
import Image from "next/image";
import Link from "next/link";

interface BlogListingTypes {
  blogListing: {
    id: string;
    slug: string;
    title: string;
    author: string
    blog_image: string;
    short_description: string;
    blog_date: string;
    status: string;
  }[];

  api_endpoint: string | undefined
}


const BlogListing: React.FC<BlogListingTypes> = ({ blogListing, api_endpoint }) => {
  const sortedBlogListing = [...blogListing].sort((a, b) => {
    return new Date(b.blog_date).getTime() - new Date(a.blog_date).getTime();
  });
  return (
    <section className={`container py-20`}>
      <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {sortedBlogListing.map(
          (item, index) =>
            item.status == "1" && (
              <div key={index} className="bg-[#ECEDF1] py-9 px-8 rounded-2xl">
                <Link href={`/blogs/${item.slug}`} className="space-y-6">
                  <div className="h-[250px] relative w-full rounded-2xl overflow-hidden">
                    <Image
                      src={`${api_endpoint}/assets/uploads/${item.blog_image}`}
                      className="object-cover w-full h-full"
                      alt={item.blog_image}
                      quality={100}
                      fill
                    />
                  </div>
                  <div>
                    <h1 className="font-bold text-2xl text-midNight text-start line-clamp-3 mb-6">
                      {item.title}
                    </h1>
                    <p className="text-[#525252] font-normal text-[16px] leading-[25px] text-start break-words mb-6 line-clamp-4">
                      {item.short_description}
                    </p>
                    <p className="text-[#525252] font-normal text-[13px] leading-[16px] text-start">
                      {item.blog_date}
                    </p>
                  </div>
                </Link>
              </div>
            )
        )}
      </div>
    </section>
  );
};

export default BlogListing;
