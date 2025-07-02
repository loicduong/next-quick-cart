import Image from "next/image";
import jblSoundboxImage from "@/assets/images/jbl-soundbox.png";
import mdControllerImage from "@/assets/images/md-controller.png";
import smControllerImage from "@/assets/images/sm-controller.png";
import arrowWhiteIcon from "@/assets/icons/arrow-white.svg";

export default function Banner() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:pl-20 py-14 md:py-0 bg-[#E6E9F2] my-16 rounded-xl overflow-hidden">
      <Image className="max-w-56" src={jblSoundboxImage} alt="jbl_soundbox_image" />

      <div className="flex flex-col items-center justify-center text-center space-y-2 px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-semibold max-w-[290px]">Level Up Your Gaming Experience</h2>

        <p className="max-w-[343px] font-medium text-gray-800/60">
          From immersive sound to precise controls—everything you need to win
        </p>

        <button className="group flex items-center justify-center gap-1 px-12 py-2.5 bg-orange-600 rounded text-white">
          Buy now

          <Image className="group-hover:translate-x-1 transition" src={arrowWhiteIcon} alt="arrow white icon" />
        </button>
      </div>

      <Image className="hidden md:block max-w-80" src={mdControllerImage} alt="md controller image" />

      <Image className="md:hidden" src={smControllerImage} alt="sm controller image" />
    </div>
  );
}