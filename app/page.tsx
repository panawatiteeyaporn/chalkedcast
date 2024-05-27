import About from "@/components/About";
import Episodes from "@/components/Episodes";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main className="bg-zinc-950">
        <Hero />
        <Episodes />
        <About />
      </main>
      <Footer />
    </>
  );
}
