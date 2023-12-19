import { storyblokEditable } from "@storyblok/react"
import Image from "next/image"
import { render } from "storyblok-rich-text-react-renderer"

export async function CareerTop({blok}:{blok:any}){
    //console.log(blok)
    return(
        <div className=" min-h-screen flex flex-col items-center gap-[30px] lg:gap-[80px] py-[50px] lg:py-[112px]" id={blok.anchor_id} {...storyblokEditable(blok)}>
                <div className=" w-full lg:w-3/5 flex flex-col gap-[24px] px-[30px] lg:px-[64px]">
                    <text className=" text-[16px] leading-[25.6px]">{blok.category}</text>
                    <text className=" heading1">{blok.title}</text>
                    <div className=" flex flex-col md:flex-row items-center justify-between mt-[24px]">
                        <div className=" flex items-center text-[14px] leading-[22.4px] font-DM_Mono">
                            <Image className=" rounded-full" width={56} height={56} src={blok.circledImage.filename} alt={blok.circledImage.alt} />
                            <text className=" ml-[16px] ">{(blok.date)}</text>
                            <text className=" px-[8px]">.</text>
                            <text>{blok.readtime}</text>
                        </div>
                        <div className=" flex gap-[8px]" >
                            {blok.socials.map((social:any)=>(<Image className=" p-[4px] bg-B-grey rounded-full" width={24} height={24} src={social.filename} alt={social.alt} />))}
                        </div>
                    </div>
                </div>
                <div className=" relative w-full h-[300px] lg:h-[600px] bg-cover">
                    <Image fill src={blok.coverImage.filename} alt={blok.coverImage.alt} />
                </div>
            </div>
    )
}

export async function CareerDescription({blok}:{blok:any}){
    //console.log(blok)
    return(
        <div className=" flex items-center justify-center lg:gap-[80px] px-[10px] py-[40px] lg:py-[112px]" id={blok.anchor_id} {...storyblokEditable(blok)}>
                <div className=" w-full md:w-3/4 ">
                    <text className="">{render(blok.description)}</text>
                    <div className=" flex items-end justify-between mt-[24px] lg:mt-[64px]">
                            <div className=" flex flex-col gap-[16px] text-[18px] leading-[28.8px] font-DM_Mono">
                                <text className=" font-[500]">{blok.sharelable}</text>
                                <div className=" flex gap-[8px]" >
                                    {blok.shareon&&blok.shareon.map((social:any)=>(<Image className=" p-[4px] bg-B-grey rounded-full" width={24} height={24} src={social.filename} alt={social.alt} />))}
                                </div>
                            </div>
                            <div className=" flex gap-[8px] text-[14px] font-[600] leading-[21px]">
                                {blok.jobtags.map((tag:any)=>(<text className=" px-[8px] py-[4px] bg-B-grey" key={tag._uid}>{tag.name}</text>))}
                            </div>
                    </div>
                    <hr className=" h-[1px] my-[48px] bg-black"></hr>
                    <div className=" flex gap-[16px]">
                        <Image src={blok.authorimage.filename} className=" rounded-full" width={56} height={56} alt={blok.authorimage.alt} />
                        <div className=" flex flex-col">
                            <text className=" text-[18px] font-[500] leading-[28.8px]">{blok.authorname}</text>
                            <text className=" text-[16px] leading-[25.5px]">{blok.authorrole}</text>
                        </div>
                    </div>
                </div>
            </div>
    )
}
