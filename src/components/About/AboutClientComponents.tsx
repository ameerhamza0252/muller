"use client"
import Link from "next/link";
import Pagelink from "../link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { storyblokEditable } from "@storyblok/react";

export function Organization({blok}:{blok:any}){
    console.log(blok)
    const [department,setDepartment]=useState(0);
    const [value,setValue]=useState(0);
    
    useEffect(()=>{
        setDepartment(0)
    },[value])
    const {countries}=blok;
    const {departments}=countries[value]?countries[value]:countries[0];
    const {employees}=departments[department]?departments[department]:departments[0];
    const {hiring}=blok
    //console.log(departments[department])
    //console.log(department)
    //alert(department)
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
                <div className=" min-h-[300px] pt-10 lg:h-[570px] flex flex-col md:grid md:grid-cols-4">
                    <div className=" flex flex-wrap gap-[10px] justify-center col-span-3">
                        {
                            employees.map((emp:any)=>(
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
                            ))
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
