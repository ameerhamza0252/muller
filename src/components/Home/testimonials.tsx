"use client"
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import { Suspense, useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import MediaRenderer from "../MediaComponent";
import ReactPlayer from "react-player";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  

const Testimonials=({blok}:{blok:any})=>{
    const [value,setValue]=useState(0);
    //const [play,setPlay]=useState(false)
    function handleValue(operation:'+'|'-'){
        if(operation=='+'){
           if(value>=blok.testimonials.length-1){
            setValue(0)
           }else{
            setValue(value+1)
           }
        }else{
            if(value==0){
                setValue(blok.testimonials.length-1)
            }else{
                setValue(value-1)
            }
        }
    }
    const {video}=blok;
    return(
        
            <Suspense fallback={<div>Hehehe,,, an error</div>} >
            <div className=" min-h-screen flex flex-col py-[27px] lg:py-[35px] px-[10px] md:pl-[39px] md:pr-[92px] justify-evenly" style={{backgroundColor:blok.background_color,color:blok.text_color}} id={blok.anchor_id} {...storyblokEditable(blok)} >
            <text className=" text-grey-2">{blok.title}</text>
            <div className="flex flex-col justify-between w-full lg:w-[580px] py-[85px] gap-[45px] self-end ">
                <text className="h-max-[580px] text-[35px] overflow-hidden leading-[39px]">
                    {blok.testimonials[value].testimonial}
                </text>
                <div className=" flex flex-col h-[50px] self-end">
                    <text className=" font-medium">{blok.testimonials[value].name}</text>
                    <text>{blok.testimonials[value].position}</text>
                </div>
            </div>
            {
                video.filename!=""?
                <div className=" self-center">
                    <Dialog>
                        <DialogTrigger>
                        <div className=" w-[70px] md:w-[110px] h-[70px] md:h-[110px] flex items-center justify-center rounded-full border-[1px] border-brand -left-10">
                            <div className=" relative  w-[30px] md:w-[70px]  h-[30px] md:h-[70px] ">
                            <Image src="/Icon/Google Play.svg" alt="google play" fill />
                            </div>
                        </div>
                        </DialogTrigger>
                        <DialogContent className=" p-0 h-[300px]">
                        <ReactPlayer config={{
                            youtube: {
                                playerVars: { 
                                showinfo: 1,
                                modestbranding: 1,
                                controls: 0,
                                },
                            }
                            }}
                            controls={false} muted={true} loop playing={true}  style={{position:'absolute',pointerEvents:'none'}} width={'100%'} height={'100%'} url={video.filename} />
                        </DialogContent>
                    </Dialog>
                </div>
              :null
            }
            <div className=" flex gap-[20px] items-baseline">
                <button onClick={()=>handleValue('-')} className=" flex w-[30px] md:w-[65px] h-[30px] md:h-[65px] rounded-full border-[1px] items-center justify-center" style={{color:blok.button_color,borderColor:blok.button_color}}>
                    <div className=" md:scale-150"><BiLeftArrowAlt /></div>
                </button>
                <button onClick={()=>handleValue('+')} className=" flex w-[30px] md:w-[65px] h-[30px] md:h-[65px] rounded-full border-[1px] items-center justify-center" style={{color:blok.button_color,borderColor:blok.button_color}}>
                    <div className=" md:scale-150"><BiRightArrowAlt/></div>
                </button>
                <text className=" ml-[20px] text-[22px] font-medium text-black ">
                    {value+1}/{blok.testimonials.length}
                </text>
            </div>
        </div>
        </Suspense>
        
    )
}

export default Testimonials
