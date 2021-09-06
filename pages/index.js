import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ableton Remake</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex items-center justify-between px-4 py-5 pl-6 mx-auto border-b-2 border-gray-200 max-w-7xl ">
        <div className="flex px-4">
          <div>
            <img src="images/ableton-icon.svg" className="block w-auto h-7" />
          </div>
          <ul className="flex items-center gap-10 pl-10 font-semibold text-mediumFont ">
            <li>
              <a href="#">Live</a>{" "}
            </li>
            <li>
              <a href="#">Push</a>{" "}
            </li>
            <li>
              <a href="#">Link</a>{" "}
            </li>
            <li>
              <a href="#">Shop</a>{" "}
            </li>
            <li>
              <a href="#">Packs</a>{" "}
            </li>
            <li>
              <a href="#">Help</a>{" "}
            </li>
            <li>
              <a href="#" className="font-semibold text-abletonOrange">
                More +
              </a>{" "}
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex items-center gap-6 pr-6 font-semibold ">
            <li>
              <a
                href="#"
                className="font-semibold text-mediumFont text-abletonBlue"
              >
                Try Live for free
              </a>{" "}
            </li>
            <li>
              <a href="#" className="text-sm">
                Account
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                Log out
              </a>
            </li>
          </ul>
        </div>
      </header>

      <div id="sticky navbar" className="mx-auto max-w-7xl">
        <ul className="flex p-6 pl-10 text-sm font-semibold gap-9 ">
          <li>
            <a href="#" className="text-abletonOrange">
              About
            </a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
        </ul>
      </div>

      <main className="mx-auto max-w-7xl">
        <div id="Hero Section and Title">
          <div className="relative max-w-5xl mx-auto">
            <img
              alt="Person producing music"
              src="images/ableton-img-1.jpg"
              className=""
            />
            <div className="absolute w-auto h-20 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <img
                alt="Ableton Logo"
                src="images/ableton-letters-icon-red.svg"
                className="h-auto w-100 "
              />
            </div>
          </div>
        </div>

        <section id="Content" className="mx-auto max-w-7xl">
          <div
            id="First Paragraph"
            className="flex flex-col gap-5 mx-auto mt-24 max-w-prose"
          >
            <h2 className="font-semibold leading-relaxed text-pxl">
              We make <span className="text-abletonBlue">Live</span>,{" "}
              <span className="text-abletonBlue">Push</span> and
              <span className="text-abletonBlue"> Link</span> — unique software
              and hardware for music creation and performance. With these
              products, our community of users creates amazing things.
            </h2>
            <p className="text-lg">
              Ableton was founded in 1999 and released the first version of Live
              in 2001. Our products are used by a community of dedicated
              musicians, sound designers, and artists from across the world.
            </p>
          </div>

          <div
            id="Lemonade Images"
            className="relative flex flex-row mx-auto mt-32 h-100"
          >
            <div className="relative z-20 inline-block ">
              <img
                alt="Person producing music"
                src="images/ableton-img-2.jpg"
                className=""
              />
            </div>
            <div className="relative z-10 inline-block ">
              <img
                alt="Person producing music"
                src="images/ableton-img-3.jpg"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-y-0 right-0 z-0 w-7/12 h-100 bg-lemonade"></div>
          </div>

          <div
            id="2nd Paragraph"
            className="flex flex-col gap-5 mx-auto mt-24 max-w-prose"
          >
            <h2 className="font-semibold leading-relaxed text-pxl">
              Making music isn’t easy. It takes time, effort, and learning. But
              when you’re in the flow, it’s incredibly rewarding.
            </h2>
            <p className="text-lg">
              We feel the same way about making Ableton products. The driving
              force behind Ableton is our passion for what we make, and the
              people we make it for.
            </p>
          </div>

          <div
            id="Dummy Video Image"
            className="items-center w-1/2 mx-auto mt-24 "
          >
            <div>
              <img className="relative" src="images/video-image.png"></img>
            </div>
            <p className="mt-1 text-xs font-semibold">
              Why Ableton - Juanpe Bolivar
            </p>
          </div>

          <div
            id="3rd Paragraph"
            className="flex flex-col gap-5 mx-auto mt-24 max-w-prose"
          >
            <h2 className="font-semibold leading-relaxed text-pxl">
              We are more than 350 people from 30 different countries divided
              between our headquarters in Berlin and our offices in Los Angeles
              and Tokyo.
            </h2>
            <p className="text-lg">
              Most of us are active musicians, producers, and DJs, and many of
              us use Live and Push every day. We come from a wide range of
              cultural and professional backgrounds. Some of us have PhDs, some
              are self-taught, and most of us are somewhere in between. What
              connects us is the shared belief that each of us has the skills
              and knowledge to contribute to something big: helping to shape the
              future of music culture.
            </p>
          </div>
        </section>
      </main>

      <footer className="flex items-center justify-center w-full h-24 pt-60 mb-96 mt-96">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}
