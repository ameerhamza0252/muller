import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

export default function Info({blok}:{blok:any}){
    //console.log(blok)
    const {colors}=blok;
    return(
        <div className=" min-h-screen flex flex-col items-center px-[10px] md:px-[20px] lg:px-[64px] xl:px-[94px] py-[36px] md:py-[66px] lg:py-[112px] xl:[150px] " style={{backgroundColor:colors[0].background_color,color:colors[0].text_color}} id={blok.anchor_id} {...storyblokEditable(blok)}>
                <div className=" lg:w-[70%] h-full flex flex-col justify-center gap-4 md:gap-7 lg:gap-[24px]">
                <text className=" heading2 ">{blok.title}</text>
                <text className=" max-w-none prose text-[21px]" style={{color:colors[0].text_color}}>{render(blok.description)}</text>
                </div>
            </div>
    )
}