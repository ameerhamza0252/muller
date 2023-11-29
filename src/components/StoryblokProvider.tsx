"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** 2. Import your components */

import HomePage from "@/views/Home/Home";
import { Navigation } from "./navbar";
import Home from "@/views/Home/Home";
import partners from "@/views/Home/partners";
import testimonials from "@/views/Home/testimonials";
import top from "@/views/Home/Top";
import USP from "@/views/Home/USP";

/** 3. Initialize it as usual */
storyblokInit({
  accessToken: process.env.STORYBLOKTOKEN,
  use: [apiPlugin],
  components: {
    Home:Home,
    Navigation:Navigation,
    Partners:partners,
    testimonials:testimonials,
    Top:top,
    USP:USP
  },
});

export default function StoryblokProvider({ children }:{children:any}) {
  return children;
}