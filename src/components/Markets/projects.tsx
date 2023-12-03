import Image from "next/image";

export default function Projects(){
    return(
        <div className=" flex flex-col bg-black text-white px-[20px] xl:px-[40px] pt-[20px] pb-[40px] lg:pb-[112px] gap-[30px] lg:gap-y-[90px] items-center ">
            <text className=" text-B-grey self-start">Projects</text>
            <div className=" flex flex-col text-center gap-[24px]">
                <text className=" heading2">Innovative Projects for Industries</text>
                <text>Explore our diverse portfolio of industry-specific projects</text>
            </div>
            <div className=" lg:w-[1100px] xl:w-full flex flex-col items-center gap-[24px] xl:px-[20px]">
                <div className=" relative w-full h-[400px] lg:h-[640px] xl:h-[850px]">
                    <Image src="/Icon/Solution.png" fill alt="" />
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:max-h-[150px] ">
                    <div>
                        <text className=" heading4 ">Lorem ipsum dolor sit amet</text>
                        <div className=" flex gap-[8px] font-[DM Mono] text-black text-[14px] leading-[22.4px] font-[500] mt-[16px] ">
                            <div className=" h-[30px] bg-B-Yellow px-[8px] py-[4px]">manufacturing</div>
                            <div className=" h-[30px] bg-B-Yellow px-[8px] py-[4px]">Logistics</div>
                            <div className=" h-[30px] bg-B-Yellow px-[8px] py-[4px]">manufacturing</div>
                        </div>
                    </div>
                    <text>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua
                    </text>
                </div>
            </div>
            <div className=" lg:w-[1100px] xl:w-full flex flex-col items-center gap-[24px] xl:px-[20px]">
                <div className=" relative w-full h-[400px] lg:h-[640px] xl:h-[850px]">
                    <Image src="/Icon/Solution.png" fill alt="" />
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:max-h-[150px] ">
                    <div>
                        <text className=" heading4 ">Lorem ipsum dolor sit amet</text>
                        <div className=" flex gap-[8px] font-[DM Mono] text-black text-[14px] leading-[22.4px] font-[500] mt-[16px] ">
                            <div className=" h-[30px] bg-B-Yellow px-[8px] py-[4px]">manufacturing</div>
                            <div className=" h-[30px] bg-B-Yellow px-[8px] py-[4px]">Logistics</div>
                            <div className=" h-[30px] bg-B-Yellow px-[8px] py-[4px]">manufacturing</div>
                        </div>
                    </div>
                    <text>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua
                    </text>
                </div>
            </div>
            <div className=" lg:w-[1100px] xl:w-full flex flex-col items-center gap-[24px] xl:px-[20px]">
                <div className=" relative w-full h-[400px] lg:h-[640px] xl:h-[850px]">
                    <Image src="/Icon/Solution.png" fill alt="" />
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:max-h-[150px] ">
                    <div>
                        <text className=" heading4 ">Lorem ipsum dolor sit amet</text>
                        <div className=" flex gap-[8px] font-[DM Mono] text-black text-[14px] leading-[22.4px] font-[500] mt-[16px] ">
                            <div className=" h-[30px] bg-B-Yellow px-[8px] py-[4px]">manufacturing</div>
                            <div className=" h-[30px] bg-B-Yellow px-[8px] py-[4px]">Logistics</div>
                            <div className=" h-[30px] bg-B-Yellow px-[8px] py-[4px]">manufacturing</div>
                        </div>
                    </div>
                    <text>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua
                    </text>
                </div>
            </div>
        </div>
    )
}