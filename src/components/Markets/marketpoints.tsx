import { handleMissingColors } from "@/utils";
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

export default function MarketPoints({blok}:{blok:any}){
    const {points}=blok
    let {colors}=blok;
    colors=handleMissingColors(colors)
    return(
        <div className=" grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 px-[20px] py-[40px] lg:px-[64px] lg:py-[112px] gap-[48px] " style={{backgroundColor:colors[0].background_color,color:colors[0].text_color}} id={blok.anchor_id} {...storyblokEditable(blok)}>
                {
                    points.map((point:any)=>(
                        <div className=" flex flex-col  gap-[24px]" key={point._uid}>
                            <Image src={blok.icon.filename} width={100} height={100} objectFit="cover" alt={blok.icon.alt} />
                            <h4 className="  ">{point.heading}</h4>
                            <p className=" ">{point.description}</p>
                        </div>
                    ))
                }
            
        </div>
    )
}

