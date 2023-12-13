import Image from "next/image";

export default async function CareerPost() {
    return(
        <>
            <div className=" min-h-screen flex flex-col items-center gap-[30px] lg:gap-[80px] py-[40px] lg:py-[112px]">
                <div className=" w-full lg:w-3/5 flex flex-col gap-[24px] px-[30px] lg:px-[64px]">
                    <text className=" text-[16px] leading-[25.6px]">{"Automation > Career"}</text>
                    <text className=" heading1">Single career post</text>
                    <div className=" flex items-center justify-between mt-[24px]">
                        <div className=" flex items-center text-[14px] leading-[22.4px] font-DM_Mono">
                            <Image className=" rounded-full" width={56} height={56} src={"/Icon/Relume.svg"} alt="" />
                            <text className=" ml-[16px] ">January 11, 2022</text>
                            <text className=" px-[8px]">.</text>
                            <text>5  minutes read</text>
                        </div>
                        <div className=" flex gap-[8px]" >
                            <Image className=" p-[4px] bg-B-grey rounded-full" width={24} height={24} src={"/Icon/Relume.svg"} alt="" />
                        </div>
                    </div>
                </div>
                <div className=" relative w-full h-[300px] lg:h-[600px] bg-cover">
                    <Image fill src={"/Icon/Solution.png"} alt="" />
                </div>
            </div>
            <div className=" flex items-center justify-center lg:gap-[80px] py-[40px] lg:py-[112px]">
                <div className=" w-3/4">
                    <text className="">Data</text>
                    <div className=" flex items-end justify-between mt-[24px] lg:mt-[64px]">
                            <div className=" flex flex-col gap-[16px] text-[18px] leading-[28.8px] font-DM_Mono">
                                <text className=" font-[500]">Share this post</text>
                                <div className=" flex gap-[8px]" >
                                    <Image className=" p-[4px] bg-B-grey rounded-full" width={24} height={24} src={"/Icon/Relume.svg"} alt="" />
                                </div>
                            </div>
                            <div className=" flex gap-[8px] text-[14px] font-[600] leading-[21px]">
                                <text className=" px-[8px] py-[4px] bg-B-grey">Automation</text>
                            </div>
                    </div>
                    <hr className=" h-[1px] my-[48px] bg-black" />
                    <div className=" flex gap-[16px]">
                        <Image src={"/Icon/Solution.png"} className=" rounded-full" width={56} height={56} alt="" />
                        <div className=" flex flex-col">
                            <text className=" text-[18px] font-[500] leading-[28.8px]">John Doe</text>
                            <text className=" text-[16px] leading-[25.5px]">Senior Automation Engineer, Company</text>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" flex min-h-screen justify-center items-center bg-black text-white py-[40px] lg:py-[112px] px-[30px] lg:px-[64px]">
                <div className=" w-3/5">

                </div>
            </div>
        </>
    )
}