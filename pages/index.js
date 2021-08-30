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

        <div id="Content" className="mx-auto max-w-7xl">
          <div
            id="First Paragraph"
            className="flex flex-col gap-5 mx-auto mt-24 max-w-prose"
          >
            <p className="font-semibold leading-relaxed text-pxl">
              We make <span className="text-abletonBlue">Live</span>,{" "}
              <span className="text-abletonBlue">Push</span> and
              <span className="text-abletonBlue"> Link</span> — unique software
              and hardware for music creation and performance. With these
              products, our community of users creates amazing things.
            </p>
            <p className="text-lg">
              Ableton was founded in 1999 and released the first version of Live
              in 2001. Our products are used by a community of dedicated
              musicians, sound designers, and artists from across the world.
            </p>
          </div>

          <div
            id="First Paragraph"
            className="flex flex-col gap-5 mx-auto mt-24 max-w-prose"
          >
            <p className="font-semibold leading-relaxed text-pxl">
              We make <span className="text-abletonBlue">Live</span>,{" "}
              <span className="text-abletonBlue">Push</span> and
              <span className="text-abletonBlue"> Link</span> — unique software
              and hardware for music creation and performance. With these
              products, our community of users creates amazing things.
            </p>
            <p className="text-lg">
              Ableton was founded in 1999 and released the first version of Live
              in 2001. Our products are used by a community of dedicated
              musicians, sound designers, and artists from across the world.
            </p>
          </div>
          <div> </div>

          <div className="relative flex flex-row mx-auto mt-32 h-100">
            <div className="relative inline-block w-5/12 h-full bg-gray-300 ">
              <img
                alt="Person producing music"
                src="images/ableton-img-2.jpg"
                className=""
              />
            </div>
            <div className="relative inline-block w-7/12 h-100">
              <img
                alt="Person producing music"
                src="images/ableton-img-3.jpg"
                className=""
              />
            </div>
            <div className="absolute w-7/12 bg-opacity-25 h-100 bg-lemonade "></div>
          </div>
        </div>
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
