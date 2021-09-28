import Image from "next/image";

export default function PurpleArt() {
  return (
    <div className="relative flex items-center justify-between my-20 ">
      <div className="absolute z-0 left-16 w-purpleArtBW h-purpleArtBH bg-purpleArt"></div>
      <img
        className="z-10 object-cover w-purpleArt1W h-purpleArt1H ml-9 lg:ml-20"
        src="images/purple-art/ableton-img-7.jpg"
      />
      <img
        className="z-10 object-cover w-purpleArt2W h-purpleArt2H"
        src="images/purple-art/ableton-img-8.jpg"
      />
    </div>
  );
}

// (
//   <div className="flex content-center justify-between mt-20 align-middle h-50rem max-w-7xl ">
//     <div className="relative w-1/3 h-1/3 bg-blueArt">
//       <Image
//         layout="fill"
//         objectFit="cover"
//         src="/images/purple-art/ableton-img-7.jpg"
//         alt="Sample Ableton Image"
//       />
//       {/* <div className="bg-purple-300">hi</div> */}
//     </div>
//     <div className="relative w-2/5 h-2/3 ">
//       <Image
//         layout="fill"
//         objectFit="cover"
//         object-position="center"
//         src="/images/purple-art/ableton-img-8.jpg"
//         alt="Sample Ableton Image"
//       />
//     </div>
//   </div>
// );
