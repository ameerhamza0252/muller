export default async function NewsTop({blok}:{blok:any}) {
    return(
        <div className=" flex flex-col md:flex-row justify-between items-center min-h-[135px] py-[40px] px-[20px] lg:px-[64px] pb-[50px] lg:pb-[112px] pt-[100px] lg:pt-[200px] ">
            <div className=" flex flex-col w-full gap-[16px]">
                <text>{blok.title}</text>
                <text className=" heading1">{blok.heading}</text>
            </div>
            <text className=" md:w-[40%]">{blok.overview}</text>
        </div>
    )
}