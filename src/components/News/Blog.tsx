import Image from "next/image";

export default async function Blog({blok}:{blok:any}) {
    return(
        <div className=" flex flex-col px-[20px] lg:px-[68px] pt-[13px] pb-[40px] lg:pb-[113px] ">
            <text className=" pl-2">Blog</text>
            <div className=" flex flex-col self-center text-center ">
                <text className=" heading1">Lorem Ipsum Headingum</text>
                <text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </text>
            </div>
            <div className=" flex flex-wrap mt-[50px] lg:mt-[105px]">
                <div className=" flex flex-col md:w-[500px] gap-[24px]">
                    <div className=" relative h-[400px]">
                        <Image src={"/Icon/Solution.png"} alt="" fill />
                    </div>
                    <div className=" flex gap-[16px] text-[DM Mono] text-[14px] items-center ">
                        <text className=" py-[4px] px-[8px] bg-Light-Grey">Category</text>
                        <text className=" font-[500]">5 minute read</text>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                        <text className=" heading4">Lorem ipsum dolor sit amet cons</text>
                        <text className=" text-[16px] leading-[25.6px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</text>
                    </div>
                </div>
            </div>
        </div>
    )
}