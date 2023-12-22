//export const revalidate=true;
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
export const dynamic = 'force-dynamic'

import { storyblokInit, apiPlugin, StoryblokStory, getStoryblokApi, RichTextSchema } from "@storyblok/react/rsc";
import StoryblokProvider from '@/components/StoryblokProvider'
import { Providers } from './providers'
import cloneDeep from "clone-deep";
import Redux_Providers from '@/components/Provider'

const mySchema = cloneDeep(RichTextSchema)

const inter = Inter({ subsets: ['latin'] })


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
    
      <html lang="en" >
        <StoryblokProvider>
      <body className={inter.className}>
        <Redux_Providers>
          <Providers>
            <StoryblokStory story={header.story} />
            <div>
              {children}
            </div>
            <StoryblokStory story={footer.story} />
          </Providers>
        </Redux_Providers>
      </body>
      </StoryblokProvider>
    </html>
    
  )
}
export async function fetchData(component:"navigation"|"footer") {
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/${component}`, { version: "published" });
}
