"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  const teams: {
    image: string;
    description: string;
    key: string;
  }[] = [
    {
      image: "/Rizzo.png",
      description:
        'Dillon "Rizzo" is a notable figure in the Rocket League community, renowned both as a former professional player and a popular content creator. He played primarily for G2 Esports, achieving significant success with multiple championships and top finishes. In 2021, Rizzo retired from professional play to focus on content creation, where he continues to entertain and educate fans with his engaging streams and YouTube videos.',
      key: "rizzo",
    },
    {
      image: "/JohnnyBoi_i.png",
      description:
        "JohnnyBoi, aka John MacDonald, is a key figure in the Rocket League community known for his commentary, streaming, and content creation. He gained fame through his insightful commentary on RLCS and community tournaments, as well as his popular Twitch and YouTube channels. JohnnyBoi's contributions have made him a beloved and influential personality in the Rocket League scene.",
      key: "johnny",
    },
    {
      image: "/CJCJ.png",
      description:
        'CJ "CJCJ" Cambell is a prominent Rocket League player from Australia, known for his competitive prowess and vibrant personality. He has played for several top teams, including Chiefs Esports Club and Renegades, where he achieved significant success in the Oceanic region. After retiring from competitive play, CJCJ transitioned to commentary and content creation, becoming a main caster for the RLCS in recent years.',
      key: "cj",
    },
  ];

  return (
    <section
      className="mx-auto max-w-7xl items-center justify-center gap-16 px-8 py-8 lg:gap-20 lg:py-20"
      id="about"
    >
      <h2 className="text-center text-4xl font-extrabold tracking-tight lg:text-6xl">
        Meet our wonderful
        <span className="ml-1 whitespace-nowrap bg-neutral px-2 leading-relaxed text-neutral-content md:ml-1.5 md:px-4">
          Hosts
        </span>
      </h2>

      <div
        className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-16 px-8 py-8 lg:flex-row lg:gap-20 lg:py-20"
        key={teams[0].key}
      >
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeIn", duration: 0.7 }}
          viewport={{ once: true }}
          className="lg:w-full"
        >
          <Image
            src={teams[0].image}
            alt=""
            className="rounded-xl border-2 border-[#320F12]"
            priority={true}
            width={500}
            height={500}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeIn", duration: 0.7 }}
          viewport={{ once: true }}
          className="flex w-full flex-col gap-10 rounded-xl bg-[#320F12] p-3 text-center lg:gap-14 lg:text-left"
        >
          <p>{teams[0].description}</p>
        </motion.div>
      </div>

      <div
        className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-16 px-8 py-8 lg:flex-row lg:gap-20 lg:py-20"
        key={teams[1].key}
      >
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeIn", duration: 0.7 }}
          viewport={{ once: true }}
          className="hidden w-full flex-col items-center justify-center gap-10 rounded-xl bg-[#320F12] p-3 text-center lg:flex lg:items-start lg:gap-14 lg:text-left"
        >
          <p>{teams[1].description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeIn", duration: 0.7 }}
          viewport={{ once: true }}
          className="lg:w-full"
        >
          <Image
            src={teams[1].image}
            alt=""
            className="rounded-xl border-2 border-[#320F12]"
            priority={true}
            width={500}
            height={500}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeIn", duration: 0.7 }}
          viewport={{ once: true }}
          className="flex w-full flex-col items-center justify-center gap-10 rounded-xl bg-[#320F12] p-3 text-center lg:hidden lg:items-start lg:gap-14 lg:text-left"
        >
          <p>{teams[1].description}</p>
        </motion.div>
      </div>

      <div
        className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-16 px-8 py-8 lg:flex-row lg:gap-20 lg:py-20"
        key={teams[2].key}
      >
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeIn", duration: 0.7 }}
          viewport={{ once: true }}
          className="lg:w-full"
        >
          <Image
            src={teams[2].image}
            alt=""
            className="rounded-xl border-2 border-[#320F12]"
            priority={true}
            width={500}
            height={500}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeIn", duration: 0.7 }}
          viewport={{ once: true }}
          className="flex w-full flex-col items-center justify-center gap-10 rounded-xl bg-[#320F12] p-3 text-center lg:items-start lg:gap-14 lg:text-left"
        >
          <p>{teams[2].description}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
