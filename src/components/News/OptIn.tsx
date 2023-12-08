import Pagelink from "../link";

export default async function OptIn({blok}:{blok:any}) {
    return(
        <div className=" h-screen flex items-center justify-center text-center bg-black text-white">
            <div className=" flex flex-col gap-[24px] px-[20px] md:px-0 md:w-3/4 ">
                <text className=" heading4">Stay Updated with Our Newsletter</text>
                <text className=" ">Sign up to receive news and updates in the automation and robotics industry.</text>
                <div className=" flex flex-col self-center md:w-[513px] gap-[20px] ">
                    <input className=" min-w-full border-b-[1px] p-[12px] border-b-B-Yellow h-[58px] bg-black placeholder:text-B-grey " placeholder=" Placeholder"/>
                    <div className=" flex items-center gap-3 mx-2">
                        <hr className=" w-[25px] border-B-Yellow" />
                        <text className=" text-[14px] leading-[22.6px] font-DM_Mono text-start">By clicking Sign Up, you confirm that you agree with our Terms and Conditions and a third one.</text>
                    </div>
                    <Pagelink variant="yellow" />
                </div>
            </div>
        </div>
    )
}