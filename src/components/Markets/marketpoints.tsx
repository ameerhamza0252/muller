import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

export default function MarketPoints({blok}:{blok:any}){
    //console.log(blok.points[0])
    const {points}=blok
    const {colors}=blok;
    return(
        <div className=" flex flex-col lg:flex-row lg:flex-wrap justify-evenly px-[20px] py-[40px] lg:px-[64px] lg:py-[112px] gap-[48px] " style={{backgroundColor:colors[0].background_color,color:colors[0].text_color}} id={blok.anchor_id} {...storyblokEditable(blok)}>
            
                {
                    points.map((point:any)=>(
                        <div className=" lg:w-[325px] flex flex-col gap-[24px]" key={point._uid}>
                            <Image src={blok.icon.filename} width={100} height={100} objectFit="cover" alt={blok.icon.alt} />
                            <text className=" heading4">{point.heading}</text>
                            <text>{point.description}</text>
                        </div>
                    ))
                }
            
        </div>
    )
}