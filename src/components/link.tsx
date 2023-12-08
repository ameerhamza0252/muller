"use client"
import { BiRightArrowAlt } from "react-icons/bi"

export default function Pagelink({text,url,variant="green"}:{text?:string,url?:string,variant?:string}){
  //console.log(variant)
    return(
        <div className={`flex justify-between items-baseline h-[38px] w-[353px] text-[21px] font-medium border-b-[1px] ${variant=='yellow'?'border-B-Yellow text-B-Yellow':variant=='green'?'border-brand text-brand':'text-white border-white'} pb-1 `}>
        <text className={variant=='yellow'?' text-white':variant=='green'?' text-black':'text-white border-white'}>
          {text?text:'Lore Ipsum'}
        </text>
        <BiRightArrowAlt />
          </div>
    )
}