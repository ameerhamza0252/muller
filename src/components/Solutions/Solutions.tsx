import ItemsCard from "@/components/CommonComponents/ItemCard";

export default function SolutionsList({blok}:{blok:any}){
    //console.log('ItemsCard Start')
    const {card_divider_color}=blok;
    //const {link_variant}=blok;
    const {buttontext}=blok;
    const {solutions}=blok;
  //console.log(blok,"Solution here")
    const {colors}=blok;
    return(
      
        <div className={`flex flex-col h-auto py-[30px] lg:py-[95px] md:px-[24px] xl:px-[34px]`} style={{backgroundColor:colors[0].background_color,color:colors[0].text_color}} >
          <text className=' text-[21px]'>{blok.title}</text>
          <text className=" max-w-[600px] heading2 mt-[30px]" >{blok.heading}</text>
          <div className=' grid grid-cols-1 md:grid-cols-2 w-full justify-center gap-[20px] lg:px-[10px] mt-[30px] lg:mt-[65px]'>
             
                <ItemsCard divider_color={card_divider_color} link_variant={colors[0].link_variant} buttontext={buttontext} blok={solutions}/>
             
          </div>
      </div>
      
    )
}



/**
 * <div className=" flex flex-col h-auto py-[95px] px-[24px] xl:px-[34px] font-[400px] text-[#221E1F] " >
            <text className=' text-[21px]'>{blok.title}</text>
            <text className="w-[620px] heading2 ml-[10px] mt-[30px]" >{blok.heading}</text>
          <div className=' flex flex-wrap xl:justify-between gap-[20px] px-[10px] mt-[65px]'>
            {blok.solutions.map(async (s_uuid:string)=>{
                const {data}=await fetchData(s_uuid)
                //console.log(data.stories[0].content)
                const blok=data.stories[0].content
                const stop=blok.blocks.filter((b:any)=>b.component=="stop")
                const info=blok.blocks.filter((b:any)=>b.component=="info")
                return(
                  <div className=' flex flex-col md:w-[450px] lg:w-[550px] xl:w-[800px] min-h-[600px] h-[936px] xl:h-auto px-[10px] gap-[20px] py-[18px] xl:py-[30px]'>
                    <Image src={stop[0].image.filename} alt={stop[0].image.alt} width={520} height={358} style={{width:'100%',objectFit:'contain'}} />
                    <text className=' heading2 w-[80%]'>{info[0].title}</text>
                    <div className="w-[90%] border-b-[1px] border-[#00918E]" ></div>
                    <text className=' w-[90%] h-min-[165px] overflow-hidden  my-[8px]'>{render(info[0].description)}</text>
                    <Link href={`/Solutions/${s_uuid}`} ><Pagelink text="Click me" /></Link>
                  </div>
                )
              })}
          </div>
    </div>
 * 
 */