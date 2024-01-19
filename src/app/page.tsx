import AboutUs from "@/components/AboutUs";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <main className="flex flex-col pt-20">
      <Hero />
      <AboutUs />
      <Menu />
      <Gallery />
    </main>
  );
}
