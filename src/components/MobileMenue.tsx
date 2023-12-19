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

export function MobileMenue({blok}:{blok:any}){
    const [isOpen,setIsOpen]=useState(false);
    const [current,setCurrent]=useState(0)

    return <div className={`w-full absolute flex justify-between z-50 min-h-[37px] lg:invisible  lg:hidden ${!isOpen?"bg-brand":""}`}>
            <Link href={blok.logo_link.cached_url=="home"?"/":blok.logo_link.url}><Image className=" drop-shadow-2xl z-40" height={35} width={166} src={blok.logo.filename} alt={blok.logo.alt} /></Link>
            <div className={` flex flex-row-reverse items-center gap-[10px] md:gap-[20px]  px-[20px] rounded-bl-[8px] bg-brand`}>
            {
                blok.socials.map((social:any)=>(
                    <Link href={social.url.url} target="_blank"><Image src={social.image.filename} alt={social.image.alt} width={24} height={24} key={social._uid} /></Link>
                ))
            }
            <Popover>
            <PopoverTrigger onClick={()=>(setIsOpen(!isOpen))} className=" bg-brand" asChild>
                <Button className=" flex flex-col gap-[6px] items-end "><hr className=" w-[35px]"/><hr className=" w-[20px]"/></Button>
            </PopoverTrigger>
            <PopoverContent className="w-screen min-h-screen flex flex-col text-center bg-brand -mt-2 border-0 text-white">
            <Accordion className=" flex flex-col gap-[10px] text-center" allowToggle>
            {
                blok.name.map((n:any,index:number)=>(
                    <AccordionItem className=" w-full flex flex-col justify-evenly min-h-[37px] ">
                        
                        <AccordionButton className="  ">
                           <AccordionIcon scale={250} direction={90} />
                        </AccordionButton>
                        <Link href={n.link.cached_url=="home"?"/":"/"+capitalizeFirstLetter(n.link.cached_url)} className=" w-full">{n.lable}</Link>
                          
                    <AccordionPanel className=" grid grid-cols-1 ">
                    {
                        n.items.map((item:any)=>(
                            <Link href={item.url.linktype=="story"?"/"+item.url.cached_url:"/"+capitalizeFirstLetter(n.link.cached_url.split("/")[0])+item.url.url} className=" w-full py-[8px] border-b border-white " key={item._uid}>{item.Lable}</Link>
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