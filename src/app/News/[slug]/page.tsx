import { HeadingsDescription } from "@/components/News/SingleNews/Components";
import { getStoryblokApi } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { render } from "storyblok-rich-text-react-renderer";

export default async function News({params:{slug}}:{params:{slug:string}}) {
    //const [margin, setMargin] = useState(20);

    const {data}=await fetchData(slug);
    const {content}=data.stories[0];
    //console.log(content.socials)
    //let ml=0;
    return(
        <div className=" px-[30px] lg:px-[64px]">
            <div className=" min-h-screen flex flex-col text-black pb-[60px] pt-[80px] lg:pt-[170px] lg:pb-[112px] font-[500] " id="top">
                <div className=" flex text-[14px] gap-[16px] font-DM_Mono mb-[16px] items-center ">
                    <text className=" bg-B-grey px-[8px] py-[4px]">{content.category}</text>
                    <text>{content.readtime}</text>
                </div>
                <text className=" heading1 mb-[40px] lg:mb-[80px] ">{content.name}</text>
                <div className=" relative h-[300px] lg:h-[600px] xl:h-[900px] " ><Image src={content.image.filename} alt={content.image.alt} fill /> </div>
                <div className=" flex justify-between mt-[32px]">
                    <div className=" flex gap-[48px] text-[16px]"><text className=" font-[400]">Published on</text><text className="">{content.published_on}</text></div>
                    <div className=" flex gap-[16px]">
                        {content.socials.map((c:any)=>(
                            <Link href={c.url.url} target="_blank" ><Image src={c.image.filename} alt={c.image.alt} height={24} width={24} key={c._uid} /></Link>
                        ))}
                    </div>
                </div>
            </div>
            <HeadingsDescription blok={content} />
        </div>
    )
}

async function fetchData(slug:string) {
    const storyblokApi = getStoryblokApi();
    return storyblokApi.get(`cdn/stories/`, { version: "published",by_slugs:"*/"+slug });
  }