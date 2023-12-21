"use client"

import { Skeleton } from "@chakra-ui/react";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react";
import Image from "next/image"
import Link from "next/link";
import { useState } from "react"
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"


/**
const slides=[{url:"https://a.storyblok.com/f/263886/3998x2671/46132ccecc/muller_l2183997.webp",alt:"alt_name"},
{url:"https://a.storyblok.com/f/263886/3998x2671/46132ccecc/muller_l2183997.webp",alt:"alt_name"},
{url:"https://a.storyblok.com/f/263886/3998x2671/46132ccecc/muller_l2183997.webp",alt:"alt_name"},
{url:"https://a.storyblok.com/f/263886/3998x2671/46132ccecc/muller_l2183997.webp",alt:"alt_name"},
{url:"https://a.storyblok.com/f/263886/3998x2671/46132ccecc/muller_l2183997.webp",alt:"alt_name"},
{url:"https://a.storyblok.com/f/263886/3998x2671/46132ccecc/muller_l2183997.webp",alt:"alt_name"},
{url:"https://a.storyblok.com/f/263886/3998x2671/46132ccecc/muller_l2183997.webp",alt:"alt_name"},
{url:"https://a.storyblok.com/f/263886/3998x2671/46132ccecc/muller_l2183997.webp",alt:"alt_name"},
{url:"https://a.storyblok.com/f/263886/3998x2671/46132ccecc/muller_l2183997.webp",alt:"alt_name"},
{url:"https://a.storyblok.com/f/263886/3998x2671/46132ccecc/muller_l2183997.webp",alt:"alt_name"},
{url:"https://a.storyblok.com/f/263886/3998x2671/46132ccecc/muller_l2183997.webp",alt:"alt_name"},];

export function SolutionsThatWorkTogether({ blok }: { blok: any }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const length = slides.length;
    const slidesToShow = 3; // change this to the number of slides you want to show at a time
    const slideWidth = 100 / slidesToShow; // calculate the slide width as a percentage of the container width
  
    function handleValueChange(operation: "+" | "-") {
      if (operation == "+") {
        setCurrentIndex((currentIndex + 1) % length); // increment the currentIndex and wrap it around the length
      } else if (operation == "-") {
        setCurrentIndex((currentIndex - 1 + length) % length); // decrement the currentIndex and wrap it around the length
      }
    }
  
    return (
      <div className="flex flex-col px-[20px] lg:px-[64px] py-[40px] lg:py-[112px] gap-[80px]">
        <div className="flex flex-col gap-[16px] mb-[40px]">
          <text>Solutions</text>
          <text className="heading3">Solutions that work together</text>
          <div className="flex justify-between">
            <text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </text>
            <button className="px-[24px] py-[12px] border-b border-b-brand">
              S_Button
            </button>
          </div>
        </div>
        <div className="flex justify-center gap-[48px] overflow-hidden">
          <div
            className="flex flex-wrap flex-row transition-transform duration-700"
            style={{
              transform: `translateX(${-slideWidth * currentIndex}%)`, // translate the slides based on the currentIndex and the slideWidth
            }}
          >
            {slides.map((slide, index) => (
              <div
                className="relative flex-shrink-0"
                style={{
                  width: `${slideWidth}%`, // set the slide width based on the slideWidth
                  order: (index + currentIndex) % length, // set the slide order based on the index and the currentIndex
                }}
                key={index}
              >
                <Image src={slide.url} alt={slide.alt} layout="fill" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between mt-[48px]">
          <div className="flex gap-[8px]">
            <div className="rounded-full w-[8px] h-[8px] border-B-Yellow bg-B-Yellow"></div>
            <div className="rounded-full w-[8px] h-[8px] border-B-Yellow border"></div>
          </div>
          <div className="flex gap-[15px] items-baseline">
            <button
              onClick={() => handleValueChange("-")}
              className="flex w-[48px] h-[48px] rounded-full border-[1px] text-brand border-brand items-center justify-center"
            >
              <div className="scale-150">
                <BiLeftArrowAlt />
              </div>
            </button>
            <button
              onClick={() => handleValueChange("+")}
              className="flex w-[48px] h-[48px] rounded-full border-[1px] text-brand border-brand items-center justify-center"
            >
              <div className="scale-150">
                <BiRightArrowAlt />
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
*/

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
    //console.log(blok)
    const props={
        prevArrow:<button className=" flex w-[48px] h-[48px] rounded-full border-[1px] text-brand border-brand items-center justify-center">
        <div className=" scale-150"><BiLeftArrowAlt /></div>
    </button>,
        nextArrow:<button className=" flex w-[48px] h-[48px] rounded-full border-[1px] text-brand border-brand items-center justify-center">
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

  console.log(data)

    return (
        <div className="flex flex-col lg:px-[64px] py-[40px] lg:py-[112px] gap-[40px] md:gap-[80px]" id={blok.anchor_id} {...storyblokEditable(blok)} >
            <div className="flex flex-col gap-[16px] mb-[40px]">
            <text>{blok.title}</text>
            <text className="heading3">{blok.heading}</text>
            <div className="flex flex-col md:flex-row px-2 justify-between gap-[10px]">
                <text>{blok.overview}</text>
                <Link href={blok.button_link.fieldtype=="story"?blok.button_link.cached_url:blok.button_link.url} className=" max-w-[150px] md:w-auto px-[24px] py-[12px] border-b border-b-brand">
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
                            <Link href={"/"+s.full_slug} className=" text-center text-[18px] font-[500] font-DM_Mono leading-[28.8px] border-brand border-b py-2 ">{blok.Card_Button_Text}</Link>
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