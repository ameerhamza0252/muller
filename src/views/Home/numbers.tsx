import Heading2 from '@/components/headings/heading'
import bg from '../../public/Icon/home-bg-image.png'

export default function Numbers({Numbers}:{Numbers:any}){
    return(
        <div className=" h-screen flex flex-col md:flex-row justify-between bg-[url('/Icon/home-bg-image.png')] bg-cover px-[20px] lg:px-[43px]">
            <text className=' relative heading2 top-[60px] lg:top-[200px] xl:[300px]'>Numbers</text>
            <div className='h-[440px] grid grid-cols-2 grid-rows-2 md:mt-[132px] rounded-[10px] border-collapse border-[1px] divide-x divide-y '>
                {Numbers.map((n:any)=>(
                    <div key={n._uid} className=' w-[220px] h-[220px] flex flex-col items-center justify-center '>
                        <text className=' heading2 text-[#FAFBFF] text-[45px] leading-[49px]'>
                            {n.number}
                        </text>
                        <text className=' max-w-[114px] text-[14px] leading-[22px]'>{n.title}</text>
                    </div>
                ))}
            </div>
        </div>
    )
}