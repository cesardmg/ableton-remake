export default function Footer() {
  return (
    <div className="w-5/6 mx-auto max-w-7xl mb-96 mt-96">
      <div>
        <img
          alt="Ableton Logo"
          src="images/icons/ableton-letters-icon.svg"
          className="w-48 h-auto pb-14 "
        ></img>
      </div>

      <div className="flex justify-between mb-20 leading-8 text-mediumFont">
        <div className="flex justify-between w-2/3 ">
          <div className="flex flex-col ">
            <a>Register Live or Push </a>
            <a>About Ableton</a>
            <a>Jobs</a>
          </div>
          <div className="flex flex-col w-3/6 leading-7 ">
            <h3 className="font-semibold">Education</h3>
            <a>Offers for students and teachers</a>
            <a>Ableton for the Classroom</a>
            <a>Ableton for Colleges and Universities</a>
          </div>
        </div>
        <div className="flex flex-col w-2/5 ">
          <h3 className="font-semibold">Sign up to our newsletter</h3>
          <p>
            Enter your email address to stay up to date with the latest offers,
            tutorials, downloads, surveys and more.
          </p>
          <form></form>
          <input></input>
          <button></button>
        </div>
      </div>

      <div className="flex justify-between mb-20 leading-8 text-mediumFont">
        <div className="flex justify-between w-2/3 ">
          <div className="flex flex-col ">
            <h3 className="font-semibold">Community</h3>
            <a>Find Ableton User Groups</a>
            <a>Find Certified Training</a>
            <a>Become a Certified Trainer</a>
          </div>
          <div className="flex flex-col w-3/6 leading-7">
            <h3 className="font-semibold">Distributors</h3>
            <a>Find Distributors</a>
            <a>Try Push in-store</a>
          </div>
        </div>
        <div className="flex flex-col w-2/5 ">
          <h3 className="font-semibold">Language and Location</h3>
          <div className="flex gap-x-6">
            <p>English</p>
            <p>Mexico</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between py-10 text-xs font-semibold">
        <div>
          <ul className="flex gap-5 ">
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
  );
}
