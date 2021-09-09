export default function YellowArt() {
  return (
    <div
      id="Lemonade Images"
      className="relative flex flex-row mx-auto mt-32 h-100"
    >
      <div className="relative z-20 inline-block ">
        <img
          alt="Person producing music"
          src="images/ableton-img-1.jpg"
          className=""
        />
      </div>
      <div className="relative z-10 inline-block ">
        <img
          alt="Person producing music"
          src="images/ableton-img-2.jpg"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-y-0 right-0 z-0 w-7/12 h-100 bg-lemonade"></div>
    </div>
  );
}
