import Pagelink from "@/components/link";

export default function USPList({blok}:{blok:any}){
  const variant=blok.variant
  //console.log(blok)
  const link=blok.link[0];
  const {usplist}=blok;
  
    return(
        <div className={` relative flex flex-col h-auto py-[95px] px-[24px] lg:px-[41px] font-[300px] ${variant!='black'?'text-black':' bg-black text-white'} `}  id='services'>
        <text className=' text-[21px]'>{blok.title}</text>
        <div className=' flex md:justify-between gap-[20px] px-[10px] mt-[65px] items-end'>
          <text className="w-[620px] heading2 ml-[10px] mt-[30px]" >{blok.heading}</text>
          <Pagelink url={link.url.url} text={link.Lable} variant={variant=="white"?"green":"yellow"} /> 
        </div>
        <div className=" w-[800px] lg:w-3/4 self-end flex flex-col mt-[150px] px-5 ">
          {
            usplist.length?usplist.map((u:any)=>(
              <div key={u._uid} className=" h-[150px] grid grid-cols-2 pt-[28px] ">
              <text>
              {u.title}
              </text>
              <text className=" overflow-hidden">
              {u.description}
              </text>
            </div>
            )):(
              <div key={blok._uid} className=" h-[150px] grid grid-cols-2 pt-[28px] ">
              <text>
              {blok.title}
              </text>
              <text className=" overflow-hidden">
              {blok.description}
              </text>
            </div>
            )
          }
        </div>
      </div>
    )
}