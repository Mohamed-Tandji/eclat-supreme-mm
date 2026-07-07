import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </>
  );
}