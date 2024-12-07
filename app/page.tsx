// import EfficientWork from "@/components/ui/home/EfficientWork";
import FAQS from "@/components/ui/home/FAQS";
import HeroSection from "@/components/ui/home/HeroSection";
import OurGoalsNumber from "@/components/ui/home/OurGoalsNumber";
// import OurServices from "@/components/ui/home/OurServices";
import QuoteForm from "@/components/ui/home/QuoteForm";
import TransportationRange from "@/components/ui/home/TransportationRange";

export default function Home() {

  return (
    <>
      <HeroSection />
      {/* <OurServices /> */}
      <TransportationRange />
      <OurGoalsNumber />
      {/* <EfficientWork /> */}
      <FAQS />
      <QuoteForm />
    </>
  );
}
