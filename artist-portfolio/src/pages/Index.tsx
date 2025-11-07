import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import GallerySections from "@/components/GallerySections";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <GallerySections />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
