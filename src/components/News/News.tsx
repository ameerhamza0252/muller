import Image from "next/image";

export default async function NewsSection({blok}:{blok:any}) {
    return(
        <div className=" flex flex-col py-[40px] lg:py-[112px] px-[20px] lg:px-[64px] gap-[80px]">
            <div className=" flex flex-col gap-[16px]">
                <text>News</text>
                <div className=" flex justify-between ">
                    <div className=" flex flex-col w-3/4">
                        <text className=" heading2">Lorem ipsum dolor sit amet consetetur</text>
                        <text className=" mt-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</text>
                    </div>
                    <button className=" self-end px-[24px] py-[12px] border-b-[1px] border-brand">Button</button>
                </div>
            </div>
            <div className=" flex flex-wrap gap-5">
                <div className=" flex flex-col md:w-[336px] gap-[24px]">
                    <div className=" relative h-[300px]">
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