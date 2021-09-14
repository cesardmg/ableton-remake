import Image from "next/image";

export default function PurpleArt() {
  return (
    <div className="flex content-center justify-between mt-20 align-middle h-50rem max-w-7xl ">
      <div className="relative w-1/3 h-1/3 bg-blueArt">
        <Image
          layout="fill"
          objectFit="cover"
          src="/images/purple-art/ableton-img-7.jpg"
          alt="Sample Ableton Image"
        />
        {/* <div className="bg-purple-300">hi</div> */}
      </div>
      <div className="relative w-2/5 h-2/3 ">
        <Image
          layout="fill"
          objectFit="cover"
          object-position="center"
          src="/images/purple-art/ableton-img-8.jpg"
          alt="Sample Ableton Image"
        />
      </div>
    </div>
  );
}
