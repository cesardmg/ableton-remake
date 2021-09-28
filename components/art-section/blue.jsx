import Chevron from "../Chevron";

export default function BlueArt() {
  return (
    <div className="m-8 bg-blueArt lg:bg-opacity-0 lg:items-center lg:flex lg:justify-center lg:mt-0 lg:flex-row lg:h-50rem lg:max-w-7xl ">
      <img
        className="lg:object-cover lg:object-right lg:w-5/12 lg:h-2/3"
        src="images\blue-art\ableton-img-9.jpg"
      ></img>
      <div className="p-10 lg:relative lg:w-5/12 lg:bg-blueArt lg:h-2/3 ">
        <div className="lg:absolute lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-80 lg:top-1/2 lg:left-1/2 ">
          <p className="text-lg font-semibold leading-8 lg:text-2xl">
            We’re really proud of the work we’ve done so far. But there’s so
            much more to come. If you’d like to be a part of it, please join us.
          </p>
          <a
            href="#"
            className="block mt-6 text-lg font-semibold text-abletonBlue"
          >
            See latest jobs <Chevron />
          </a>
        </div>
      </div>
    </div>
  );
}

/* <div className="flex flex-col content-center justify-center h-screen mt-20 lg:flex-row lg:h-50rem max-w-7xl ">
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
</div> */
