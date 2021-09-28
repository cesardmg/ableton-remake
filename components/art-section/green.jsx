export default function GreenArt() {
  return (
    <div className="relative flex items-center mt-10 lg:my-32 lg:overflow-hidden h-greenArtBH justify-evenly ">
      <div className="absolute left-0 z-0 bg-greenArt w-greenArtBW h-greenArtBH"></div>
      <div className="z-10 flex flex-col ">
        <img
          className="object-cover w-greenArt12W h-greenArt12H"
          src="images/green-art/ableton-img-3.jpg"
        ></img>
        <img
          className="object-cover mt-9 w-greenArt12W h-greenArt12H "
          src="images/green-art/ableton-img-4.jpg"
        ></img>
      </div>
      <img
        className="z-10 object-cover w-greenArt3W h-greenArt3H"
        src="images/green-art/ableton-img-5.jpg"
      ></img>
    </div>
  );
}
