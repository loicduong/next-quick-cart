import facebookIcon from '@/assets/icons/facebook.svg';
import instagramIcon from '@/assets/icons/instagram.svg';
import logoIcon from '@/assets/icons/logo.svg';
import twitterIcon from '@/assets/icons/twitter.svg';
import Image from "next/image";

export default function SellerFooter() {
  return (
    <div className="flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-10">
      <div className="flex items-center gap-4">
        <Image className="hidden md:block" src={logoIcon} alt="logo" />

        <div className="hidden md:block h-7 w-px bg-gray-500/60"></div>

        <p className="py-4 text-center text-xs md:text-sm text-gray-500">
          Copyright 2025 © loicduong.dev All Right Reserved.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <a href="#">
          <Image src={facebookIcon} alt="facebook_icon" />
        </a>

        <a href="#">
          <Image src={twitterIcon} alt="twitter_icon" />
        </a>

        <a href="#">
          <Image src={instagramIcon} alt="instagram_icon" />
        </a>
      </div>
    </div>
  )
}