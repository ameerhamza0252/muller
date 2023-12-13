"use client"
import Pagelink from "@/components/link";
import { useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

export default function Careers({blok}:{blok:any}){
    const [value,setValue]=useState(0)
    return(
        <>
            <div className=" flex min-h-screen bg-cover bg-[#00000080]/50 items-center justify-center p-5 text-white " style={{backgroundColor:"#00000080/0.5",backgroundImage:`url(/Icon/Solution.png)`}}>
                <div className=" flex flex-col lg:w-3/4 text-center justify-center items-center gap-[24px] ">
                    <text className=" heading1">Headingum</text>
                    <text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. </text>
                    <Pagelink variant="white" />
                </div>
            </div>
            <div className=" flex flex-col px-[20] lg:px-[64px] py-[50px] lg:py-[112px] gap-[50px]">
                <div className="grid grid-cols-1">
                    <text className=" mb-[16px]">Join</text>
                    <text className=" heading2">Current Openings</text>
                    <text className="">Explore our available job positions in engineering, sales, and management.</text>
                </div>
                <div className=" flex justify-between md:justify-normal md:gap-[24px] mt-[40px] lg:mt-[108px]">
                    {
                        ['Button1','Buton2'].map((country:any,index:number)=>(
                            <button className={`min-w-[180px] px-[34px] ${index==value?'border-b-brand text-brand':'border-b-black'} border-b-[1px] pb-[10px]`} key={country._uid} onClick={()=>setValue(index)} >{country}</button>
                        ))
                    }
                </div>
                <div className=" flex flex-col">
                <Accordion type="single" className="" collapsible>
                    <AccordionItem value="item-1" className=" gap-0">
                        <AccordionTrigger className=" py-[20px] heading3">Engineering</AccordionTrigger>
                        <AccordionContent className=" flex flex-col py-[32px] gap-[32px] lg:gap-[64px]" >
                            <div className=" flex flex-col gap-[24px]">
                                <div className=" flex justify-between">
                                    <div className=" grid grid-cols-1">
                                        <text className=" heading4">Lorem ipsum dolor sit</text>
                                        <text className=" font-['DM Mono'] text-[18px] font-[400]">Location</text>
                                    </div>
                                    <button className=" min-w-[117px] border-b-brand border-b  px-[20px] py-[8px]">Button</button>
                                </div>
                                <text className=" w-3/4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</text>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className=" gap-0">
                        <AccordionTrigger className=" py-[20px] heading3">Sales</AccordionTrigger>
                        <AccordionContent className=" flex flex-col py-[32px] gap-[32px] lg:gap-[64px]" >
                            <div className=" flex flex-col gap-[24px]">
                                <div className=" flex justify-between">
                                    <div className=" grid grid-cols-1">
                                        <text className=" heading4">Lorem ipsum dolor sit</text>
                                        <text className=" font-['DM Mono'] text-[18px] font-[400]">Location</text>
                                    </div>
                                    <button className=" min-w-[117px] border-b-brand border-b  px-[20px] py-[8px]">Button</button>
                                </div>
                                <text className=" w-3/4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</text>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className=" gap-0">
                        <AccordionTrigger className=" py-[20px] heading3">Commute</AccordionTrigger>
                        <AccordionContent className=" flex flex-col py-[32px] gap-[32px] lg:gap-[64px]" >
                            <div className=" flex flex-col gap-[24px]">
                                <div className=" flex justify-between">
                                    <div className=" grid grid-cols-1">
                                        <text className=" heading4">Lorem ipsum dolor sit</text>
                                        <text className=" font-['DM Mono'] text-[18px] font-[400]">Location</text>
                                    </div>
                                    <button className=" min-w-[117px] border-b-brand border-b  px-[20px] py-[8px]">Button</button>
                                </div>
                                <text className=" w-3/4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</text>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                </div>
            </div>
            <div className=" grid grid-cols-1 lg:grid-cols-2 px-[20] lg:px-[64px] py-[50px] lg:py-[112px] gap-[50px] ">
                <div className=" flex flex-col">
                    <text className=" heading2 mb-[24px]">Frequently Asked Questions</text>
                    <text className=" mb-[32px]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</text>
                    <Pagelink variant="green" />
                </div>
                <div className=" flex flex-col ">
                    <Accordion type="single" collapsible>
                    <AccordionItem value="item-2" className=" gap-0  ">
                        <AccordionTrigger className=" py-[20px] text-[18px] leading-[28.8px] font-[500] font-DM_Mono">What is the hiring process?</AccordionTrigger>
                        <AccordionContent className=" flex flex-col py-[32px] gap-[32px] lg:gap-[64px]" >
                            <text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</text>
                        </AccordionContent>
                    </AccordionItem>
                    
                    </Accordion>
                </div>
            </div>
            <div className="flex h-[400px] bg-cover items-center p-5 text-white" style={{background:`url(/Icon/Solution.png)`, backgroundColor:"#00000080",backgroundBlendMode:"overlay"}}>
                <div className=" w-3/4 grid grid-cols-1 gap-[24px] ">
                    <text className=" heading2">Individuals apply’s</text>
                    <text>We are looking for talented individuals to join our team in the automation and robotics industry. Explore our open positions and apply now!</text>
                    <Pagelink variant="white" />
                </div>
            </div>
        </>
    )
}