import React from 'react';
import { Grid, GridItem,Flex } from "@chakra-ui/react"

const Schedule =  () =>{
    return(
       <Grid
       templateRows="repeat(8, 1fr)"
       templateColumns="repeat(12, 1fr)"
       gap={2}
       >
           <GridItem bg="tomato" rowSpan={8} colSpan={8} >hola</GridItem>
           <GridItem bg="tomato" rowSpan={8} colSpan={4} >hola</GridItem>
       </Grid> 
    )
}
export default Schedule