import ButtonLead from "@/components/ButtonLead";
import Image from "next/image";
import Link from "next/link";

const Shop = () => {
  // make an Underconstruction and add join waiting button
  return (
    <section className="mx-auto max-w-7xl items-center justify-center gap-16 px-8 py-8 lg:gap-20 lg:py-20">
      <Link href="/" className="btn btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
            clipRule="evenodd"
          />
        </svg>
        Back
      </Link>
      <h2 className="text-center text-4xl font-extrabold tracking-tight lg:text-6xl">
        Our Shop is under construction
      </h2>
      <p className="py-8 text-lg leading-relaxed opacity-80 lg:py-20">
        Oops! Our shop page isn&#39;t ready yet, but Chalked Cast merch is on
        the way. Join the waiting list now to be the first to get exclusive
        gear!
      </p>
      <div className="lg:py-17 flex justify-center py-5">
        <ButtonLead />
      </div>
      <div className="flex justify-center py-8 lg:py-20">
        <Image src="/chc_logo_mic.png" alt="mic" width={180} height={180} />
      </div>
      <div className="flex justify-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    </section>
  );
};

export default Shop;
