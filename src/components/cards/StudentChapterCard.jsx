import cardShape from '../../assets/Home/join.png'; // Your button SVG or image
import join from '../../assets/Home/join.png'; // Your button SVG or image


export default function GDSCCard() {
  return (
    <div
      className="relative bg-contain bg-no-repeat bg-center 
                 w-[40%] md:w-[45%] max-w-full h-auto aspect-[3/1.2] 
                 flex flex-col justify-between p-4"
      style={{ backgroundImage: `url(${cardShape})` }}
    >
      <div className="text-sm font-bold text-black pl-2 pt-2">@gdsc_aitpune</div>

      <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black pl-2 mt-2">
        GDSC STUDENT CHAPTER
      </div>

      <div className="mt-4 pl-2">
        <img
          src={join}
          alt="Join Now"
          className="w-36 sm:w-44 h-auto cursor-pointer"
        />
      </div>
    </div>
  );
}
