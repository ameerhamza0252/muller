"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import Image from "next/image"
import { render } from "storyblok-rich-text-react-renderer"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import Pagelink from "@/components/link";

export function CareerTop({blok}:{blok:any}){
    //console.log(blok)
    return(
        <div className=" min-h-screen flex flex-col items-center gap-[30px] lg:gap-[80px] py-[40px] lg:py-[112px]" id={blok.anchor_id} {...storyblokEditable(blok)}>
                <div className=" w-full lg:w-3/5 flex flex-col gap-[24px] px-[30px] lg:px-[64px]">
                    <text className=" text-[16px] leading-[25.6px]">{blok.category}</text>
                    <text className=" heading1">{blok.title}</text>
                    <div className=" flex items-center justify-between mt-[24px]">
                        <div className=" flex items-center text-[14px] leading-[22.4px] font-DM_Mono">
                            <Image className=" rounded-full" width={56} height={56} src={blok.circledImage.filename} alt={blok.circledImage.alt} />
                            <text className=" ml-[16px] ">{(blok.date)}</text>
                            <text className=" px-[8px]">.</text>
                            <text>{blok.readtime}</text>
                        </div>
                        <div className=" flex gap-[8px]" >
                            {blok.socials.map((social:any)=>(<Image className=" p-[4px] bg-B-grey rounded-full" width={24} height={24} src={social.filename} alt={social.alt} />))}
                        </div>
                    </div>
                </div>
                <div className=" relative w-full h-[300px] lg:h-[600px] bg-cover">
                    <Image fill src={blok.coverImage.filename} alt={blok.coverImage.alt} />
                </div>
            </div>
    )
}

