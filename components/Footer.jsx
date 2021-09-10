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
      <div>Third Box</div>
      <div>Fourth Box</div>
    </div>
  );
}
