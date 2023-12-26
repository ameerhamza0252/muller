import { HeadingsDescription } from "@/components/News/SingleNews/Components";
import { StoryblokComponent } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";

export default function SingleNews({blok}:{blok:any}){
    //console.log(blok)
    const content=blok;
    const {TopColors}=blok;
    const {top_tag_color}=blok;
    const {top_tag_text_color}=blok;
    const {HeadingsColors}=blok;
    const {heading_selected_color}=blok;
    return(
        <>
            <div className=" min-h-screen flex flex-col font-[500] pb-[60px] pt-[80px] lg:pt-[170px] lg:pb-[112px] px-[30px] lg:px-[64px] " style={{backgroundColor:TopColors[0].background_color,color:TopColors[0].text_color}} id="top">
                <div className=" flex text-[14px] gap-[16px] font-DM_Mono mb-[16px] items-center ">
                    <text className=" px-[8px] py-[4px]" style={{backgroundColor:top_tag_color,color:top_tag_text_color}}>{content.category}</text>
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
            <HeadingsDescription Colors={HeadingsColors} SelectedColor={heading_selected_color} blok={content} />
        {
            blok.blocks&&blok.blocks.map((nested:any)=>(
                <StoryblokComponent blok={nested} key={nested._uid} />
            ))
        }
        </>
    )
}