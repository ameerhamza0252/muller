"use client"

import { handleMissingColors } from "@/utils";
import { Skeleton } from "@chakra-ui/react";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react";
import Image from "next/image"
import Link from "next/link";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"


import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import useSWR from "swr";

const responsiveSettings = [
    {
        breakpoint: 1900,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 700,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },{
        breakpoint: 400,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
];

const Premade_Slider = ({blok}:{blok:any}) => {

  let {colors}=blok;
    colors=handleMissingColors(colors)
  
    const props={
        prevArrow:<button className=" flex w-[48px] h-[48px] rounded-full border-[1px] items-center justify-center" style={{borderColor:colors[0].border_color,color:colors[0].border_color}}>
        <div className=" scale-150"><BiLeftArrowAlt /></div>
    </button>,
        nextArrow:<button className=" flex w-[48px] h-[48px] rounded-full border-[1px] items-center justify-center" style={{borderColor:colors[0].border_color,color:colors[0].border_color}}>
        <div className=" scale-150"><BiRightArrowAlt/></div>
    </button>,
    }


    const { data, error, isLoading }=useSWR(blok.solutions,getDataList)
  //console.log('ItemsCards Fetched')
  if(isLoading){
    return(
      <div className=" flex gap-[20px] overflow-hidden">
        <Skeleton isLoaded={!isLoading} fitContent={true}  > 
      <div className=' flex flex-col h-[310px] w-[304px]' key={blok.uuid} >
      
        </div>
    </Skeleton>
      <Skeleton isLoaded={!isLoading} fitContent={true}  > 
      <div className=' flex flex-col h-[310px] w-[304px]' key={blok.uuid} >
      
        </div>
    </Skeleton>
    <Skeleton isLoaded={!isLoading} fitContent={true}  > 
      <div className=' flex flex-col h-[310px] w-[304px]' key={blok.uuid} >
      
        </div>
    </Skeleton>
      </div>
    )
  }
  if(error){
    return <div>Error .....</div>
  }

  //console.log(data)
  
    return (
        <div className="flex flex-col lg:px-[64px] py-[40px] lg:py-[112px] gap-[40px] md:gap-[80px]" style={{backgroundColor:colors[0].background_color,color:colors[0].text_color}} id={blok.anchor_id} {...storyblokEditable(blok)} >
            <div className="flex flex-col gap-[16px] mb-[40px]">
            <text>{blok.title}</text>
            <text className="heading3">{blok.heading}</text>
            <div className="flex flex-col md:flex-row px-2 justify-between gap-[10px]">
                <text>{blok.overview}</text>
                <Link href={blok.button_link.fieldtype=="story"?blok.button_link.cached_url:blok.button_link.url} className=" max-w-[150px] md:w-auto px-[24px] py-[12px] border-b " style={{borderBottomColor:colors[0].border_color}}>
                  {blok.button_text}
                </Link>
            </div>
            </div>
            <Slide indicators={(index)=><div className=" indicator"></div>} {...props} autoplay={false} responsive={responsiveSettings} >
                {
                    data&&data.map((s:any)=>{
                        const stop=s.content.blocks.filter((b:any)=>b.component=="stop")[0]
                        //const cardimage=s.content.cardimage?s.content.cardimage:null;
                    return (
                        <div className=" flex w-full justify-center " key={s.uuid}>
                            <div className=" flex w-[310px] flex-col gap-4 ">
                            <div className=" relative h-[304px] " style={{backgroundPosition:"center"}}>
                                <Image src={s.content.cardimage?s.content.cardimage.filename:''} alt={s.content.cardimage?s.content.cardimage.alt:""} fill objectFit="contain" />
                            </div>
                            <div className=" grid grid-cols-1">
                                <text className=" heading4">{stop.heading}</text>
                                <text className=" text-[16px]">{stop.description}</text>
                            </div>
                            <Link href={"/"+s.full_slug} className=" text-center text-[18px] font-[500] font-DM_Mono leading-[28.8px] border-b py-2 " style={{borderColor:colors[0].border_color}}>{blok.Card_Button_Text}</Link>
                         </div>
                        </div>
                    )})
                }
            </Slide>
        </div>
    );
};

export default Premade_Slider;

async function fetchData(s_uuid:any) {
    const storyblokApi = getStoryblokApi();
    return storyblokApi.get(`cdn/stories/`, { version: "published", by_uuids:s_uuid});
  }
  
  async function getDataList(solutions:string[]){
    const promisList=solutions.map(async(s_uuid:string) =>(await fetchData(s_uuid)).data.stories[0])
      const dataResults = await Promise.all(promisList).then((data)=>{return data});
      //console.log(dataResults)
      return dataResults;
  }