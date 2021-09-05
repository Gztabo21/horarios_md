import React from 'react';
import { Grid, GridItem, Flex } from "@chakra-ui/react";
import { Button, ButtonGroup, Stack } from "@chakra-ui/react";

const ButtonScheduleGroup = ()=>{
    return(
        <>
        <Stack direction="row" spacing={0} align="center">
            <Button bg="medical.100" w="282px"  color="#fff" variant="solid" >
                SEDE CAMACHO
            </Button>
            <Button bg="gray.200" w="282px" variant="ghost">
                SEDE JESUS MARIA TORRE I
            </Button>
            <Button bg="gray.200" w="282px" variant="ghost">
                SEDE JESUS MARIA TORRE II
            </Button>
            <Button bg="#e0e6ee" w="282px"  variant="ghost">
                VIRTUAL
            </Button>
        </Stack>
        
        </>
    )
}

export default ButtonScheduleGroup