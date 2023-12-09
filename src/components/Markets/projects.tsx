import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

export default function Projects({blok}:{blok:any}){
    //console.log(blok)
    const {projects}=blok;
    return(
        <div className=" flex flex-col bg-black text-white px-[20px] xl:px-[40px] pt-[20px] pb-[40px] lg:pb-[112px] gap-[30px] lg:gap-y-[90px] items-center " {...storyblokEditable(blok)}>
            <text className=" text-B-grey self-start">{blok.title}</text>
            <div className=" flex flex-col text-center gap-[24px]">
                <text className=" heading2">{blok.heading}</text>
                <text>{blok.overview}</text>
            </div>
            {
                projects.map((project:any)=>(
                    <div className=" lg:w-[90%] xl:w-full flex flex-col items-center gap-[24px] xl:px-[20px]" key={project._uid}>
                        <div className=" relative w-full h-[400px] lg:h-[640px] xl:h-[900px]">
                            <Image src={project.image.filename} fill alt={project.image.alt} />
                        </div>
                        <div className=" grid grid-cols-1 md:grid-cols-2 lg:max-h-[150px] ">
                            <div>
                                <text className=" heading4 ">{project.name}</text>
                                <div className=" flex gap-[8px] font-[DM Mono] text-black text-[14px] leading-[22.4px] font-[500] mt-[16px] ">
                                    {
                                        project.tags.map((tag:any)=>(
                                            <div className=" h-[30px] bg-B-Yellow px-[8px] py-[4px]" key={tag._uid} >{tag.name}</div>
                                        ))
                                    }
                                </div>
                            </div>
                            <text>{project.overview}</text>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}