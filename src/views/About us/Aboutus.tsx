import Pagelink from "@/components/link";
import { StoryblokComponent } from "@storyblok/react";
import Image from "next/image";

export default function AboutusStory({blok}:{blok:any}){
    console.log(blok)
    return(
        <>
            {
                blok.blocks.map((nested:any)=>(
                    <StoryblokComponent blok={nested} key={nested._uid} />
                ))
            }
            <div className=" h-screen flex flex-col items-center  px-[20px] md:px-[40px] lg:px-[64px] xl:px-[94px] py-[36px] md:py-[66px] lg:py-[112px] xl:[150px] text-black">
                <div className=" w-[70%] h-full flex flex-col justify-center gap-4 md:gap-7 lg:gap-16 xl:gap-28 text-center">
                <text className=" heading2 ">Lorem ipsum dolor sit amet, consetetur sadipscing</text>
                <text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                </text>
                </div>
            </div>
            <div className=" min-h-screen flex flex-col px-[15px] lg:px-0 lg:pl-[32px] xl:pl-[5%] lg:pr-[72px] xl:pr-[10%] bg-black ">
                <text className=" mt-[10px] md:mt-[20px] lg:mt-[40px] xl:mt-[70px] text-[#E7E9EA]">Our philosophy</text>
                <div className=" flex flex-col justify-between lg:flex-row mt-[10px] md:mt-[30px] lg:mt-[68px] xl-[200px]">
                    <text className=" heading2 w-[40%]">Lorem ipsum dolor sit amet</text>
                    <text className=" lg:w-[40%] mt-[5%]  " >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</text>
                </div>
            </div>
            <div className=" min-h-screen p-[20px] lg:p-none lg:pt-[40px] lg:px-[64px] flex flex-col gap-[20px] md:gap-[40px] lg:gap-[80px] xl:gap-[120px] text-black" id="#history">
                <text className="">History</text>
                <div className=" flex flex-col gap-[20px] lg:gap-0 lg:flex-row lg:justify-between">
                    <div className="  lg:w-[50%] flex flex-col gap-[10px] md:gap-[20px] lg:gap-[32px] xl:gap-[50px]">
                        <text className=" heading2">Lorem ipsum dolor sit amet consetetur sadipscing</text>
                        <Pagelink/>
                    </div>
                    <div className=" lg:w-[40%] flex flex-col gap-[16px]">
                        <div className=" flex flex-col gap-[16px]">
                            <div className=" flex gap-[20px] md:gap-[40px]">
                                <Image src="/Icon/Relume.svg" width={48} height={48} alt=""/>
                                <text className=" heading4">Lorem Ipsum dolor</text>
                            </div>
                            <div className=" flex gap-[20px] md:gap-[40px]">
                                <div className=" flex justify-center w-[48px] pl-3 pt-3"><div className="border-l-[2px] border-B-Yellow"></div></div>
                                <text className="">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</text>
                            </div>
                        </div>
                        <div className=" flex flex-col gap-[16px]">
                            <div className=" flex gap-[20px] md:gap-[40px]">
                                <Image src="/Icon/Relume.svg" width={48} height={48} alt=""/>
                                <text className=" heading4">Lorem Ipsum dolor</text>
                            </div>
                            <div className=" flex gap-[20px] md:gap-[40px]">
                                <div className=" flex justify-center w-[48px] pl-3 pt-3"><div className="border-l-[2px] border-B-Yellow"></div></div>
                                <text className="">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" min-h-screen flex flex-col pl-[20px] pr-[10px] py-[10px] lg:pl-[76px] lg:pr-[49px] lg:py-[35px] text-black ">
                <text>Organisation</text>
                <div className=" flex justify-between md:justify-normal md:gap-[24px] mt-[40px] lg:mt-[108px]">
                    <button className=" min-w-[180px] px-[34px] border-b-black border-b-[1px] pb-[10px]">Switzerland</button>
                    <button className=" min-w-[180px] px-[34px] border-b-black border-b-[1px] pb-[10px]">USA</button>
                </div>
                <div className=" lg:h-[570px] flex flex-col md:grid md:grid-cols-4">
                    <div className=" flex items-center justify-center col-span-3">
                        <div className=" w-[266px] h-[300px] grid grid-cols-1 gap-[24px]">
                            <Image src="/Icon/Relume.svg" width={80} height={80} alt="" className=" justify-self-center rounded-full" />
                            <div className=" flex flex-col text-center font-[Roboto]">
                                <text className=" text-[20px] leading-[30px] font-[600]">Carsten Eisenkrämer</text>
                                <text className=" text-[18px] leading-[27px] text-B-Yellow">CEO</text>
                                <text className=" text-[16px] leading-[24px] mt-[16px] ">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</text>
                            </div>
                            <div className="flex gap-[14px] justify-self-center">
                                <Image src="/Icon/Relume.svg" alt="" width={24} height={24} />
                                <Image src="/Icon/Relume.svg" alt="" width={24} height={24} />
                                <Image src="/Icon/Relume.svg" alt="" width={24} height={24} />
                            </div>
                        </div>
                    </div>
                    <div className=" max-w-[400px] flex flex-col text-center">
                        <button className=" min-w-[270px] border-b-[1px] border-black px-[34px] pb-[11px] pt-[16px]">General Management</button>
                        <button className=" min-w-[270px] border-b-[1px] border-black px-[34px] pb-[11px] pt-[16px]">General Management</button>
                        <button className=" min-w-[270px] border-b-[1px] border-black px-[34px] pb-[11px] pt-[16px]">General Management</button>
                    </div>
                </div>
                <div className=" flex flex-col mt-[40px] lg:mt-[97px] gap-[19px] self-center text-center items-center ">
                    <text className=" heading4">We are hiring</text>
                    <text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</text>
                    <Pagelink text="View Careers"/>
                </div>
            </div>
            <div className=" flex flex-col md:max-lg-min-h-screen pb-[100px] md:pb-0 xl:pb-[200px] px-[20px] lg:px-[61px] py-[34px] text-black ">
                <text className="">Achivements</text>
                <div className=" flex gap-[177px] mt-[20px] justify-between">
                    <div className=" lg:w-[40%] flex flex-col gap-[35px] mt-[150px]">
                        <text className=" heading2">Awards & Recognitions</text>
                        <text className=" mx-h-[235px] overflow-hidden mb-[10px]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </text>
                        <Pagelink />
                    </div>
                    <Image src="/Icon/Location.png" alt="" width={455} height={509} />
                </div>
            </div>
        </>
    )
}