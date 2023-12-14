"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

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
    return(
        <div className=" min-h-screen flex flex-col items-center gap-[30px] lg:gap-[80px] py-[40px] lg:py-[112px]">
                <div className=" w-full lg:w-3/5 flex flex-col gap-[24px] px-[30px] lg:px-[64px]">
                    <text className=" text-[16px] leading-[25.6px]">{"Automation > Career"}</text>
                    <text className=" heading1">Single career post</text>
                    <div className=" flex items-center justify-between mt-[24px]">
                        <div className=" flex items-center text-[14px] leading-[22.4px] font-DM_Mono">
                            <Image className=" rounded-full" width={56} height={56} src={"/Icon/Relume.svg"} alt="" />
                            <text className=" ml-[16px] ">January 11, 2022</text>
                            <text className=" px-[8px]">.</text>
                            <text>5  minutes read</text>
                        </div>
                        <div className=" flex gap-[8px]" >
                            <Image className=" p-[4px] bg-B-grey rounded-full" width={24} height={24} src={"/Icon/Relume.svg"} alt="" />
                        </div>
                    </div>
                </div>
                <div className=" relative w-full h-[300px] lg:h-[600px] bg-cover">
                    <Image fill src={"/Icon/Solution.png"} alt="" />
                </div>
            </div>
    )
}

export async function CareerDescription({blok}:{blok:any}){
    return(
        <div className=" flex items-center justify-center lg:gap-[80px] py-[40px] lg:py-[112px]">
                <div className=" w-3/4">
                    <text className="">Data</text>
                    <div className=" flex items-end justify-between mt-[24px] lg:mt-[64px]">
                            <div className=" flex flex-col gap-[16px] text-[18px] leading-[28.8px] font-DM_Mono">
                                <text className=" font-[500]">Share this post</text>
                                <div className=" flex gap-[8px]" >
                                    <Image className=" p-[4px] bg-B-grey rounded-full" width={24} height={24} src={"/Icon/Relume.svg"} alt="" />
                                </div>
                            </div>
                            <div className=" flex gap-[8px] text-[14px] font-[600] leading-[21px]">
                                <text className=" px-[8px] py-[4px] bg-B-grey">Automation</text>
                            </div>
                    </div>
                    <hr className=" h-[1px] my-[48px] bg-black"></hr>
                    <div className=" flex gap-[16px]">
                        <Image src={"/Icon/Solution.png"} className=" rounded-full" width={56} height={56} alt="" />
                        <div className=" flex flex-col">
                            <text className=" text-[18px] font-[500] leading-[28.8px]">John Doe</text>
                            <text className=" text-[16px] leading-[25.5px]">Senior Automation Engineer, Company</text>
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

export function GetInTouch() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    
  }

  return (
    <div className=" flex  min-h-screen justify-center items-center bg-black text-white py-[40px] lg:py-[112px] px-[30px] lg:px-[64px]">
        <div className="grid grid-cols-1 w-full md:min-w-[543px] max-w-[560px] min-h-[543px] ">
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 text-[16px] font-[400] leading-[24px]">
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                        <input {...field} placeholder="Placeholder here" type="text"  className=" min-w-full border-b-[1px] p-[12px] border-b-B-Yellow h-[58px] bg-black placeholder:text-B-grey y"  />
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
                    <input {...field} placeholder="Placeholder here" type="email"  className=" min-w-full border-b-[1px] p-[12px] border-b-B-Yellow h-[58px] bg-black placeholder:text-B-grey y"  />
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
                    <textarea {...field} placeholder=" Enter your message"  className=" min-w-full border-b-[1px] p-[12px] border-b-B-Yellow h-[156px] bg-black placeholder:text-B-grey y"  />
                    </FormControl>
                    <FormDescription className=" flex text-[14px] leading-[22.4px] font-DM_Mono">
                    <hr className=" w-[20px] mt-[13px] mr-3 border-B-Yellow" /> confirm that you agree with our Terms and Conditions.
                    </FormDescription>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Pagelink variant="white" text="Sign up here" />
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
import Image from "next/image"

  export function FAQs({blok}:{blok:any}){
    return(
        <div className=" flex flex-col gap-[20px] md:gap-[80px] px-[20px] md:px-[64px] py-[40px] md:py-[112px]">
            <div className=" grid grid-cols-1 gap-[24px]">
                <text className=" heading2">FAQs</text>
                <text>Find answers to common questions about our job application process, company culture, and employee benefits.</text>
            </div>
            <Accordion type="single" className="" collapsible>
                <AccordionItem value="item-1" className=" gap-0">
                    <AccordionTrigger className=" py-[20px] ">What is the application process?</AccordionTrigger>
                    <AccordionContent >
                        <text>What is the application process?</text>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className=" gap-0">
                    <AccordionTrigger className=" py-[20px] ">What is the application process?</AccordionTrigger>
                    <AccordionContent >
                        <text>What is the application process?</text>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className=" gap-0">
                    <AccordionTrigger className=" py-[20px] ">What is the application process?</AccordionTrigger>
                    <AccordionContent >
                        <text>What is the application process?</text>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <div className=" flex flex-col gap-[16px]">
                <text className=" heading3">Still have questions?</text>
                <text>Contact us for further assistance.</text>
                {
                    blok.link&&blok.link.length>0?<Pagelink variant="green" text="Find out more" />:null
                }
            </div>
        </div>
    )
  }