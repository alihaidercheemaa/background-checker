import HeroSectionOne from "@/components/ui/global/HeroSectionOne";
import FAQS from "@/components/ui/home/FAQS";
import OurGoalsNumber from "@/components/ui/home/OurGoalsNumber";
import QuoteForm from "@/components/ui/home/QuoteForm";
import TransportationRange from "@/components/ui/home/TransportationRange";

export default function Home() {

  return (
    <>
      <HeroSectionOne title="Comprehensive Criminal Background Screening Services for Safety" description="At Background Checker, We Ensure Thorough Criminal Background Checks for Employment with Rapid Turnaround at Local and Federal Levels, Giving You Confidence in Your Hires." heroBg="heroBG.jpg" />
      <TransportationRange />
      <OurGoalsNumber />
      <FAQS />
      <QuoteForm />
    </>
  );
}
