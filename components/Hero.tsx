import Image from "next/image";
import Link from "next/link";
import ButtonLead from "./ButtonLead";

const Hero = () => {
  return (
    <section className="mx-auto max-w-5xl items-center justify-center gap-16 px-8 py-8 lg:gap-20 lg:py-20">
      <h1 className="pb-4 text-center text-4xl font-bold tracking-tight lg:text-6xl">
        Chalked Cast
      </h1>
      <h2 className="py-4 text-center text-2xl tracking-tight lg:text-4xl">
        Where Rocket League News Meets Unscripted Chaos
      </h2>

      <p className="mx-auto max-w-2xl py-4 text-center text-xl leading-relaxed opacity-80">
        Join Rizzo, JohnnyBoi, and CJCJ on Chalked Cast for unfiltered Rocket
        League news, spontaneous antics, and behind-the-scenes stories. Tune in
        for a fun and laid-back dive into the world of Rocket League!
      </p>
      <p className="mx-auto max-w-2xl py-4 text-center text-xl leading-relaxed opacity-80">
        Exciting news! Our Chalked Cast merch is coming soon. Don&#39;t miss
        out—join our waiting list now and be the first to get your hands on
        exclusive gear!
      </p>
      <div className="flex items-center justify-center py-8">
        <ButtonLead />
      </div>
    </section>
  );
};

export default Hero;
