export const revalidate=true;
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/navbar'
import Footer from '@/components/footer'
import { Storyblok } from '@/utils'
export const dynamic = 'force-dynamic'

import { storyblokInit, apiPlugin, StoryblokStory, getStoryblokApi, RichTextSchema } from "@storyblok/react/rsc";
import StoryblokProvider from "../components/StoryblokProvider";

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
      type: 'memory'
    },
  },
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data } = await fetchData();
  
  return (
    <StoryblokProvider>
      <html lang="en">
      <body className={inter.className}>
        <StoryblokStory story={data.story} />
        {children}
        <Footer/>
      </body>
    </html>
    </StoryblokProvider>
  )
}
export async function fetchData() {
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/navigation`, { version: "draft" });
}
