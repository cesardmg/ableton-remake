export default function Footer() {
  return (
    <div className="max-w-4xl mx-auto mb-96 mt-96">
      <div>
        <img
          alt="Ableton Logo"
          src="images/icons/ableton-letters-icon.svg"
          className="w-48 h-auto pb-14 "
        ></img>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col bg-gray-100 ">
          <a>Register Live or Push</a>
          <a>About Ableton</a>
          <a>Jobs</a>
        </div>
        <div className="flex flex-col bg-blue-200">
          <h3>Education</h3>
          <a>Offers for students and teachers</a>
          <a>Ableton for the Classroom</a>
          <a>Ableton for Colleges and Universities</a>
        </div>
        <div className="flex flex-col bg-red-50">
          <h3>Sign up to our newsletter</h3>
          <p>
            Enter your email address to stay up to date with the latest offers,
            tutorials, downloads, surveys and more.
          </p>
          <form></form>
          <input></input>
          <button></button>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col bg-gray-100">
          <h3>Community</h3>
          <a>Find Ableton User Groups</a>
          <a>Find Certified Training</a>
          <a>Become a Certified Trainer</a>
        </div>
        <div className="flex flex-col bg-blue-100">
          <h3>Distributors</h3>
          <a>Find Distributors</a>
          <a>Try Push in-store</a>
        </div>
        <div className="flex flex-col bg-red-100">
          <h3>Language and Location</h3>
          <div className="flex">
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
        <div className="flex">
          <p>Made in Berlin</p>
          <img src="images/icons/ableton-icon.svg" className="w-auto h-5 " />
        </div>
      </div>
    </div>
  );
}
