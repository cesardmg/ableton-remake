export default function YellowArt() {
  return (
    <div className="relative flex items-center my-12 lg:my-32 h-yellowArtBH justify-evenly gap-x-7">
      <div className="absolute right-0 z-0 bg-yellowArt w-yellowArtBW h-yellowArtBH"></div>
      <div className="z-10 ">
        <img
          alt="Person producing music"
          src="images/yellow-art/ableton-img-1.jpg"
          className="z-10 object-cover w-yellowArt1W h-yellowArt1H"
        />
      </div>
      <div className="z-10 ">
        <img
          alt="Person producing music"
          src="images/yellow-art/ableton-img-2.jpg"
          className="z-10 object-cover w-yellowArt2W h-yellowArt2H "
        />
      </div>
    </div>
  );
}

{
  /* <div
      id="Lemonade Images"
      className="relative flex flex-row mx-auto mt-32 h-100"
    >
      <div className="relative z-20 inline-block ">
        <img
          alt="Person producing music"
          src="images/yellow-art/ableton-img-1.jpg"
          className=""
        />
      </div>
      <div className="relative z-10 inline-block ">
        <img
          alt="Person producing music"
          src="images/yellow-art/ableton-img-2.jpg"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-y-0 right-0 z-0 w-7/12 h-100 bg-yellowArt"></div>
    </div> */
}
