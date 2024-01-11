"use client"
import ItemsCard from "@/components/CommonComponents/ItemCard";
import { handleMissingColors } from "@/utils";
import { inView, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function SolutionsList({blok}:{blok:any}){

  const ref = useRef(null)
  const isInView = useInView(ref)

    const {card_divider_color}=blok;
    const {buttontext}=blok;
    const {solutions}=blok;
    let {colors}=blok;
    colors=handleMissingColors(colors)
    return(
      
        <div className={`flex flex-col h-auto py-[30px] lg:py-[95px] md:px-[24px] xl:px-[34px]`} id="solutions" ref={ref} style={{backgroundColor:colors[0].background_color,color:colors[0].text_color}} >
          <text className=' text-[21px]'>{blok.title}</text>
          <text className=" max-w-[600px] heading2 mt-[30px]" >{blok.heading}</text>
          <div className=' grid grid-cols-1 md:grid-cols-2 w-full justify-center gap-[20px] lg:px-[10px] mt-[30px] lg:mt-[65px]'>
             
                <ItemsCard isInView={isInView} divider_color={card_divider_color} link_variant={colors[0].link_variant} buttontext={buttontext} blok={solutions}/>
             
          </div>
      </div>
      
    )
}
