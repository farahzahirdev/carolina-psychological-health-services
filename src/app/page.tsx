import Hero from "@/components/Hero";
import IsThisYou from "@/components/IsThisYou";
import Services from "@/components/Services";
import Results from "@/components/Results";
import WhyCphs from "@/components/WhyCphs";
import Testimonials from "@/components/Testimonials";
import BookingCalendar from "@/components/BookingCalendar";
import InquiryForm from "@/components/InquiryForm";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <IsThisYou />
      <BookingCalendar />
      <Services />
      <Results />
      <WhyCphs />
      <Testimonials />
      <InquiryForm />
      <Faq />
      <FinalCta />
    </>
  );
}
