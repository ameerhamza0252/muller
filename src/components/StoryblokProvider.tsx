"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** 2. Import your components */
import { Navigation } from "./navbar";
import partners from "@/views/Home/partners";
import testimonials from "@/views/Home/testimonials";
import top from "@/views/Home/Top";
import USPList from "@/views/Home/USPList";
import Page from "@/views/Home/Page";
import Numbers from "@/views/Home/NumberList";
import Solutions from "@/views/Solutions/Solutions";
import { Card } from "./Solutions/Solution";
import SolutionsPage from "@/views/Solutions/SolutionsPage";
import video from "./Solutions/video";
import benefits from "./Solutions/benefits";
/** 3. Initialize it as usual */
storyblokInit({
  accessToken: process.env.STORYBLOKTOKEN,
  use: [apiPlugin],
  components: {
    Navigation:Navigation,
    Partners:partners,
    testimonials:testimonials,
    Top:top,
    USPList:USPList,
    page:Page,
    NumbersList:Numbers,
    Solutions:Solutions,
    Solution:Card,
    SolutionsPage:SolutionsPage,
    video:video,
  },
  apiOptions:{
    region:'eu',
    cache: {
      clear: 'auto',
      type: 'memory'
    }
  }
});

export default function StoryblokProvider({ children }:{children:any}) {
  return children;
}