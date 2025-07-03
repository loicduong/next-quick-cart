'use client'

import logoIcon from '@/assets/icons/logo.svg';
import { useAppContext } from '@/contexts/AppContext';
import Image from 'next/image';

export default function SellerNavbar() {
  const { router } = useAppContext();

  return (
    <div className='flex items-center px-4 md:px-8 py-3 justify-between border-b'>
      <Image onClick={() => router.push('/')} className='w-28 lg:w-32 cursor-pointer' src={logoIcon} alt="" />

      <button className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}
