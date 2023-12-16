"use client"
import Pagelink from "@/components/link";
import { useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import MediaRenderer from "../MediaComponent";
import Link from "next/link";
import { capitalizeFirstLetter } from "../navbar";

export default function CareersList({blok}:{blok:any}){
    const [value,setValue]=useState(0)
    //console.log(blok)
    const {countries}=blok;
    const {departments}=countries[value];
    //console.log(departments[0].jobs[0].buttonlink)
    return(
        <>
            
            <div className=" flex flex-col px-[20] lg:px-[64px] py-[50px] lg:py-[112px] gap-[50px]">
                <div className="grid grid-cols-1">
                    <text className=" mb-[16px]">{blok.title}</text>
                    <text className=" heading2">{blok.heading}</text>
                    <text className="">{blok.overview}</text>
                </div>
                <div className=" flex justify-between md:justify-normal md:gap-[24px] mt-[40px] lg:mt-[108px]">
                    {
                        countries.map((country:any,index:number)=>(
                            <button className={`min-w-[180px] px-[34px] ${index==value?'border-b-brand text-brand':'border-b-black'} border-b-[1px] pb-[10px]`} key={country._uid} onClick={()=>setValue(index)} >{country.country}</button>
                        ))
                    }
                </div>
                <div className=" flex flex-col">
                <Accordion type="single" className="" collapsible>
                    {departments.map((department:any)=>(
                    <AccordionItem value={department._uid} className=" gap-0" key={department._uid}>
                        <AccordionTrigger className=" py-[20px] heading3">{department.department}</AccordionTrigger>
                        <AccordionContent className=" flex flex-col py-[32px] gap-[32px] lg:gap-[64px]" >
                            {
                                department.jobs.map((job:any)=>(
                                    <div className=" flex flex-col gap-[24px]" key={job._uid}>
                                        <div className=" flex justify-between">
                                            <div className=" grid grid-cols-1">
                                                <text className=" heading4">{job.heading}</text>
                                                <text className=" font-['DM Mono'] text-[18px] font-[400]">{job.location}</text>
                                            </div>
                                            <Link href={capitalizeFirstLetter(job.buttonlink.cached_url)} target="_blank" className=" min-w-[117px] border-b-brand border-b  px-[20px] py-[8px]">Apply</Link>
                                        </div>
                                        <text className=" w-3/4">{job.overview}</text>
                                    </div>
                                ))
                            }
                        </AccordionContent>
                    </AccordionItem>
                    ))}
                </Accordion>
                </div>
            </div>
            
        </>
    )
}

export function CareersTop({blok}:{blok:any}){
    //console.log(blok)
    const link=blok.link[0]
    return(
        <div className=" relative flex min-h-screen bg-cover bg-[#00000080]/50 items-center justify-center p-5 text-white " style={{backgroundColor:"#00000080/0.5",backgroundImage:`url(/Icon/Solution.png)`}}>
            <div className=" absolute w-[100%] h-[100%] shadow-inner "  onPlay={()=>console.log('Playing')} >
                {
                    blok.media&&blok.media.map((m:any)=>(
                        <MediaRenderer url={m.media.filename} alt={m.media.alt} type={m.type} key={m._uid} />
                    ))
                }
            </div>
            <div className=" flex flex-col lg:w-3/4 text-center justify-center items-center gap-[24px] z-10 ">
                <text className=" heading1">{blok.heading}</text>
                <text>{blok.overview}</text>
                <Pagelink url={link.url.url} text={link.Lable} variant="white" />
            </div>
        </div>
    )
}

export function CareersFAQ({blok}:{blok:any}){
    return(
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
    )
}

export function IndividualsApply({blok}:{blok:any}){
    //console.log(blok)
    const link=blok.link[0]
    //console.log(link)
    return(
        <div className="relative flex h-[400px] bg-cover items-center p-5 text-white" style={{background:`url(/Icon/Solution.png)`, backgroundColor:"#00000080",backgroundBlendMode:"overlay"}}>
                <div className=" absolute w-[100%] h-[100%] shadow-inner "  onPlay={()=>console.log('Playing')} >
                    {
                        blok.media&&blok.media.map((m:any)=>(
                            <MediaRenderer url={m.media.filename} alt={m.media.alt} type={m.type} key={m._uid} />
                        ))
                    }
                </div>
                <div className=" w-3/4 grid grid-cols-1 gap-[24px] z-10 ">
                    <text className=" heading2">{blok.heading}</text>
                    <text>{blok.overview}</text>
                    <Pagelink text={link.Lable} url={link.url.url} variant="white" />
                </div>
            </div>
    )
}