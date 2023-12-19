import { storyblokEditable } from "@storyblok/react";
import Pagelink from "../link";

export default async function Signup({blok}:{blok:any}) {
    //console.log(blok)
    return(
        <div className=" h-screen flex items-center justify-center text-center bg-black text-white" id={blok.anchor_id} {...storyblokEditable(blok)}>
            <div className=" flex flex-col gap-[24px] px-[20px] md:px-0 md:w-3/4 ">
                <text className=" heading4">{blok.heading}</text>
                <text className=" ">{blok.overview}</text>
                <div className=" flex flex-col self-center md:w-[513px] gap-[20px] ">
                    <input className=" min-w-full border-b-[1px] p-[12px] border-b-B-Yellow h-[58px] bg-black placeholder:text-B-grey " placeholder=" Placeholder"/>
                    <div className=" flex items-center gap-3 mx-2">
                        <hr className=" w-[25px] border-B-Yellow" />
                        <text className=" text-[14px] leading-[22.6px] font-DM_Mono text-start">{blok.disclaimer}</text>
                    </div>
                    <Pagelink url={blok.link[0].url.url} text={blok.link[0].Lable}  variant="yellow" />
                </div>
            </div>
        </div>
    )
}