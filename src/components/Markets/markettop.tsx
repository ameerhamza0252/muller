import { storyblokEditable } from "@storyblok/react";
import Pagelink from "../link";

export default async function MarketTop({blok}:{blok:any}) {
    console.log(blok.link)
    return(
        <div className=" flex items-end justify-start  lg:h-[500px] xl:h-[800px] px-[20px] lg:px-[64px] text-black py-[40px] lg:py-[112px] " id={blok.anchor_id} {...storyblokEditable(blok)}>
            <div className=" flex flex-col gap-[24px]">
                <text className=" heading1">{blok.heading}</text>
                <text>{blok.overview}</text>
                {
                    blok.link.map((link:any)=>(
                        <Pagelink text={link.Lable} url={link.url.url} key={link._uid} />
                    ))
                }
            </div>
        </div>
    )
}