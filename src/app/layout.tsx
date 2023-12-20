//export const revalidate=true;
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/navbar'
import Footer from '@/components/footer'
export const dynamic = 'force-dynamic'

import { storyblokInit, apiPlugin, StoryblokStory, getStoryblokApi, RichTextSchema } from "@storyblok/react/rsc";
import StoryblokProvider from '@/components/StoryblokProvider'
import { Providers } from './providers'
import cloneDeep from "clone-deep";

const mySchema = cloneDeep(RichTextSchema)

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

storyblokInit({
  accessToken: process.env.STORYBLOKTOKEN,
  use: [apiPlugin],
  apiOptions:{
    cache: {
      clear: 'auto',
      type: 'none'
    },
  },
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const header = (await fetchData('navigation')).data;
  const footer = (await fetchData('footer')).data; 
  //console.log(footer) 
  
  return (
    <StoryblokProvider>
      <html lang="en" >
      <body className={inter.className+" relative"}>
        <Providers>
          <StoryblokStory story={header.story} />
          <div>
            {children}
          </div>
          <StoryblokStory story={footer.story} />
        </Providers>
      </body>
    </html>
    </StoryblokProvider>
  )
}
export async function fetchData(component:"navigation"|"footer") {
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/${component}`, { version: "published" });
}
