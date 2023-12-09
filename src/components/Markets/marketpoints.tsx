import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

export default function MarketPoints({blok}:{blok:any}){
    //console.log(blok.points[0])
    const {points}=blok
    return(
        <div className=" flex flex-col lg:flex-row px-[20px] py-[40px] lg:px-[64px] lg:py-[112px] gap-[48px] text-black" {...storyblokEditable(blok)}>
            
                {
                    points.map((point:any)=>(
                        <div className=" lg:w-[325px] flex flex-col gap-[24px]" key={point._uid}>
                            <Image src={"/Icon/Relume.svg"} width={48} height={48} alt="box" />
                            <text className=" heading4">{point.heading}</text>
                            <text>{point.description}</text>
                        </div>
                    ))
                }
            
        </div>
    )
}