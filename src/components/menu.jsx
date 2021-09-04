import React from "react";
import { Flex, Spacer } from "@chakra-ui/react"
import { Avatar} from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { Button } from "@chakra-ui/button";
import {ChevronDownIcon}  from '@chakra-ui/icons'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem
  } from "@chakra-ui/react"

const MenuDR = () =>{
    return(
        <Flex bg="#E5E5E5">
            <Box p="2">
            </Box>
            <Spacer />
            <Box direction="row" display="flex" >
            <Avatar size="sm" name="Marcos D" src="https://bit.ly/dan-abramovss" />
                <Box h="10">
                    <Text fontsize="md">Hola,</Text>
                    <Text>direction</Text>
                </Box>
                {/* botons */}
                <Menu isLazy>
                        <MenuButton as={Button} ><ChevronDownIcon/></MenuButton>
                        <MenuList>
                            {/* MenuItems are not rendered unless Menu is open */}
                            <MenuItem>New Window</MenuItem>
                            <MenuItem>Open Closed Tab</MenuItem>
                            <MenuItem>Open File</MenuItem>
                        </MenuList>
                    </Menu>
            </Box>
        </Flex>
    )
}

export default MenuDR