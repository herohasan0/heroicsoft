import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <Footer />
    </main>
  );
}

