import Image from "next/image";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";


export default function Footer(){
    return (
        <div className=" flex flex-col px-[20px] py-[40px] md:px-[64px] md:py-[80px] gap-y-[80px] text-black font-[500] text-[14px] font-['DM_Mono']">
            <div className=" flex justify-between">
                <div className=" w-auto md:w-[500px] grid grid-cols-1 gap-[24px]">
                    <Image src="/Icon/muller-technology-logo1.png" width={166} height={36} alt="muller"/>
                    <text className=" font-['DM Mono'] text-[14px] leading-[22.4px]">Join our newsletter to stay up to date on features and releases.</text>
                    <div className=" flex justify-between h-[58px] p-[12px]">
                        <input className=" border-b-[1px] border-brand" placeholder=" Enter your email" />
                        <button className="flex items-center px-[24px] py-[12px] border-b-[1px] border-brand text-[18px] leading-[28.8px]" >Subscribe</button>
                    </div>
                    <text className=" text-[14px]">By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</text>
                </div>
                <div className=" w-full md:w-[444px] grid grid-cols-2 py-[20px] md:py-[55px] gap-y-[16px]">
                    <text>About us</text>
                    <text>News</text>
                    <text>Solutions</text>
                    <text>Solutions</text>
                    <text>Solutions</text>
                    <text>Solutions</text>
                    <text>Solutions</text>
                </div>
            </div>
            <div className=" flex justify-between border-t-[1px] font-[400] border-brand pt-[32px]">
                <div className=" flex flex-wrap gap-x-[24px] lg:gap-x-[30px]">
                    <text>© 2023 Muller Technology. All rights reserved.</text>
                    <text>Privacy Policy</text>
                    <text>Terms of Service</text>
                    <text>Cookie Settings</text>
                </div>
                <div className=" flex gap-2 scale-150 text-brand">
                <FaYoutube/>
                <FaLinkedinIn/>
                </div>
            </div>
        </div>
    )
}