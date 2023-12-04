export default async function NewsTop({blok}:{blok:any}) {
    return(
        <div className=" flex justify-between items-center min-h-[135px] py-[40px] px-[20px] lg:px-[64px] pb-[50px] lg:pb-[112px] pt-[100px] lg:pt-[200px] ">
            <div className=" flex flex-col gap-[16px]">
                <text>Stay updated</text>
                <text className=" heading1">News Page</text>
            </div>
            <text className=" w-[40%]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</text>
        </div>
    )
}