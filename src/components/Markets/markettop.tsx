import { storyblokEditable } from "@storyblok/react";
import Pagelink from "../link";
import { handleMissingColors } from "@/utils";

export default async function MarketTop({blok}:{blok:any}) {
    let {colors}=blok;
    colors=handleMissingColors(colors)
    return(
        <div className=" flex items-end justify-start  lg:h-[500px] xl:h-[800px] px-[20px] lg:px-[64px] py-[40px] lg:py-[112px] " style={{backgroundColor:colors[0].background_color,color:colors[0].text_color}} id={blok.anchor_id} {...storyblokEditable(blok)}>
            <div className=" flex flex-col gap-[24px]">
                <h1 className=" ">{blok.heading}</h1>
                <p>{blok.overview}</p>
                {
                    blok.link.map((link:any)=>(
                        <Pagelink variant={colors[0].link_variant} text={link.Lable} url={link.url.url} key={link._uid} />
                    ))
                }
            </div>
        </div>
    )
}