import Image from "next/image";
import Link from "next/link";
import ButtonLead from "./ButtonLead";

const Hero = () => {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-16 bg-[#0E0F0F] px-8 py-8 lg:flex-row lg:gap-20 lg:py-20">
      <div className="flex flex-col items-center justify-center gap-10 text-center lg:items-start lg:gap-14 lg:text-left">
        <h1 className="text-4xl font-extrabold tracking-tight md:-mb-4 lg:text-6xl">
          Chalked Cast
        </h1>
        <h2 className="text-3xl tracking-tight md:-mb-4 lg:text-5xl">
          Where Rocket League News Meets Unscripted Chaos
        </h2>
        <p className="text-lg leading-relaxed opacity-80">
          Join Rizzo, JohnnyBoi, and CJCJ on Chalked Cast for unfiltered Rocket
          League news, spontaneous antics, and behind-the-scenes stories. Tune
          in for a fun and laid-back dive into the world of Rocket League!
        </p>
        <p className="text-lg leading-relaxed opacity-80">
          Exciting news! Our Chalked Cast merch is coming soon. Don&#39;t miss
          out—join our waiting list now and be the first to get your hands on
          exclusive gear!
        </p>
        <ButtonLead />
      </div>
      <div className="lg:w-full">
        <h2>Follow us on Social Media and join our community:</h2>
        <div className="flex p-2">
          <Link
            href={"https://x.com/ChalkedCast"}
            key={"x"}
            className="link-hover link pr-6"
            title="X"
            target="_blank"
          >
            <Image
              src={"/x_icon.webp"}
              alt="x_"
              width={24}
              height={24}
              className=" h-6 w-6 hover:animate-popup"
            />
          </Link>
          <Link
            href={"https://discord.gg/gxZNxF8tEx"}
            key={"discord"}
            className="link-hover link pr-6"
            title="Discord"
            target="_blank"
          >
            <Image
              src={"/discord_icon.png"}
              alt="discord"
              width={24}
              height={24}
              className="h-6 w-7 hover:animate-popup"
            />
          </Link>
        </div>
        <div>
          <h2>Listen to the podcast here:</h2>

          <div className="flex p-2">
            <Link
              href={
                "https://podcasts.apple.com/us/podcast/chalked-cast/id1624577128"
              }
              key={"apple"}
              className="link-hover link pr-6"
              title="Apple Podcast"
              target="_blank"
            >
              <Image
                src={"/pod_icon_apple.png"}
                alt="apple_pod"
                width={24}
                height={24}
                className="h-auto w-auto hover:animate-popup"
              />
            </Link>

            <Link
              href={"https://open.spotify.com/show/2Lw7v6tJysLa6p3RJrzIqv"}
              key={"spotify"}
              className="link-hover link pr-6"
              title="Spotify"
              target="_blank"
            >
              <Image
                src={"/pod_icon_spotify.png"}
                alt="spotify"
                width={24}
                height={24}
                className="h-auto w-auto hover:animate-popup"
              />
            </Link>

            <Link
              href={"https://www.youtube.com/@TheChalkedCast"}
              key={"youtube"}
              className="link-hover link pr-6"
              title="Youtube"
              target="_blank"
            >
              <Image
                src={"/youtube_icon.png"}
                alt="youtube"
                width={32}
                height={32}
                className="h-8 w-9 hover:animate-popup"
              />
            </Link>

            <Link
              href={"https://www.twitch.tv/rizzo"}
              key={"twitch"}
              className="link-hover link pr-6"
              title="twitch"
              target="_blank"
            >
              <Image
                src={"/twitch_icon.png"}
                alt="twitch"
                width={32}
                height={32}
                className="h-auto w-auto hover:animate-popup"
              />
            </Link>
          </div>
        </div>
        <div className="py-3">
          <h2 className="text-1xl mb-3 tracking-tight lg:text-3xl">
            Become a premium member
          </h2>
          <p className="mb-3">
            Support us and get even more from Chalked Cast—sign up on Patreon
            today
          </p>
          <div className="flex rounded-xl bg-[#320F12] p-3">
            <Image
              src={"/patreon_white_icon.png"}
              alt="patreon"
              width={32}
              height={32}
              className="mr-3 h-10 w-9"
            />
            <p className="text-2xl font-extrabold lg:text-4xl">patreon</p>
            <Link
              href={"https://www.patreon.com/ChalkedCast"}
              key={"patreon"}
              className="btn btn-primary ml-auto"
              title="Subscribe on Patreon"
              target="_blank"
            >
              Subscribe Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
