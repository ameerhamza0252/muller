import Pagelink from "@/components/link";

export default function USPList({blok}:{blok:any}){
  blok=blok.usplist;
  //console.log(blok)
    return(
        <div className=" relative flex flex-col h-auto py-[95px] px-[24px] lg:px-[41px] font-[300px] text-[#221E1F] "  id='services'>
        <text className=' text-[21px] text-[#595657]'>
          Our approach
        </text>
        
        <div className=' flex xl:justify-between gap-[20px] px-[10px] mt-[65px] items-end'>
          <text className="w-[620px] heading2 ml-[10px] mt-[30px]" >Our USP</text>
          <Pagelink/> 
        </div>
        <div className=" w-[800px] lg:w-[1017px] xl:w-[1300px] self-end flex flex-col mt-[150px] px-5 ">
          {
            blok.length?blok.map((u:any)=>(
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