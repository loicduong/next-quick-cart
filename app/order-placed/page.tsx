import Image from "next/image";
import checkmarkImage from "@/assets/images/checkmark.png";

export default function OrderPlaced() {
  return (
    <div className='h-screen flex flex-col justify-center items-center gap-5'>
      <div className="flex justify-center items-center relative">
        <Image className="absolute p-5" src={checkmarkImage} alt='' />

        <div className="animate-spin rounded-full h-24 w-24 border-4 border-t-green-300 border-gray-200"></div>
      </div>

      <div className="text-center text-2xl font-semibold">Order Placed Successfully</div>
    </div>
  )
}