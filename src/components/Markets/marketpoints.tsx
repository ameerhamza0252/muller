import { AnimateFromBelowComponent, AnimateFromFarRightComponent } from "@/AnimationUtils";
import { handleMissingColors } from "@/utils";
import { storyblokEditable } from "@storyblok/react";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function MarketPoints({blok}:{blok:any}){
    const ref=useRef(null);
    const isInView=useInView(ref,{once:true,margin:"-10px"});
    const {points}=blok
    let {colors}=blok;
    colors=handleMissingColors(colors)
    return(
        <div ref={ref} className=" grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 px-[20px] py-[40px] lg:px-[64px] lg:py-[112px] gap-[48px] min-h-max overflow-hidden " style={{backgroundColor:colors[0].background_color,color:colors[0].text_color}} id={blok.anchor_id} {...storyblokEditable(blok)}>
                {
                    points.map((point:any)=>(
                        <div className=" flex flex-col  gap-[24px]" key={point._uid}>
                            {
                                isInView&&
                                <AnimateFromFarRightComponent className="">
                                    <Image src={blok.icon.filename} width={100} height={100} objectFit="cover" alt={blok.icon.alt} />
                                </AnimateFromFarRightComponent>
                            }
                            {
                                isInView&&
                                <>
                                    <AnimateFromBelowComponent className="">
                                        <h4 className="  ">{point.heading}</h4>
                                    </AnimateFromBelowComponent>
                                    <AnimateFromBelowComponent className="">
                                        <p className=" ">{point.description}</p>
                                    </AnimateFromBelowComponent>
                                </>
                            }
                            
                        </div>
                    ))
                }
        </div>
    )
}

