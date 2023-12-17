import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import { capitalizeFirstLetter } from "./navbar";


export default function Footer({blok}:{blok:any}){
    //console.log(blok)
    return (
        <div className=" flex flex-col px-[20px] py-[40px] md:px-[64px] md:py-[80px] gap-y-[80px] text-black font-[500] text-[14px] font-['DM_Mono']">
            <div className=" flex justify-between">
                <div className=" w-auto md:w-[500px] grid grid-cols-1 gap-[24px]">
                <Link href={blok.logo_link.cached_url=="home"?"/":blok.logo_link.url}><Image src={blok.logo.filename} width={166} height={36} alt={blok.logo.alt}/></Link>
                    <text className=" font-['DM Mono'] text-[14px] leading-[22.4px]">{blok.message}</text>
                    <div className=" flex justify-between h-[58px] p-[12px]">
                        <input className=" border-b-[1px] border-brand" placeholder=" Enter your email" />
                        <Link href={blok.subscribe.url} className="flex items-center px-[24px] py-[12px] border-b-[1px] border-brand text-[18px] leading-[28.8px]" >Subscribe</Link>
                    </div>
                    <text className=" text-[14px]">{blok.disclaimer}</text>
                </div>
                <div className=" w-full md:w-[444px] grid grid-cols-2 py-[20px] md:py-[55px] gap-y-[16px]">
                    {
                        blok.links.map((link:any)=>(
                            <Link href={link.url.cached_url=="home"?"/":"/"+capitalizeFirstLetter(link.url.cached_url.split("/")[0])} key={link._uid}>{link.Lable}</Link>
                        ))
                    }
                </div>
            </div>
            <div className=" flex justify-between border-t-[1px] font-[400] border-brand pt-[32px]">
                <div className=" flex flex-wrap gap-x-[24px] lg:gap-x-[30px]">
                    {
                        blok.corporate_links.map((link:any)=>(
                            <Link href={link.url.url}>{link.Lable}</Link>
                        ))
                    }
                </div>
                <div className=" flex gap-2 scale-150 text-brand">
                {
                    blok.socials.map((social:any)=>(
                        <Link href={social.url.url} target="_blank"><Image src={social.image.filename} alt={social.image.alt} width={24} height={24} key={social._uid} /></Link>
                    ))
                }
                </div>
            </div>
        </div>
    )
}