"use state"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { capitalizeFirstLetter } from "./navbar"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
  import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
import { storyblokEditable } from "@storyblok/react"
import {  IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/state_stores/MobileMenueStore"
import { menue_close, mobile_state_toggle } from "@/state_stores/Mobile_Menue_Slice"



export function MobileMenue({blok}:{blok:any}){
    //const [isOpen,setIsOpen]=useState(false);
    const [expanded,setExpanded]=useState(-99)
    const dispatch=useDispatch()
    const mobile_state=useSelector((state:RootState)=>state.Mobile_Menue_Slice.opened);

    const {background_color}=blok;
    const {text_color}=blok;
    //console.log("Redux State", mobile_state)
    //const mobile_menue_state

    return <div className={`w-full sticky flex justify-between z-50 top-0 min-h-[37px] lg:invisible  lg:hidden `} style={{backgroundColor:mobile_state?background_color:""}} {...storyblokEditable(blok)}>
            <Link href={blok.logo_link.cached_url=="home"?"/":blok.logo_link.url}><Image className=" drop-shadow-2xl z-40" height={35} width={166} src={blok.logo.filename} alt={blok.logo.alt} /></Link>
            <div className={` flex flex-row-reverse items-center gap-[10px] md:gap-[20px]  px-[20px] rounded-bl-[8px] `} style={{backgroundColor:background_color}}>
            {
                blok.socials.map((social:any)=>(
                    <Link href={social.url.url} target="_blank"><Image src={social.image.filename} alt={social.image.alt} width={24} height={24} key={social._uid} /></Link>
                ))
            }
            <Popover open={mobile_state}>
            <PopoverTrigger onClick={()=>(dispatch(mobile_state_toggle()))} style={{backgroundColor:background_color}} asChild>
                <Button className=" flex flex-col gap-[6px] items-end text-white ">{mobile_state?<RxCross1/>:<><hr className=" w-[35px]"/><hr className=" w-[20px]"/></>}</Button>
            </PopoverTrigger>
            <PopoverContent className=" sticky w-screen min-h-screen flex flex-col text-center -mt-2 border-0 bg-cover" style={{backgroundColor:background_color,color:text_color}}>
            <Accordion className=" flex flex-col gap-[10px] text-center" allowToggle>
            {
                blok.name.map((n:any,index:number)=>(
                    <AccordionItem className=" w-full flex flex-col justify-evenly min-h-[37px] " key={n._uid}>
                        <div className=" grid grid-cols-2 items-center justify-center">
                        {
                            n.items.length>0?
                                <AccordionButton w={"auto"} justifySelf={'end'}  alignSelf={"self-start"} onClick={()=>expanded==index?setExpanded(-99):setExpanded(index)} className="  ">
                                {expanded==index?<IoIosArrowDown/>:<IoIosArrowForward />}
                                </AccordionButton>
                                :<div className=" w-full invisible"><IoIosArrowDown/></div>
                        }
                        <Link onClick={()=>(dispatch(menue_close()))} href={n.link.cached_url=="home"?"/":"/"+capitalizeFirstLetter(n.link.cached_url)} className=" justify-self-start ">{n.lable}</Link>
                        </div>
                        <AccordionPanel className=" flex flex-col ">
                        {
                            n.items.map((item:any)=>(
                                <div className="grid grid-cols-2 w-full  border-b border-white">
                                    <div className=" w-full"></div>
                                <Link onClick={()=>(dispatch(menue_close()))} href={item.url.linktype=="story"?"/"+item.url.cached_url:"/"+capitalizeFirstLetter(n.link.cached_url.split("/")[0])+item.url.url} className=" text-start justify-self-start py-[8px] " key={item._uid}>{item.Lable}</Link>
                                </div>
                            ))
                        }
                        </AccordionPanel>
                    </AccordionItem>
                ))
            }
            </Accordion>
            </PopoverContent>
            </Popover>
            </div>
        </div>
}

/**
 * {
                                n.items.map((item:any)=>(
                                    <Link href={item.url.linktype=="story"?"/"+item.url.cached_url:"/"+capitalizeFirstLetter(n.link.cached_url.split("/")[0])+item.url.url} className=" py-[8px] border-b border-white " key={item._uid}>{item.Lable}</Link>
                                ))
                        }
 */


function ExpandComponent({n}:{n:any}){
    const [expand,setExpand]=useState(false)
    return(
        <Collapsible
            open={expand}
            onOpenChange={setExpand}
            className="w-[350px] space-y-2"
            key={n._uid}
            >
            <div className="flex items-center justify-between space-x-4 px-4">
                <CollapsibleTrigger asChild>
                <Button variant="outline" size="sm">
                    <span className="">Toggle</span>
                </Button>
                </CollapsibleTrigger>
                <Link href={n.link.cached_url=="home"?"/":"/"+capitalizeFirstLetter(n.link.cached_url)} className="">{n.lable}</Link>
            </div>
            
            <CollapsibleContent className="space-y-2">
                <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                @radix-ui/colors
                </div>
                <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                @stitches/react
                </div>
            </CollapsibleContent>
        </Collapsible>
    )
}