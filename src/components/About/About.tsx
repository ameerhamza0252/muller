"use client"
import Image from "next/image"
import Pagelink from "../link"
import { useEffect, useState } from "react"
import Link from "next/link"
import { storyblokEditable } from "@storyblok/react"

export function AboutTop({blok}:{blok:any}){
    //console.log(blok)
    return(
        <div className=" flex flex-col md:flex-row h-screen md:h-[400px] lg:h-[650px] xl:h-[800px] text-white" {...storyblokEditable(blok)}>
                <div className=" md:w-[50%] h-[50%] md:h-full flex items-center justify-center  bg-cover " style={{backgroundImage:`url('${blok.leftimage.filename}')`}}>
                    <text className=" mt-[40%] mx-3 text-[40px] leading-[24px] sm:max-xl:w-[80%] lg:w-[80%] lg:text-[80px] lg:leading-[84px]">{blok.title}</text>
                </div>
                <div className=" md:w-[50%] h-[50%] md:h-full flex justify-end items-end bg-cover " style={{backgroundImage:`url('${blok.rightimage.filename}')`}}>
                    <text className=" w-[60%] mb-3 md:mb-8 mr-3 md:mr-8 xl:mr-14">{blok.overview}</text>
                </div>
            </div>
    )
}

export function Philosophy({blok}:{blok:any}){
    //console.log(blok)
    return(
        <div className=" min-h-screen flex flex-col px-[15px] lg:px-0 lg:pl-[32px] xl:pl-[5%] lg:pr-[72px] xl:pr-[10%] bg-black text-white " {...storyblokEditable(blok)}>
                <text className=" mt-[10px] md:mt-[20px] lg:mt-[40px] xl:mt-[70px] text-[#E7E9EA]">{blok.title}</text>
                <div className=" flex flex-col justify-between lg:flex-row mt-[10px] md:mt-[30px] lg:mt-[68px] xl-[200px]">
                    <text className=" heading2 w-[40%]">{blok.heading}</text>
                    <text className=" lg:w-[40%] mt-[5%]  " >{blok.description}</text>
                </div>
            </div>
    )
}

export function History({blok}:{blok:any}){
    //console.log(blok)
    return(
        <div className=" min-h-screen p-[20px] lg:p-none lg:pt-[40px] lg:px-[64px] flex flex-col gap-[20px] md:gap-[40px] lg:gap-[80px] xl:gap-[120px] text-black" {...storyblokEditable(blok)}>
                <text className="">{blok.title}</text>
                <div className=" flex flex-col gap-[20px] lg:gap-0 lg:flex-row lg:justify-between">
                    <div className="  lg:w-[50%] flex flex-col gap-[10px] md:gap-[20px] lg:gap-[32px] xl:gap-[50px]">
                        <text className=" heading2">{blok.heading}</text>
                        <Pagelink url={blok.link.url} variant="green" />
                    </div>
                    <div className=" lg:w-[40%] flex flex-col gap-[29px] ">
                        {blok.historyevents.map((event:any,index:number)=>(
                        <div className=" flex flex-col gap-[16px]" key={event._uid} >
                            <div className=" flex gap-[20px] md:gap-[40px]  ">
                                <Image src={blok.icon.filename} width={48} height={48} alt={blok.icon.alt}/>
                                <text className=" heading4">{event.heading}</text>
                            </div>
                            <div className=" flex gap-[20px] ">
                                <text className={` flex justify-center ml-[24px] pl-[40px] pt-3 ${index==blok.historyevents.length-1?'':'border-B-Yellow border-l-[2px]'} `}>{event.description}</text>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
    )
}

export function Organization({blok}:{blok:any}){
    const [department,setDepartment]=useState(0);
    const [value,setValue]=useState(0);
    
    useEffect(()=>{
        setDepartment(0)
    },[value])
    const {countries}=blok;
    const {departments}=countries[value]?countries[value]:countries[0];
    const {employees}=departments[department]?departments[department]:departments[0];
    const {hiring}=blok

    
    return(
        <div className=" min-h-screen flex flex-col pl-[20px] pr-[10px] py-[10px] lg:pl-[76px] lg:pr-[49px] lg:py-[35px] text-black " {...storyblokEditable(blok)}>
                <text>{blok.title}</text>
                <div className=" flex justify-between md:flex-none md:justify-normal md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-[24px] mt-[40px] lg:mt-[108px]">
                    {
                        countries.map((country:any,index:number)=>(
                            <button className={`min-w-[180px] max-w-[300px] px-[34px] ${index==value?'border-b-brand text-brand':'border-b-black'} border-b-[1px] pb-[10px]`} key={country._uid} onClick={()=>setValue(index)} >{country.countryname}</button>
                        ))
                    }
                </div>
                <div className=" lg:h-[570px] flex flex-col md:grid md:grid-cols-4">
                    <div className=" flex items-center justify-center col-span-3">
                        {
                            employees.length>0?employees.map((emp:any)=>(
                                <div className=" w-[266px] min-h-[300px] flex flex-col items-center gap-[24px]" key={emp._uid}>
                                    <Image src={emp.profileimage.filename} width={80} height={80} alt={emp.profileimage.alt} className=" justify-self-center rounded-full" />
                                    <div className=" flex flex-col text-center font-[Roboto]">
                                        <text className=" text-[20px] leading-[30px] font-[600]">{emp.name}</text>
                                        <text className=" text-[18px] leading-[27px] text-B-Yellow">{emp.jobtitle}</text>
                                        <text className=" text-[16px] leading-[24px] mt-[16px] ">{emp.about}</text>
                                    </div>
                                    <div className="flex gap-[14px] justify-self-center">
                                        {
                                            emp.socials.map((social:any)=>(
                                                <Link href={social.url.url?social.url.url:''} target="_blank" key={social._uid}><Image src={social.image.filename} alt={social.image.alt} width={24} height={24} /></Link>
                                            ))
                                        }
                                    </div>
                                </div>
                            )):null
                        }
                    </div>
                    <div className=" max-w-[400px] flex flex-col text-center">
                        {
                            departments.map((dep:any,index:number)=>(
                                <button className={`min-w-[270px] border-b-[1px] ${index==department?' border-brand text-brand':'border-black'} px-[34px] pb-[11px] pt-[16px]`} key={dep._uid} onClick={()=>setDepartment(index)} >{dep.name}</button>
                            ))
                        }
                    </div>
                </div>
                <div className=" flex flex-col mt-[40px] lg:mt-[97px] gap-[19px] self-center text-center items-center text-black ">
                    <text className=" heading4">{hiring[0].title}</text>
                    <text>{hiring[0].overview}</text>
                    <Pagelink text="" url={hiring[0].link.url} />
                </div>
            </div>
    )
}

export function Achievements({blok}:{blok:any}){
    //console.log(blok)
    return(
        <div className=" flex flex-col md:max-lg-min-h-screen pb-[100px] md:pb-0 xl:pb-[200px] px-[20px] lg:px-[61px] py-[34px] text-black ">
                <text className="">{blok.title}</text>
                <div className=" flex gap-[177px] mt-[20px] justify-between">
                    <div className=" lg:w-[40%] flex flex-col gap-[35px] mt-[150px]">
                        <text className=" heading2">{blok.heading}</text>
                        <text className=" mx-h-[235px] overflow-hidden mb-[10px]">{blok.overview}</text>
                        <Pagelink text={blok.link.Lable} url={blok.link.urk} variant="green" />
                    </div>
                    {blok.video?<video style={{width:"455px", height:"509px"}}><source src={blok.video.filename} /></video>:null}
                </div>
            </div>
    )
}