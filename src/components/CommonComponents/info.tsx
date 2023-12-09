import { render } from "storyblok-rich-text-react-renderer";

export default function Info({blok}:{blok:any}){
    //console.log(blok)
    return(
        <div className=" h-screen flex flex-col items-center  px-[20px] md:px-[40px] lg:px-[64px] xl:px-[94px] py-[36px] md:py-[66px] lg:py-[112px] xl:[150px] text-black">
                <div className=" w-[70%] h-full flex flex-col justify-center gap-4 md:gap-7 lg:gap-[24px] text-center">
                <text className=" heading2 ">{blok.title}</text>
                <text>{render(blok.description)}</text>
                </div>
            </div>
    )
}