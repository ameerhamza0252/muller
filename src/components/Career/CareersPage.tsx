"use client"
import Pagelink from "@/components/link";
import { useRef, useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import MediaRenderer from "../MediaComponent";
import Link from "next/link";
import { capitalizeFirstLetter } from "../navbar";
import { storyblokEditable } from "@storyblok/react";
import { handleMissingColors } from "@/utils";
import { useInView } from "framer-motion";
import { AnimateFromBelowComponent, AnimateMultipleFromBelow } from "@/AnimationUtils";

export default function CareersList({blok}:{blok:any}){
    const ref=useRef(null);
    const isInView=useInView(ref,{once:true,margin:'-1px'});

    const [value,setValue]=useState(0)
    const {countries}=blok;
    const {departments}=countries[value];
    const {button_text}=countries[value]
    
    const {selected_color}=blok
    const {button_border_color}=blok;

    let {colors}=blok;
    colors=handleMissingColors(colors)
    return(
        <>
            
            <div ref={ref} className=" flex flex-col px-[20] lg:px-[64px] py-[50px] lg:py-[112px] gap-[50px]" style={{backgroundColor:colors[0].background_color,color:colors[0].text_color}} id={blok.anchor_id} {...storyblokEditable(blok)}>
                {
                    isInView&&
                    <AnimateMultipleFromBelow stepAnimation={false} className="grid grid-cols-1">
                        <text className=" mb-[16px]">{blok.title}</text>
                        <h2 >{blok.heading}</h2>
                        <p className="">{blok.overview}</p> 
                    </AnimateMultipleFromBelow>
                }
                {
                    isInView&&
                    <AnimateFromBelowComponent delay={0.5} className=" flex flex-col md:flex-row justify-between md:justify-normal md:gap-[24px] mt-[40px] lg:mt-[108px]">
                    {
                        countries.map((country:any,index:number)=>(
                            <button className={`min-w-[180px] px-[34px] border-b-[1px] pb-[10px]`} style={{borderBottomColor:index==value?selected_color:"black",color:index==value?selected_color:""}} key={country._uid} onClick={()=>setValue(index)} >{country.country}</button>
                        ))
                    }
                </AnimateFromBelowComponent>
                }
                <div className=" flex flex-col px-1">
                <Accordion type="single" className="" collapsible>
                    {isInView&&departments.map((department:any,index:number)=>(
                    <AnimateFromBelowComponent className="" key={index}>
                        <AccordionItem value={department._uid} className=" gap-0" key={department._uid}>
                            <AccordionTrigger className=" py-[20px] heading3">{department.department}</AccordionTrigger>
                            <AccordionContent className=" flex flex-col py-[32px] gap-[32px] lg:gap-[64px]" >
                                {
                                    department.jobs.map((job:any)=>(
                                        <div className=" flex flex-col gap-[24px]" key={job._uid}>
                                            <div className=" flex justify-between">
                                                <div className=" grid grid-cols-1">
                                                    <h4>{job.heading}</h4>
                                                    <text className=" font-['DM Mono'] text-[18px] font-[400]">{job.location}</text>
                                                </div>
                                                <Link href={capitalizeFirstLetter(job.buttonlink.cached_url)} target="_blank" className=" min-w-[117px] border-b  px-[20px] py-[8px]" style={{borderBottomColor:button_border_color}}>{button_text}</Link>
                                            </div>
                                            <text className=" md:w-3/4">{job.overview}</text>
                                        </div>
                                    ))
                                }
                            </AccordionContent>
                        </AccordionItem>
                    </AnimateFromBelowComponent>
                    ))}
                </Accordion>
                </div>
            </div>
            
        </>
    )
}

export function CareersTop({blok}:{blok:any}){
    const ref=useRef(null);
    const isInView=useInView(ref,{once:true,margin:'-1px'});
    const link=blok.link
    return(
        <div ref={ref} className=" relative flex min-h-screen bg-cover bg-[#00000080]/50 items-center justify-center p-5 text-white " style={{backgroundColor:"#00000080/0.5"}} id={blok.anchor_id} {...storyblokEditable(blok)}>
            <div className=" absolute w-[100%] h-[100%] shadow-inner "  onPlay={()=>console.log('Playing')} >
                {
                    blok.media&&blok.media.map((m:any)=>(
                        <MediaRenderer url={m.media.filename} alt={m.media.alt} type={m.type} key={m._uid} />
                    ))
                }
            </div>
            {
                isInView&&
                <AnimateMultipleFromBelow className=" flex flex-col lg:w-3/4 text-center justify-center items-center gap-[24px] z-10 ">
                    
                    <h1>{blok.heading}</h1>
                    <p>{blok.overview}</p>
                    {
                        link.map((link: any) =>(
                            <Pagelink url={link.url.url} text={link.Lable} variant="white" />
                        ))
                    }
                    
                </AnimateMultipleFromBelow>
            }
        </div>
    )
}

export function IndividualsApply({blok}:{blok:any}){
    const ref=useRef(null);
    const isInView=useInView(ref,{once:true});
    const link=blok.link[0]
    const {text_color}=blok;
    const {link_variant}=blok;
    return(
        <div ref={ref} className="relative flex h-[400px] bg-cover items-center text-white" style={{ backgroundColor:"#00000080",backgroundBlendMode:"overlay",color:text_color}} id={blok.anchor_id} {...storyblokEditable(blok)}>
                <div className=" absolute w-[100%] h-[100%] shadow-inner "  onPlay={()=>console.log('Playing')} >
                    {
                        blok.media&&blok.media.map((m:any)=>(
                            <MediaRenderer url={m.media.filename} alt={m.media.alt} type={m.type} key={m._uid} />
                        ))
                    }
                </div>
                {
                    isInView&&
                    <AnimateMultipleFromBelow className="  w-full md:w-3/4 grid grid-cols-1 gap-[24px] p-5 z-10 ">
                        <h2 className="">{blok.heading}</h2>
                        <p>{blok.overview}</p>
                        <Pagelink text={link.Lable} url={link.url.url} variant={link_variant} />
                    </AnimateMultipleFromBelow>
                }
            </div>
    )
}