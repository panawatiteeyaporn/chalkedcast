"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import Link from "next/link";

const Episodes = () => {
  const episodes: {
    url: string;
    number: number;
    description: string;
    key: string;
  }[] = [
    {
      url: "https://youtu.be/DAcE1vn6erk?si=Nc4mWO_fsCamdFVd",
      number: 82,
      description:
        "Karmine Corp Missing the Major, Spain Poach SSA Major Slot, Did Furia throw RLCS?",
      key: "ep82",
    },
    {
      url: "https://youtu.be/fKHc99QS8s8?si=QqNwyn5XJa7f99bd",
      number: 81,
      description:
        "Karmine Corp out in Open Quals, M80 Struggles Continue, SSA ruined by Spain",
      key: "ep81",
    },
    {
      url: "https://youtu.be/xKhxjlTbyOo?si=S_luaCb6NChSFQqt",
      number: 80,
      description:
        "$60,000,000 Esports Tournament, Rizzo KICKED for Squishy, EU Ruins SSA RLCS",
      key: "ep80",
    },
    {
      url: "https://youtu.be/noPKv9zKHCM?si=wU-jTfofmB3pLCnH",
      number: 79,
      description:
        "Cloud9 and Moist Return to Rocket League, RLCS Players Owed Thousands of Dollars",
      key: "ep79",
    },
    {
      url: "https://youtu.be/vnq5LQlEGzs?si=VRnBVCx2doWjXuSn",
      number: 78,
      description:
        "GAMECHANGING Rocket League Update, Should they Remove Car Standardisation?",
      key: "ep78",
    },
    {
      url: "https://youtu.be/a1UQhSe3pa8?si=HMIS4Ib4Ahw60BAv",
      number: 77,
      description:
        "Moist Esports Leaving Rocket League, Revamping RLCS and Worlds Qualification",
      key: "ep77",
    },
    {
      url: "https://youtu.be/OZi1pa2lB2U?si=Spe11vc0VrCbcM-N",
      number: 76,
      description:
        "Aqua to NRG, Joyo joins Oxygen and Realize kicked from Gladiators",
      key: "ep76",
    },
    {
      url: "https://youtu.be/-6wwbZ9NtB4?si=8boPfeFO5LNs61z9",
      number: 75,
      description: "Chalked Cast Drinking Stream, We Changed the RLCS Format?",
      key: "ep75",
    },
    {
      url: "https://youtu.be/XVszHkErS5w?si=PhqZ7lPYlCdFKVUP",
      number: 74,
      description:
        "Chalked Arrives in Korea, RLCS Rostermania and Elevate Importing ZPS",
      key: "ep74",
    },
    {
      url: "https://youtu.be/Vnv7rbhA15Y?si=tBPXw9H63KjRozvw",
      number: 73,
      description:
        "Joyo leaving Moist Esports, RLCS Major 1 Recap, Invisible Hackers in Rocket League",
      key: "ep73",
    },
    {
      url: "https://youtu.be/OmOsCNEGbVU?si=EpVHnaUkZ8Emc9L7",
      number: 72,
      description:
        "Rocket League Cash Cups, Lack of Developer Roadmaps & Rocket Racing Creative",
      key: "ep72",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section
        className="mx-auto max-w-5xl items-center justify-center px-8 py-8 lg:py-20"
        id="episodes"
      >
        <h2 className="text-center text-4xl font-extrabold tracking-tight lg:text-6xl">
          Check out our latest episode:
        </h2>
        <div className="mx-auto flex max-w-7xl justify-center px-8 py-8 lg:pb-10 lg:pt-20">
          <iframe
            width="560"
            height="315"
            className="border-2 border-[#320F12]"
            src="https://www.youtube.com/embed/DAcE1vn6erk?si=XgWXuUlUs2O1VKX6"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <section className="bg-[#101111] py-8 lg:pt-10">
        <h2 className="text-center text-3xl tracking-tight lg:text-5xl">
          More Episodes
        </h2>

        <div className="slider-container lg:py-17 mx-auto max-w-7xl gap-16 px-8 py-8 lg:flex-row">
          <Slider {...settings}>
            {episodes.map((episode) => (
              <div
                className="card h-full w-96 rounded-xl bg-base-100 shadow-xl lg:card-side"
                key={episode.key}
              >
                <div className="card-body max-h-52 rounded-xl bg-[#320F12]">
                  <h2 className="card-title">{`Chalked Cast #${episode.number}`}</h2>
                  <p className="line-clamp-2">{episode.description}</p>
                  <div className="card-actions justify-end">
                    <Link
                      href={episode.url}
                      key={episode.key}
                      title={`Chalked Cast #${episode.number}`}
                      target="_blank"
                    >
                      <button className="btn rounded-lg bg-[#99230E]">
                        Listen
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Episodes;
