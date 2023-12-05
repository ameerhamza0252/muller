"use client"
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import { useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";



const testimonials=({blok}:{blok:any})=>{
    blok=blok.testimonials
    //console.log(blok)
    const [value,setValue]=useState(0);
    function handleValue(operation:'+'|'-'){
        if(operation=='+'){
           if(value==blok.length-1){
            setValue(0)
           }else{
            setValue(value+1)
           }
        }else{
            if(value==0){
                setValue(blok.length-1)
            }else{
                setValue(value-1)
            }
        }
    }
    console.log(value)
    //window.alert("testimonials")
    return(
        <div className=" min-h-screen flex flex-col py-[27px] lg:py-[35px] px-[20px] md:pl-[39px] md:pr-[92px] text-black" {...storyblokEditable(blok)}>
            <text className=" text-grey-2">Testimonials</text>
            <div className="flex flex-col justify-between w-[580px] py-[85px] gap-[45px] self-end">
                <text className="h-max-[580px] text-[35px] overflow-hidden leading-[39px]">
                    {blok[value].testimonial}
                </text>
                <div className=" flex flex-col h-[50px] self-end">
                    <text className=" font-medium">{blok[value].name}</text>
                    <text>{blok[value].position}</text>
                </div>
                
            </div>
            <div className="w-[110px] h-[110px] relative -top-[20%] flex items-center justify-center rounded-full border-[1px] border-brand self-center -left-10">
                    <Image src="/Icon/Google Play.svg" alt="google play" width={70} height={70} />
            </div>
            <div className=" flex gap-[20px] items-baseline">
                <button onClick={()=>{value>=blok.length?setValue(0):setValue(value+1)}} className=" flex w-[65px] h-[65px] rounded-full border-[1px] text-brand border-brand items-center justify-center">
                    <div className=" scale-150"><BiLeftArrowAlt /></div>
                </button>
                <button onClick={()=>{value<0?setValue(blok.length-1):setValue(0)}} className=" flex w-[65px] h-[65px] rounded-full border-[1px] text-brand border-brand items-center justify-center">
                    <div className=" scale-150"><BiRightArrowAlt/></div>
                </button>
                <text className=" ml-[20px] text-[22px] font-medium text-black ">
                    {value+1}/{blok.length}
                </text>
            </div>
        </div>
    )
}

export default testimonials