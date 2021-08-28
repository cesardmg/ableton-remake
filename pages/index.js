import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex items-center justify-between px-4 py-3">
        <div className="flex">
          <div>
            <img src="images/ableton-logo.png" className="block w-auto h-11" />
          </div>
          <ul className="flex items-center gap-10 pl-10 font-semibold ">
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
          <ul className="flex gap-3 font-semibold ">
            <li>
              <a href="#" className=" text-abletonBlue">
                Try Live for free
              </a>{" "}
            </li>
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Log out</a>
            </li>
          </ul>
        </div>
      </header>

      <main></main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
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
