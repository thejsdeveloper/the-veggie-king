import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col pt-20">
      <Hero />
      <AboutUs />
    </main>
  );
}
