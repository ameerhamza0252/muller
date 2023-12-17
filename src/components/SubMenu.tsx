"use client"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"

  
  export default function SubMenue({trigger,list}:{trigger:string,list:string[]}){
    return(
        <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
            <NavigationMenuTrigger>{trigger}</NavigationMenuTrigger>
            <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
            </NavigationMenuItem>
        </NavigationMenuList>
        </NavigationMenu>

    )
  }