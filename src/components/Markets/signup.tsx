import { storyblokEditable } from "@storyblok/react";
import Pagelink from "../link";

export default function SignUpMarkets({blok}:{blok:any}){
    //console.log(blok.link)
    return(
        <div className="  grid grid-cols-1 md:grid-cols-2 px-[20px] py-[40px] lg:px-[64px] lg:py-[112px] gap-[20px] md:gap-0 md:justify-between items-center md:items-start text-black " {...storyblokEditable(blok)}>
            <text className=" heading2">{blok.heading}</text>
            <div className="  grid grid-cols-1 justify-between items-start md:h-[276px] ">
                <text className=" font-[Roboto]">{blok.overview}</text>
                <text className=" p-[12px] text-grey-2 font-[] border-b-brand border-b-[1px]">Placeholder</text>
                <div className=" flex items-center gap-[20px]">
                    <hr className=" w-[30px]  border-brand" />
                    <text>{blok.disclaimer}</text>
                </div>
                <Pagelink variant="green" text={blok.link[0].Lable} url={blok.link[0].url.url} />
            </div>
        </div>
    )
}