"use client";
// import Image from "next/image";
import Link from "next/link";

export interface ServicesDetailsTypes {
  servicesDetails: {
    id: string;
    service_id: string
    slug: string;
    title: string;
    description: string;
    image: string;
  }[];

  next_api_endpoint: string | undefined
}

const ServicesDetails: React.FC<ServicesDetailsTypes> = ({ servicesDetails, next_api_endpoint }) => {
  if (!servicesDetails) {
    return (
      <section className="h-screen flex flex-col justify-center items-center gap-y-6">
        <h1 className="text-midnight font-semibold lg:text-[22px] sm:text-2xl text-xl lg:leading-7">
          OOPS! No Service Avaliables
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
    <>
      <section className={`container pt-20`}>
        {servicesDetails.map((items, index) => (
          <div key={index} className="flex lg:flex-row flex-col justify-center items-center pb-20 lg:gap-20 md:gap-10 gap-7">
            <div className={`lg:w-1/2 w-full ${index % 2 === 0 ? 'order-first' : 'lg:order-last order-first'}`}>
              <div className='max-w-[575px] mb-4'>
                <h1 className={`text-midNight sm:text-[46px] text-[38px] sm:leading-[55px] leading-[42px] font-bold `}>
                  {items.title}
                </h1>
              </div>
              <div className='max-w-[600px]'>
                <p className='text-[#525252] text-base font-normal'>
                  {items.description}
                </p>
              </div>
            </div>
            <div className={`lg:w-1/2 w-full ${index % 2 === 0 ? 'order-last' : 'lg:order-first order-last'}`}>
              <div className='ml-auto lg:rounded-2xl md:rounded-xl rounded-lg overflow-hidden relative xxl:w-[655px] xl:w-[550px] lg:w-[470px] w-full md:h-[550px] h-[450px]'>
                <img
                  src={`${next_api_endpoint}/assets/uploads/${items.image}`}
                  className="object-cover w-full h-full"
                  alt={items.title}
                />
              </div>
              {/* <Image
              src={`https://adminpanel.inmedsolution.com/assets/uploads/${blogDetails.image}`}
              className="object-cover w-full h-full"
              alt={blogDetails.image}
              quality={100}
              fill
            /> */}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ServicesDetails;
