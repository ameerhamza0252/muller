import Pagelink from "../link";

export default function Needs(){
    return(
        <div className="  grid grid-cols-1 md:grid-cols-2 px-[20px] py-[40px] lg:px-[64px] lg:py-[112px] gap-[20px] md:gap-0 md:justify-between items-center md:items-start text-black ">
            <text className=" heading2">Solutions for Your Automation Needs</text>
            <div className="  grid grid-cols-1 justify-between items-start md:h-[276px] ">
                <text className=" font-[Roboto]">Discover how our automation and robotics expertise can benefit your industry.</text>
                <text className=" p-[12px] text-grey-2 font-[] border-b-brand border-b-[1px]">Placeholder</text>
                <div>
                    <input  className=" mr-2 border-none checked:border-0 ring-B-Yellow " type="checkbox" color="red" />
                    <text>By clicking Sign Up, you confirm that you agree with our Terms and Conditions.</text>
                </div>
                <Pagelink />
            </div>
        </div>
    )
}