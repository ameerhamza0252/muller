import { storyblokEditable } from "@storyblok/react";
import Pagelink from "../link";

export default function SignUpMarkets({blok}:{blok:any}){
    //console.log(blok.link)
    const {colors}=blok;
    return(
        <div className="  grid grid-cols-1 md:grid-cols-2 px-[20px] py-[40px] lg:px-[64px] lg:py-[112px] gap-[20px] md:gap-0 md:justify-between items-center md:items-start " style={{backgroundColor:colors[0].background_color,color:colors[0].text_color}} id={blok.anchor_id} {...storyblokEditable(blok)}>
            <text className=" heading2">{blok.heading}</text>
            <div className="  grid grid-cols-1 justify-between items-start gap-[20px] md:h-[276px] ">
                <text className=" font-[Roboto]">{blok.overview}</text>
                <input className=" p-[12px] text-grey-2 border-b-[1px]" style={{borderBottomColor:colors[0].border_color}} placeholder={blok.placeholder} />
                <div className=" flex items-center gap-[20px]">
                    <hr className=" w-[30px]" style={{borderColor:colors[0].border_color}} />
                    <text>{blok.disclaimer}</text>
                </div>
                {
                    blok.link.map((link:any)=>(
                        <Pagelink variant={colors[0].link_variant} text={link.Lable} url={link.url.linktype=="email"?"mailto:"+link.url.url:link.url.url} />
                    ))
                }
            </div>
        </div>
    )
}