
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

  export default function MenueButton(){
    return(
        <Menu>
        <MenuButton as={Button}>
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