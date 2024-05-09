import { FaFacebook, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const HeaderTop = () => {
  return (
    <nav className="border-b border-gray-200 hidden sm:block ">
        <div className="container py-4 ">
            <div className=' flex justify-between items-center'>
                <div className='hidden lg:flex gap-1'>

                    <div className="header_top_icon_wrapper">
                        <FaFacebook />
                    </div>
                    <div className="header_top_icon_wrapper">
                        <FaXTwitter />

                    </div>
                    <div className="header_top_icon_wrapper">
                        <FaLinkedinIn />
                    </div>
                </div>

                <div className='text-gray-500 text-[12px]'>
                    <b>Free Shipping </b>on Orders Above 499
                </div>


                <div className="flex gap-4">
                    <select className="text-gray-500 text-[12px] w-[80px]" name="currency" id="currency" >
                        <option value="USD">USD </option>
                        <option value="EUR">EUR </option>
                        <option value="INR">INR</option>
                    </select>

                    <select className="text-gray-500 text-[12px] w-[80px]" name="language" id="language">
                        <option value="English">English</option>
                        <option value="Hindi">हिंदी</option>
                    </select>

                </div>
            </div>


        </div>
    </nav>
  )
}

export default HeaderTop