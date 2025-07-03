import SellerNavbar from "@/components/seller/Navbar";
import SellerSidebar from "@/components/seller/Sidebar";

export default function SellerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SellerNavbar />

      <div className='flex w-full'>
        <SellerSidebar />

        {children}
      </div>
    </div>
  )
}