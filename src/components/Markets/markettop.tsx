import { storyblokEditable } from "@storyblok/react";
import Pagelink from "../link";

export default async function MarketTop({blok}:{blok:any}) {
    return(
        <div className=" flex items-end justify-start h-[400px] lg:h-[500px] xl:h-[800px] px-[20px] lg:px-[64px] text-black py-[40px] lg:py-[112px] " id={blok.anchor_id} {...storyblokEditable(blok)}>
            <div className=" flex flex-col gap-[24px]">
                <text className=" heading1">{blok.heading}</text>
                <text>{blok.overview}</text>
                <Pagelink text={blok.link.Lable} url={blok.link.url} />
            </div>
        </div>
    )
}