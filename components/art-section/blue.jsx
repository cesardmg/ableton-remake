import Chevron from "../Chevron";

export default function BlueArt() {
  return (
    <div className="flex justify-center mx-auto mt-20 h-50rem max-w-7xl h-screen-xl max-h-50rem ">
      <img
        className="object-cover object-right w-5/12 h-2/3 "
        src="images\blue-art\ableton-img-9.jpg"
      ></img>

      <div className="relative w-5/12 bg-blueArt h-2/3 ">
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 w-80 top-1/2 left-1/2 ">
          <p className="mb-5 text-2xl font-semibold leading-8 ">
            We’re really proud of the work we’ve done so far. But there’s so
            much more to come. If you’d like to be a part of it, please join us.
          </p>
          <a href="#" className="text-xl font-semibold text-abletonBlue">
            See latest jobs <Chevron />
          </a>
        </div>
      </div>
    </div>
  );
}
