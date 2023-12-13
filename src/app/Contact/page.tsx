import Pagelink from "@/components/link";
import Image from "next/image";

export default function Contact(){
    return(
        <>
            <div className=" min-h-screen md:h-screen flex items-center justify-between px-[20px] md:px-[64px]">
                <div className=" flex flex-col gap-[24px]">
                    <text className=" heading1">Contact Page</text>
                    <text>We value your feedback and inquiries. Reach out to us today!</text>
                    <Pagelink variant="white" />
                </div>
                <div className=" grid grid-cols-2 gap-[16px] ">
                    <div className=" flex flex-col overflow-auto scroll-m-2 scroll-smooth h-screen snap-y snap-mandatory gap-[16px]">
                        <div className="  snap-always snap-center">
                        <Image src={"/Icon/Solution.png"} width={264} height={340} alt="" />
                        </div><div className="  snap-always snap-center">
                        <Image src={"/Icon/Solution.png"} width={264} height={340} alt="" />
                        </div><div className="  snap-always snap-center">
                        <Image src={"/Icon/Solution.png"} width={264} height={340} alt="" />
                        </div><div className="  snap-always snap-center">
                        <Image src={"/Icon/Solution.png"} width={264} height={340} alt="" />
                        </div>
                        <div className="  snap-always snap-center">
                        <Image src={"/Icon/Solution.png"} width={264} height={340} alt="" />
                        </div><div className="  snap-always snap-center">
                        <Image src={"/Icon/Solution.png"} width={264} height={340} alt="" />
                        </div>
                        <div className="  snap-always snap-center">
                        <Image src={"/Icon/Solution.png"} width={264} height={340} alt="" />
                        </div><div className="  snap-always snap-center">
                        <Image src={"/Icon/Solution.png"} width={264} height={340} alt="" />
                        </div>
                        <div className="  snap-always snap-center">
                        <Image src={"/Icon/Solution.png"} width={264} height={340} alt="" />
                        </div><div className="  snap-always snap-center">
                        <Image src={"/Icon/Solution.png"} width={264} height={340} alt="" />
                        </div>
                    </div>
                    <div className=" flex flex-col overflow-y-auto scroll-smooth h-screen snap-y snap-mandatory gap-[16px]">
                        <div className="  snap-always snap-center">
                        <Image src={"/Icon/Solution.png"} width={264} height={340} alt="" />
                        </div><div className="  snap-always snap-center">
                        <Image src={"/Icon/Solution.png"} width={264} height={340} alt="" />
                        </div><div className="  snap-always snap-center">
                        <Image src={"/Icon/Solution.png"} width={264} height={340} alt="" />
                        </div><div className="  snap-always snap-center">
                        <Image src={"/Icon/Solution.png"} width={264} height={340} alt="" />
                        </div>
                        <div className="  snap-always snap-center">
                        <Image src={"/Icon/Solution.png"} width={264} height={340} alt="" />
                        </div><div className="  snap-always snap-center">
                        <Image src={"/Icon/Solution.png"} width={264} height={340} alt="" />
                        </div>
                        <div className="  snap-always snap-center">
                        <Image src={"/Icon/Solution.png"} width={264} height={340} alt="" />
                        </div><div className="  snap-always snap-center">
                        <Image src={"/Icon/Solution.png"} width={264} height={340} alt="" />
                        </div>
                        <div className="  snap-always snap-center">
                        <Image src={"/Icon/Solution.png"} width={264} height={340} alt="" />
                        </div><div className="  snap-always snap-center">
                        <Image src={"/Icon/Solution.png"} width={264} height={340} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}