import { Storyblok } from "@/utils";
import Image from "next/image";
import Link from "next/link";


export async function Navigation({blok}:{blok:any}){
    //const {data}=await Storyblok.get('cdn/stories/navigation', {version:"published"});
    //const items=data.story.content.name;
    //console.log(blok.name[2])
    return(
        <div className=" absolute w-full h-[70px] flex justify-between text-white">
            <div className=" h-[35px] w-[166px] bg-[url('/Icon/muller-technology-logo1.svg')] mt-[13px] ml-[18px]"></div>
            <div className=" flex justify-end items-center w-auto bg-[#00918E] gap-[20px] px-[20px] py-[15px] text-[21px] font-[400] rounded-bl-[8px]">
                {
                    blok.name.map((i:any)=>{
                        //console.log(i)
                        return((
                            <Link href={"/"+i.title} ><text key={i._uid} >{i.title}</text></Link>
                        ))
                    })
                }
                <Image src="/Icon/Youtube.svg" alt="youtube" width={24} height={24} />
                <Image src="/Icon/LinkedIn3.svg" alt="linkedin" width={24} height={24} />
            </div>
        </div>
    )
}