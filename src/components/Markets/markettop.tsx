import Pagelink from "../link";

export default async function MarketTop({blok}:{blok:any}) {
 
    return(
        <div className=" flex items-end justify-start h-[400px] lg:h-[500px] xl:h-[800px] px-[20px] lg:px-[64px] text-black py-[40px] lg:py-[112px] ">
            <div className=" flex flex-col gap-[24px]">
                <text className=" heading1">Markets</text>
                <text>Discover how our automation and robotics solutions are revolutionizing various industries.</text>
                <Pagelink text="Lorem Ipsum" />
            </div>
        </div>
    )
}