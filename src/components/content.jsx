import React from "react";
import { Grid, GridItem,Flex } from "@chakra-ui/react"
// components
import  BreadcrumbDR  from './breadcrumb';
import MenuDR from './menu';
import HeaderDR from './header';
import StaffDoctor from './staffDoctor';
import SheduleContainer from "./scheduleContainer";

const ContentDR = () => {
    return (
        < >
            <Grid
                w="100vw"
                templateRows="repeat(12, 1fr)"
                templateColumns="repeat(12, 1fr)"
                gap={4}
                bg="#f3f6fa"
                >
                <GridItem rowSpan={12} colSpan={2}  bg="papayawhip" />
                <GridItem colSpan={8}  ><MenuDR /></GridItem>
                <GridItem colSpan={8} rowSpan={1}>
                    <Flex align="flex-start">
                        <BreadcrumbDR />
                    </Flex>
                    </GridItem>
                <GridItem colSpan={8} rowSpan={2} bg="#f3f6fa" > 
                    <HeaderDR />
                </GridItem>
                <GridItem colSpan={8} rowSpan={3} ><StaffDoctor/> </GridItem>
                <GridItem colSpan={8} rowSpan={4}><SheduleContainer /></GridItem>
                </Grid>
        </>
    )
}
export default ContentDR