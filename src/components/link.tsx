import { BiRightArrowAlt } from "react-icons/bi"

export default function Pagelink({text,url}:{text?:string,url?:string}){
    return(
        <div className='flex justify-between items-baseline h-[38px] w-[353px] text-[21px] font-medium border-b-[1px] border-brand pb-1 text-brand'>
        <text className=' text-black'>
          {text?text:'Lore Ipsum'}
        </text>
        <BiRightArrowAlt />
          </div>
    )
}