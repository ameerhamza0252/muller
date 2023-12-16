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
  import { render } from "storyblok-rich-text-react-renderer"
  
    export function FAQs({blok}:{blok:any}){
      //console.log(blok)
      const link=blok.link[0]
      return(
          blok.variant=="verticle"?(<div className=" flex flex-col gap-[20px] md:gap-[80px] px-[20px] md:px-[64px] py-[40px] md:py-[112px]">
              <div className=" grid grid-cols-1 gap-[24px]">
                  <text className=" heading2">{blok.title}</text>
                  <text>{blok.overview}</text>
              </div>
              <Accordion type="single" className="" collapsible>
                  {
                      blok.questions.map((question:any)=>(
                          <AccordionItem value={question._uid} className=" gap-0" key={question._uid}>
                              <AccordionTrigger className=" py-[20px] ">{question.heading}</AccordionTrigger>
                              <AccordionContent >
                                  <text>{question.answer}</text>
                              </AccordionContent>
                          </AccordionItem>
                      ))
                  }
              </Accordion>
              <div className=" flex flex-col gap-[16px]">
                  <text className=" heading3">{link.heading}</text>
                  <text>{link.subheading}</text>
                  {
                      blok.link&&blok.link.length>0?<Pagelink variant="green" url={link.Lable} text={link.link.url} />:null
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