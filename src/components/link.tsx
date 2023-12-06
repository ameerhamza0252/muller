"use client"
import { BiRightArrowAlt } from "react-icons/bi"

export default function Pagelink({text,url,variant="white"}:{text?:string,url?:string,variant?:string}){
  //console.log(variant)
    return(
        <div className={`flex justify-between items-baseline h-[38px] w-[353px] text-[21px] font-medium border-b-[1px] ${variant=='black'?'border-B-Yellow text-B-Yellow':'border-brand text-brand'} pb-1 `}>
        <text className={`${variant=='black'?'text-white':'text-black'}`}>
          {text?text:'Lore Ipsum'}
        </text>
        <BiRightArrowAlt />
          </div>
    )
}