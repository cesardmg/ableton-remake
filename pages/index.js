import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex items-center justify-between w-full px-4 py-5 pl-6 border-b-2 border-gray-200 ">
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

      <div id="sticky navbar">
        <ul className="flex p-6 pl-10 text-sm font-semibold gap-9">
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

      <main>
        <div id="Hero Section and Title">
          <div className="max-w-5xl mx-auto">
            <img src="images/ableton-img-1.jpg" className="" />
            <img
              src="images/ableton-letters-icon-red.svg"
              className="relative z-10 block w-2/5 h-auto mx-auto bottom-96"
            />
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 pt-60">
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