export async function CareerDescription({blok}:{blok:any}){
    //console.log(blok)
    return(
        <div className=" flex items-center justify-center lg:gap-[80px] py-[40px] lg:py-[112px]" id={blok.anchor_id} {...storyblokEditable(blok)}>
                <div className=" w-3/4">
                    <text className="">{render(blok.description)}</text>
                    <div className=" flex items-end justify-between mt-[24px] lg:mt-[64px]">
                            <div className=" flex flex-col gap-[16px] text-[18px] leading-[28.8px] font-DM_Mono">
                                <text className=" font-[500]">{blok.sharelable}</text>
                                <div className=" flex gap-[8px]" >
                                    {blok.shareon&&blok.shareon.map((social:any)=>(<Image className=" p-[4px] bg-B-grey rounded-full" width={24} height={24} src={social.filename} alt={social.alt} />))}
                                </div>
                            </div>
                            <div className=" flex gap-[8px] text-[14px] font-[600] leading-[21px]">
                                {blok.jobtags.map((tag:any)=>(<text className=" px-[8px] py-[4px] bg-B-grey" key={tag._uid}>{tag.name}</text>))}
                            </div>
                    </div>
                    <hr className=" h-[1px] my-[48px] bg-black"></hr>
                    <div className=" flex gap-[16px]">
                        <Image src={blok.authorimage.filename} className=" rounded-full" width={56} height={56} alt={blok.authorimage.alt} />
                        <div className=" flex flex-col">
                            <text className=" text-[18px] font-[500] leading-[28.8px]">{blok.authorname}</text>
                            <text className=" text-[16px] leading-[25.5px]">{blok.authorrole}</text>
                        </div>
                    </div>
                </div>
            </div>
    )
}



  const FormSchema = z.object({
    name: z
      .string({required_error:'required'}),
    email: z.string({required_error:'required'}).email(),
    message:z.string({required_error:'required'})
  })
  
  export function GetInTouch({blok}:{blok:any}) {
    //console.log(blok)
    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
    })
  
    function onSubmit(data: z.infer<typeof FormSchema>) {
      console.log(data)
    }
   const {color_variant}=blok;
   const border=color_variant=="black"?"border-b-B-Yellow":"border-b-brand";
    return (
      <div className={`flex flex-col  min-h-screen justify-center items-center ${color_variant=="black"?"bg-black text-white":''} gap-[20px] md:gap-[40px] lg:gap-[80px] py-[40px] lg:py-[112px] px-[30px] lg:px-[64px]`} id={blok.anchor_id} {...storyblokEditable(blok)}>
        <div className={` flex flex-col ${blok.textalign}`}>
            <text className={`${color_variant=="black"?"Roboto_Text-16":''} mb-[16px]`}>{blok.title}</text>
            <text className={`${color_variant=="black"?" font-['Roboto'] text-[48px] font-[700] leading-[57px]":"heading2"} mb-[24px]`}>{blok.heading}</text>
            <text className={` ${color_variant=="black"?" font-['Roboto'] text-[18px] font-[400]":"text-[18px] leading-[27px]"}`}>{blok.overview}</text>
        </div>
          <div className="grid grid-cols-1 w-full md:min-w-[520px] max-w-[560px] min-h-[543px] ">
              <Form {...form}>
              <form action={"mailto:"+blok.email.email} method="post" encType="text/plain" className={`w-full space-y-6 text-[16px] font-[400] leading-[24px] ${color_variant=="black"?"font-['Roboto']":""}`}>
                  <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                      <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                          <input {...field} placeholder={blok.nameplaceholder!=''?blok.nameplaceholder:"Your name"} className={` min-w-full h-[58px]  p-[12px] ${border} border-b-[1px] ${color_variant=="white"?"placeholder:text-grey-2":"placeholder:text-B-grey bg-black font-DM_Mono font-[500] "}`}  />
                      </FormControl>
                      
                      <FormMessage />
                      </FormItem>
                  )}
                  />
                  <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                      <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                          <input {...field} placeholder={blok.emailplaceholder!=''?blok.emailplaceholder:"Your email"}  className={` min-w-full border-b-[1px] p-[12px] ${border} h-[58px] ${color_variant=="white"?"placeholder:text-grey-2 bg-white":"placeholder:text-B-grey bg-black font-DM_Mono font-[500]"} `}  />
                      </FormControl>
                      
                      <FormMessage />
                      </FormItem>
                  )}
                  />
                  <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                      <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                      <textarea {...field} placeholder={blok.messageplaceholder!=''?blok.messageplaceholder:"Your Message"}  className={` min-w-full border-b-[1px] p-[12px] ${border} h-[156px] font-Helvectica ${color_variant=="white"?"placeholder:text-grey-2 bg-white":"placeholder:text-B-grey bg-black font-DM_Mono font-[500]"} `}  />
                      </FormControl>
                      <FormMessage />
                      </FormItem>
                  )}
                  />
                    <div className="  flex text-[14px] leading-[22.4px] font-DM_Mono"><hr className={`w-[20px] mt-[13px] border-[1px] mr-3 ${border}`} /> {blok.disclaimer}</div>
                  <button className=" w-full" type="submit" ><Pagelink  variant={color_variant=="white"?"green":"white"} text={blok.button_text} /></button>
              </form>
              </Form>
          </div>
      </div>
    )
  }

  
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { storyblokEditable } from "@storyblok/react"

  export function FAQs({blok}:{blok:any}){
    //console.log(blok)
    const link=blok.link[0]
    //console.log(blok)
    return(
        blok.variant=="vertical"?(<div className=" flex flex-col gap-[20px] md:gap-[80px] px-[10px] md:px-[64px] py-[40px] md:py-[112px]" id={blok.anchor_id} {...storyblokEditable(blok)}>
            <div className=" grid grid-cols-1 gap-[24px]">
                <text className=" heading2">{blok.title}</text>
                <text>{blok.overview}</text>
            </div>
            <Accordion type="single" className=" w-full " collapsible>
                {
                    blok.questions.map((question:any)=>(
                        <AccordionItem value={question._uid} className=" gap-0" key={question._uid}>
                            <AccordionTrigger className=" py-[20px] ">{question.heading}</AccordionTrigger>
                            <AccordionContent >
                                <text>{question.description}</text>
                            </AccordionContent>
                        </AccordionItem>
                    ))
                }
            </Accordion>
            <div className=" flex flex-col gap-[16px]">
                <text className=" heading3">{link.heading}</text>
                <text>{link.subheading}</text>
                {
                    blok.link&&blok.link.length>0?<Pagelink variant="green" text={link.Lable} url={link.link.url} />:null
                }
            </div>
        </div>)
        :(
            <div className=" grid grid-cols-1 lg:grid-cols-2 px-[20] lg:px-[64px] py-[50px] lg:py-[112px] gap-[50px] ">
                <div className=" flex flex-col">
                    <text className=" heading2 mb-[24px]">{blok.title}</text>
                    <text className=" mb-[32px]">{blok.overview}</text>
                    <Pagelink variant="green" />
                </div>
                <div className=" flex flex-col ">
                    <Accordion type="single" collapsible>
                    {
                        blok.questions.map((question:any)=>(
                            <AccordionItem value={question._uid} className=" gap-0  " key={question._uid}>
                                <AccordionTrigger className=" py-[20px] text-[18px] leading-[28.8px] font-[500] font-DM_Mono">{question.heading}</AccordionTrigger>
                                <AccordionContent className=" flex flex-col py-[32px] gap-[32px] lg:gap-[64px]" >
                                    <text>{question.description}</text>
                                </AccordionContent>
                            </AccordionItem>
                        ))
                    }
                    
                    </Accordion>
                </div>
            </div>
        )
    )
  }
