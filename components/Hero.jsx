export default function Hero() {
  return (
    <div id="Hero Section and Title">
      <div className="relative max-w-5xl mx-auto">
        <img
          alt="Person producing music"
          src="images/ableton-img-hero.jpg"
          className=""
        />
        <div className="absolute w-auto h-20 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <img
            alt="Ableton Logo"
            src="images/icons/ableton-letters-icon-red.svg"
            className="h-auto w-100 "
          />
        </div>
      </div>
    </div>
  );
}
