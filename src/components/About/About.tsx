import Image from "next/image"
import Pagelink from "../link"
import { storyblokEditable } from "@storyblok/react"
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export function AboutTop({blok}:{blok:any}){
    //console.log(blok.leftmedia[0])
    /**
     * <text className=" mt-[40%] mx-3 text-[40px] leading-[24px] sm:max-xl:w-[80%] lg:w-[80%] lg:text-[80px] lg:leading-[84px]">{blok.title}</text>
     * <text className=" w-[60%] mb-3 md:mb-8 mr-3 md:mr-8 xl:mr-14">{blok.overview}</text>
     * 
     */
    return(
        <div className=" relative flex flex-col w-full bg-brand h-screen md:h-[400px] lg:h-[650px] xl:h-[800px] justify-end text-white" id={blok.anchor_id} {...storyblokEditable(blok)}>
            <div className=" absolute w-[100%] h-[100%] ">
                <ReactCompareSlider className=" absolute w-[100%] h-[100%]  "
                    itemOne={<MediaRenderer muted={true} type={blok.leftmedia[0].type} url={blok.leftmedia[0].media.filename} alt={blok.leftmedia[0].media.alt} />}
                    itemTwo={<MediaRenderer muted={true} type={blok.rightmedia[0].type} url={blok.rightmedia[0].media.filename} alt={blok.rightmedia[0].media.alt} />}
                    />
            </div>
            {/**Dark overlay <div className=" w-[100%] h-[100%] bg-black/30 absolute z-20 "></div> */}
            <div className=" flex flex-col z-30 gap-[20px] mx-[20px] mb-[20px] lg:mb-[32px]">
                <h1 className=" md:w-[40%] ">{blok.title}</h1>
                <text className=" md:w-[40%] self-end mb-3 ">{blok.overview}</text>
            </div>
        </div>
    )
}

export function Philosophy({blok}:{blok:any}){
    let {colors}=blok;
    if(!colors){
        colors=[]
    }
    return(
        <div className=" min-h-screen flex flex-col py-[10px] px-[15px] lg:px-0 lg:pl-[32px] xl:pl-[5%] lg:pr-[72px] xl:pr-[10%] " style={{backgroundColor:colors[0].background_color,color:colors[0].text_color}} id={blok.anchor_id} {...storyblokEditable(blok)}>
                <text className=" mt-[10px] md:mt-[20px] lg:mt-[40px] xl:mt-[70px]" style={{color:colors[0].text_color}}>{blok.title}</text>
                <div className=" flex flex-col justify-between lg:flex-row mt-[10px] md:mt-[30px] lg:mt-[68px] xl-[200px]">
                    <text className=" heading2 lg:w-[40%]">{blok.heading}</text>
                    <text className=" lg:w-[40%] mt-[5%]  " >{blok.description}</text>
                </div>
            </div>
    )
}

export function History({blok}:{blok:any}){
    let {colors}=blok;
    if(!colors){
        colors=[]
    }
    const link=blok.link;
    return(
        <div className=" min-h-screen p-[20px] lg:p-none lg:pt-[40px] lg:px-[64px] flex flex-col gap-[20px] md:gap-[40px] lg:gap-[80px] xl:gap-[120px]" style={{backgroundColor:colors[0].background_color,color:colors[0].text_color}} id={blok.anchor_id} {...storyblokEditable(blok)}>
                <text className="">{blok.title}</text>
                <div className=" flex flex-col gap-[20px] lg:gap-0 lg:flex-row lg:justify-between">
                    <div className="  lg:w-[50%] flex flex-col gap-[10px] md:gap-[20px] lg:gap-[32px] xl:gap-[50px]">
                        <text className=" heading2">{blok.heading}</text>
                        <Pagelink url={link[0].url.url} text={link[0].Lable} variant={colors[0].link_variant} />
                    </div>
                    <div className=" lg:w-[40%] flex flex-col gap-[29px] ">
                        {blok.historyevents.map((event:any,index:number)=>(
                        <div className=" flex flex-col gap-[16px]" key={event._uid} >
                            <div className=" flex gap-[20px] md:gap-[40px]  ">
                                <Image src={blok.icon.filename} width={48} height={48} alt={blok.icon.alt}/>
                                <text className=" heading4">{event.heading}</text>
                            </div>
                            <div className=" flex gap-[20px] ">
                                <text className={` flex justify-center ml-[24px] pl-[40px] pt-3 `} style={{borderLeft:index==blok.historyevents.length-1?"":`2px solid ${colors[0].border_color}`}}>{event.description}</text>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
    )
}


import MediaRenderer  from "../MediaComponent"

export async function Achievements({blok}:{blok:any}){
    //console.log(blok)
    let {colors}=blok;
    if(!colors){
        colors=[]
    }
    return(
        <div className=" flex flex-col md:max-lg:min-h-screen pb-[100px] xl:pb-[200px] px-[20px] lg:px-[61px] py-[34px] " style={{backgroundColor:colors[0].background_color,color:colors[0].text_color}} id={blok.anchor_id} {...storyblokEditable(blok)}>
                <text className="">{blok.title}</text>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-[50px] lg:gap-[177px] mt-[20px] justify-between">
                    <div className=" flex flex-col gap-[35px] mt-[30px] md:mt-[70px] lg:mt-[150px]">
                        <text className=" heading2">{blok.heading}</text>
                        <text className=" mx-h-[235px] overflow-hidden mb-[10px]">{blok.overview}</text>
                        <Pagelink text={blok.link.Lable} url={blok.link.url} variant={colors[0].link_variant} />
                    </div>
                    <div className=" relative w-full flex items-center min-h-[400px] ">
                        <div className=" absolute w-[100%] h-[100%] max-h-min shadow-inner "  >
                            {
                                blok.media.map((m:any)=>(
                                    <MediaRenderer muted={true} url={m.media.filename} alt={m.media.alt} type={m.type} key={m._uid} />
                                ))
                            }
                        </div>
                    </div>
                </div>
        </div>
    )
}
