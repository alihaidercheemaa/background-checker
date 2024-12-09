"use client";
// import Image from "next/image";
import Link from "next/link";

interface ServicesListingTypes {
  servicesListing: {
    id: string;
    slug: string;
    title: string;
    image: string;
    description: string;
    status: string;
  }[];

  next_api_endpoint: string | undefined
}


const ServicesListing: React.FC<ServicesListingTypes> = ({ servicesListing, next_api_endpoint }) => {
  return (
    <section className={`container py-20`}>
      <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {servicesListing.map(
          (item, index) =>
            item.status == "1" && (
              <div key={index} className="bg-[#ECEDF1] py-9 px-8 lg:rounded-2xl md:rounded-xl rounded-lg">
                <Link href={`/services/${item.slug}`} className="space-y-6">
                  <div className="h-[250px] relative w-full lg:rounded-2xl md:rounded-xl rounded-lg overflow-hidden">
                    {/* <Image
                      src={`${next_api_endpoint}/assets/uploads/${item.image}`}
                      className="object-cover w-full h-full"
                      alt={item.image}
                      quality={100}
                      fill
                    /> */}
                    <img
                      src={`${next_api_endpoint}/assets/uploads/${item.image}`}
                      className="object-cover w-full h-full"
                      alt={item.image}
                    />
                  </div>
                  <div>
                    <h1 className="font-bold text-2xl text-midNight text-start line-clamp-3 mb-3 capitalize">
                      {item.title}
                    </h1>
                    <p className="text-[#525252] font-normal text-[16px] leading-[25px] text-start break-words mb-3 line-clamp-4 normal-case">
                      {item.description}
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

export default ServicesListing;
