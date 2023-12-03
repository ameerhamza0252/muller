import Image from "next/image";

export default function MarketPoints({blok}:{blok:any}){
    return(
        <div className=" flex flex-col lg:flex-row px-[20px] py-[40px] lg:px-[64px] lg:py-[112px] gap-[48px] text-black">
            <div className=" lg:w-[325px] flex flex-col gap-[24px]">
                <Image src={"/Icon/Relume.svg"} width={48} height={48} alt="box" />
                <text className=" heading4">Key Market Sectors</text>
                <text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae semper lorem.</text>
            </div>
        </div>
    )
}