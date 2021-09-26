import Chevron from "./Chevron";

export default function Footer() {
  return (
    <div className="text-sm lg:text-base">
      <div className="border-b-2 "></div>
      {/*  -----------------------------Logo---------------------------------- */}
      <div className="w-5/6 mx-auto mt-10 lg:mt-28 max-w-7xl">
        <div id="logo">
          <img
            alt="Ableton Logo"
            src="images/icons/ableton-letters-icon.svg"
            className="w-5/12 h-auto lg:w-48 pb-14"
          ></img>
        </div>
        {/*  --------------------------------------------------------------- */}
        <div className="lg:justify-between lg:items-center lg:flex mt-9 lg:mt-0 lg:mb-16 lg:leading-8 ">
          <div
            id="newsletter form"
            className="order-last lg:flex lg:flex-col lg:w-2/5 "
          >
            <div className="leading-6 lg:leading-normal">
              <h3 className="font-semibold">Sign up to our newsletter</h3>
              <p>
                Enter your email address to stay up to date with the latest
                offers, tutorials, downloads, surveys and more.
              </p>
            </div>
            <form className="flex mt-3 ">
              <input
                className="flex-auto px-4 py-2 rounded-none lg:py-2 bg-abletonGray"
                placeholder="Email Adress"
              ></input>
              <button className="px-6 font-semibold text-white rounded-none lg:py-2 bg-abletonBlue ">
                Sign Up
              </button>
            </form>
          </div>
          <div className="flex flex-col order-first gap-y-1 lg:leading-normal">
            <a>
              Register Live or Push
              <Chevron />
            </a>
            <a>
              About Ableton
              <Chevron />
            </a>
            <a>
              Jobs
              <Chevron />
            </a>
            <div className="flex pt-2 mt-1 gap-x-2 lg:mt-0">
              <a href="#">
                <img
                  className="h-auto w-9 lg:w-10"
                  src="/images/icons/facebook-icon.png"
                ></img>
              </a>
              <a href="#">
                <img
                  className="h-auto w-9 lg:w-10"
                  src="/images/icons/twitter-icon.png"
                ></img>
              </a>
              <a href="#">
                <img
                  className="h-auto w-9 lg:w-10"
                  src="/images/icons/youtube-icon.png"
                ></img>
              </a>
              <a href="#">
                <img
                  className="h-auto w-9 lg:w-10"
                  src="/images/icons/instagram-icon.png"
                ></img>
              </a>
            </div>
          </div>

          <div className="flex flex-col mt-10 lg:justify-end lg: gap-y-1 lg:gap-y-0 lg:w-3/6 lg:leading-7 ">
            <h3 className="font-semibold">Education</h3>
            <a>
              Offers for students and teachers
              <Chevron />
            </a>
            <a>
              Ableton for the Classroom
              <Chevron />
            </a>
            <a>
              Ableton for Colleges and Universities
              <Chevron />
            </a>
          </div>
        </div>
        {/*  --------------------------------------------------------------- */}

        <div className=" mt-9 lg:mt-0 lg:flex lg:justify-between lg:mb-16 lg:leading-8">
          <div className="lg:flex lg:justify-between lg:w-2/3 ">
            <div className="flex flex-col gap-y-1 lg:gap-y-0 ">
              <h3 className="font-semibold">Community</h3>
              <a>
                Find Ableton User Groups
                <Chevron />
              </a>
              <a>
                Find Certified Training
                <Chevron />
              </a>
              <a>
                Become a Certified Trainer
                <Chevron />
              </a>
            </div>
            <div className="flex flex-col mt-9 lg:mt-0 gap-y-1 lg:gap-y-0 lg:w-3/6 lg:leading-7">
              <h3 className="font-semibold">Distributors</h3>
              <a>
                Find Distributors <Chevron />
              </a>
              <a>
                Try Push in-store
                <Chevron />
              </a>
            </div>
          </div>
          <div className="flex flex-col mt-6 lg:mt-0 lg:w-2/5 ">
            <h3 className="my-3 font-semibold ">Language and Location</h3>
            <div className="flex  gap-x-0.5 ">
              <button className="px-2 py-2 font-semibold rounded-none bg-abletonGray">
                English
                <img
                  className="inline-flex w-2 h-1.5 ml-12 "
                  src="images/icons/arrow.svg"
                ></img>
              </button>
              <button className="flex items-center justify-between w-3/6 px-2 py-2 font-semibold rounded-none bg-abletonGray">
                <span>United States</span>
                <img
                  className="inline-flex w-2 h-1.5 "
                  src="images/icons/arrow.svg"
                ></img>
              </button>
            </div>
          </div>
        </div>
        {/*  -----------------------------Last---------------------------------- */}
        <div className="items-center text-xs font-semibold mt-9 lg:mt-0 lg:flex lg:justify-between">
          <div>
            <ul className="flex flex-col gap-3 lg:flex-row lg:flex lg:gap-5">
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Press Resources</a>
              </li>
              <li>
                <a href="#">Legal Info</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Cookie Settings</a>
              </li>
              <li>
                <a href="#">Imprint</a>
              </li>
            </ul>
          </div>
          <div className="flex lg:mt-0 mt-11 lg:items-center gap-x-3 ">
            <p className="order-last lg:order-first">Made in Berlin</p>
            <img src="images/icons/ableton-icon.svg" className="w-auto h-5 " />
          </div>
        </div>
      </div>
    </div>
  );
}
