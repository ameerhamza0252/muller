"use client"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
  import { Button, ButtonGroup } from '@chakra-ui/react'
import { useState } from 'react'

  export default function MenueButton(){
    const [open,setOpen]=useState(false)
    return(
        <Menu>
        <MenuButton onMouseLeave={()=>setOpen(false)} onMouseOver={()=>setOpen(true)}>
            Actions
        </MenuButton>
        <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
        </Menu>
    )
  }