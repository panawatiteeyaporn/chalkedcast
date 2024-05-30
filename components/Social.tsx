import Image from "next/image";
import Link from "next/link";

const Social = () => {
  return (
    <section className="bg-[#101111]">
      <div className="lg:py-15 mx-auto flex max-w-4xl flex-col items-center justify-center gap-10 px-10 py-8 lg:flex-row">
        <div className="flex flex-col items-center justify-center text-center lg:w-4/5 lg:items-start lg:text-left">
          <p className="py-4 text-center text-2xl font-semibold tracking-tight lg:text-left lg:text-3xl">
            Become a premium member
          </p>
          <p className="mx-auto max-w-2xl py-4 text-center text-xl leading-relaxed opacity-80 lg:text-left">
            Support us and get even more from Chalked Cast—sign up on Patreon
            today
          </p>

          <Link
            href={"https://www.patreon.com/ChalkedCast"}
            key={"patreon"}
            className="hidden w-full xxs:block"
            title="Subscribe on Patreon"
            target="_blank"
          >
            <div className="flex w-full rounded-xl border border-gray-700 bg-ch-nav bg-cover p-3">
              <Image
                src={"/patreon_white_icon.png"}
                alt="patreon"
                width={32}
                height={32}
                className="mr-3 h-12 w-11"
              />
              <p className="items-center text-3xl font-extrabold lg:text-4xl">
                Patreon
              </p>
              <button className="btn ml-auto rounded-lg bg-[#99230E]">
                Subscribe Now
              </button>
            </div>
          </Link>
          <Link
            href={"https://www.patreon.com/ChalkedCast"}
            key={"patreon"}
            className="w-full xxs:hidden"
            title="Subscribe on Patreon"
            target="_blank"
          >
            <div className="flex w-full justify-center rounded-xl border bg-ch-nav bg-cover p-3">
              <Image
                src={"/patreon_white_icon.png"}
                alt="patreon"
                width={32}
                height={32}
                className="mr-3 h-12 w-11"
              />
              <p className="items-center text-3xl font-extrabold lg:text-4xl">
                Patreon
              </p>
            </div>
          </Link>
        </div>
        <div className="pl-4 lg:w-1/2">
          <p className="mx-auto max-w-2xl p-2 text-center text-lg leading-relaxed opacity-80">
            Follow us on Social Media:
          </p>
          <div className="flex justify-center p-2">
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
            <p className="mx-auto max-w-2xl p-2 text-center text-lg leading-relaxed opacity-80">
              Listen to the podcast here:
            </p>
            <div className="flex items-center justify-center p-2">
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
                  className="h-8 w-8 hover:animate-popup"
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
                  className="h-8 w-8 hover:animate-popup"
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
                  width={30}
                  height={30}
                  className="h-7 w-8 hover:animate-popup"
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
                  width={30}
                  height={30}
                  className="h-auto w-auto hover:animate-popup"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
