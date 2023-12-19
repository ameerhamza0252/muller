import Image from "next/image";
import Pagelink from "../link";
import { GetInTouch } from "../Career/SingleCareerClient";
import MediaRenderer from "../MediaComponent";
  // in code ES6
import InfiniteScroll from 'react-infinite-scroll-component';
import { storyblokEditable } from "@storyblok/react";


export function ContactTopGrid({blok}:{blok:any}){
    console.log(blok)
    const link=blok.link[0]

    function fetch_list_1(){
        return blok.image_list1
    }
    return(
        <div className=" min-h-screen md:h-screen flex flex-col md:flex-row items-center justify-between gap-[20px] px-[10px] md:px-[64px] py-[40px] " id={blok.anchor_id} {...storyblokEditable(blok)}>
                <div className=" flex flex-col gap-[24px]">
                    <text className=" heading1">{blok.heading}</text>
                    <text>{blok.subheading}</text>
                    <Pagelink url={link.url.url} text={link.Lable} variant="green" />
                </div>
                <div className=" relative grid grid-cols-2 gap-[16px] ">
                    <div className=" h-screen flex flex-col  w-full overflow-auto gap-[16px] hide-scroll ">
                        <div className=" flex flex-col gap-[16px] animate-upward">
                        {
                        blok.image_list1&&blok.image_list1.map((image:any)=>(
                            <div className=" relative snap-always snap-center w-full md:w-[264px] min-h-[250px] md:min-h-[340px]">
                                <Image src={image.filename} priority fill alt={image.alt} key={image._uid} />
                            </div>
                        ))
                        }
                        </div>
                        <div className=" flex flex-col gap-[16px] animate-upward">
                        {
                        blok.image_list1&&blok.image_list1.map((image:any)=>(
                            <div className=" relative  snap-always snap-center w-full md:w-[264px] min-h-[250px] md:min-h-[340px]">
                                <Image src={image.filename} priority fill alt={image.alt} key={image._uid} />
                            </div>
                        ))
                        }
                        </div>
                    </div>
                    
                    <div className=" h-screen flex flex-col  w-full overflow-auto gap-[16px] hide-scroll ">
                        <div className=" flex flex-col gap-[16px] animate-downward">
                        {
                        blok.image_list1&&blok.image_list1.map((image:any)=>(
                            <div className=" relative snap-always snap-center w-full md:w-[264px] min-h-[250px] md:min-h-[340px]">
                                <Image src={image.filename} priority fill alt={image.alt} key={image._uid} />
                            </div>
                        ))
                        }
                        </div>
                        <div className=" flex flex-col gap-[16px] animate-downward">
                        {
                        blok.image_list1&&blok.image_list1.map((image:any)=>(
                            <div className=" relative  snap-always snap-center w-full md:w-[264px] min-h-[250px] md:min-h-[340px]">
                                <Image src={image.filename} priority fill alt={image.alt} key={image._uid} />
                            </div>
                        ))
                        }
                        </div>
                    </div>
                </div>
            </div>
    )
}

export function GetInTouchGrid({blok}:{blok:any}){
    //console.log(blok)
    return(
        <div className=" min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center lg:justify-between md:px-[64px] py-[40px] lg:py-[112px] gap-4" id={blok.anchor_id} {...storyblokEditable(blok)}>
                <div className=" relative min-h-[400px] lg:h-[600px] w-[90%] md:h-[90%] pointer-events-none ">
                {
                    blok.media&&blok.media.map((m:any)=>(
                        <MediaRenderer muted={true} url={m.media.filename} alt={m.media.alt} type={m.type} key={m._uid} />
                    ))
                }
                </div>
                <GetInTouch blok={blok.GetInTouch[0]} />
            </div>
    )
}