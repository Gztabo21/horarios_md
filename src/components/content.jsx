import React from "react";
import { Container, Flex } from "@chakra-ui/react"
import { Spacer} from '@chakra-ui/react';
import { Grid, GridItem } from "@chakra-ui/react"
// components
import  BreadcrumbDR  from './breadcrumb';
import MenuDR from './menu';
import HeaderDR from './header';

const ContentDR = () => {
    return (
        < >
            <Grid
                w="100wv"
                templateRows="repeat(8, 1fr)"
                templateColumns="repeat(12, 1fr)"
                gap={4}
                bg="#f3f6fa"
                >
                <GridItem rowSpan={8} colSpan={2}  bg="papayawhip" />
                <GridItem colSpan={8} borderRadius="md" ><MenuDR /></GridItem>
                <GridItem colSpan={8}  >
                    <Flex align="flex-start">
                        <BreadcrumbDR />  <Spacer />
                    </Flex>
                    </GridItem>
                <GridItem colSpan={8} bg="#f3f6fa" > 
                    <HeaderDR />
                </GridItem>
                <GridItem colSpan={8} bg="papayawhip" />
                <GridItem colSpan={8} bg="tomato" />
                </Grid>
        </>
    )
}
export default ContentDR