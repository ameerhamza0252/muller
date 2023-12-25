import { HeadingsDescription } from "@/components/News/SingleNews/Components";
import { StoryblokComponent } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";

export default function SingleNews({blok}:{blok:any}){
    //console.log(blok)
    const content=blok;
    return(
        <>
            <div className=" px-[30px] lg:px-[64px]">
            <div className=" min-h-screen flex flex-col text-black pb-[60px] pt-[80px] lg:pt-[170px] lg:pb-[112px] font-[500] " id="top">
                <div className=" flex text-[14px] gap-[16px] font-DM_Mono mb-[16px] items-center ">
                    <text className=" bg-B-grey px-[8px] py-[4px]">{content.category}</text>
                    <text>{content.readtime}</text>
                </div>
                <text className=" heading1 mb-[40px] lg:mb-[80px] ">{content.name}</text>
                <div className=" relative h-[300px] lg:h-[600px] xl:h-[900px] " ><Image src={content.image.filename} alt={content.image.alt} objectFit="cover" fill /> </div>
                <div className=" flex justify-between mt-[32px]">
                    <div className=" flex gap-[48px] text-[16px]"><text className=" font-[400]">Published on</text><text className="">{content.published_on}</text></div>
                    <div className=" flex gap-[16px]">
                        {content.socials.map((c:any)=>(
                            <Link href={c.url.url} key={c._uid} target="_blank" ><Image src={c.image.filename} alt={c.image.alt} height={24} width={24} key={c._uid} /></Link>
                        ))}
                    </div>
                </div>
            </div>
            <HeadingsDescription blok={content} />
            
        </div>
        {
            blok.blocks&&blok.blocks.map((nested:any)=>(
                <StoryblokComponent blok={nested} key={nested._uid} />
            ))
        }
        </>
    )
}