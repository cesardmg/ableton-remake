import Chevron from "./Chevron";

export default function Footer() {
  return (
    <>
      <div className="border-b-2"></div>
      <div className="w-5/6 mx-auto mt-28 max-w-7xl ">
        <div>
          <img
            alt="Ableton Logo"
            src="images/icons/ableton-letters-icon.svg"
            className="w-48 h-auto pb-14 "
          ></img>
        </div>

        <div className="flex justify-between mb-16 leading-8 text-mediumFont">
          <div className="flex justify-between w-2/3 ">
            <div className="flex flex-col ">
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
              <div className="flex pt-2 gap-x-2">
                <a href="#">
                  <img
                    className="w-10 h-auto"
                    src="/images/icons/facebook-icon.png"
                  ></img>
                </a>
                <a href="#">
                  <img
                    className="w-10 h-auto"
                    src="/images/icons/twitter-icon.png"
                  ></img>
                </a>
                <a href="#">
                  <img
                    className="w-10 h-auto"
                    src="/images/icons/youtube-icon.png"
                  ></img>
                </a>
                <a href="#">
                  <img
                    className="w-10 h-auto"
                    src="/images/icons/instagram-icon.png"
                  ></img>
                </a>
              </div>
            </div>
            <div className="flex flex-col w-3/6 leading-7 ">
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
          <div className="flex flex-col w-2/5 ">
            <h3 className="font-semibold">Sign up to our newsletter</h3>
            <p>
              Enter your email address to stay up to date with the latest
              offers, tutorials, downloads, surveys and more.
            </p>
            <form className="flex mt-3 ">
              <input
                className="flex-auto px-4 py-2 text-lg rounded-none bg-abletonGray"
                placeholder="Email Adress"
              ></input>
              <button className="px-6 py-2 text-lg font-semibold text-white rounded-none bg-abletonBlue ">
                Sign Up
              </button>
            </form>
          </div>
        </div>

        <div className="flex justify-between mb-16 leading-8 text-mediumFont">
          <div className="flex justify-between w-2/3 ">
            <div className="flex flex-col ">
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
            <div className="flex flex-col w-3/6 leading-7">
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
          <div className="flex flex-col w-2/5 ">
            <h3 className="font-semibold">Language and Location</h3>
            <div className="flex text-xs gap-x-0.5 ">
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

        <div className="flex justify-between text-xs font-semibold">
          <div>
            <ul className="flex gap-5">
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
          <div className="flex items-center gap-x-3">
            <p>Made in Berlin</p>
            <img src="images/icons/ableton-icon.svg" className="w-auto h-5 " />
          </div>
        </div>
      </div>
    </>
  );
}
