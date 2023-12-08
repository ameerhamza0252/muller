export function AboutTop({blok}:{blok:any}){
    return(
        <div className=" flex flex-col md:flex-row h-screen md:h-[400px] lg:h-[650px] xl:h-[800px]">
                <div className=" md:w-[50%] h-[50%] md:h-full flex items-center justify-center  bg-cover bg-[url('/Icon/home-bg-image.png')]">
                    <text className=" mt-[40%] mx-3 text-[40px] leading-[24px] sm:max-xl:w-[80%] lg:w-[80%] lg:text-[80px] lg:leading-[84px]">{blok.title}</text>
                </div>
                <div className=" md:w-[50%] h-[50%] md:h-full flex justify-end items-end bg-cover bg-[url('/Icon/home-bg-image.png')] ">
                    <text className=" w-[60%] mb-3 md:mb-8 mr-3 md:mr-8 xl:mr-14">{blok.overview}</text>
                </div>
            </div>
    )
}