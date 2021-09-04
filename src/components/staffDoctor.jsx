import React from 'react';
import { Box, Grid,GridItem } from "@chakra-ui/react"
import { Text, Button } from "@chakra-ui/react"

const StaffDoctor = ()=>{
    return(
        <Box bg="#E5E5E5" p="1rem" borderColor="green.500">
            <Grid
            h="150px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(11, 1fr)"
            gap={4}
            >
                <GridItem rowSpan={2} colSpan={2}>
                    <Text color="#26b" fontSize="md" > Medico</Text>
                    <Text color="#555"> Maria Maria Maria Maria </Text>
                    <Text color="#26b" fontSize="md" > Tipo de paciente </Text>
                    <Text color="#555"> Mixto </Text>
                </GridItem>
                <GridItem colSpan={2}>
                <Text color="#26b" fontSize="md" > Sede</Text>
                    <Text color="#555"> Torre 1</Text>
                </GridItem>
                <GridItem colSpan={2}>
                <Text color="#26b" fontSize="md" >Especialidad</Text>
                    <Text color="#555"> Gediatria </Text>
                </GridItem>
                <GridItem colSpan={2}>
                <Text color="#26b" fontSize="md" >Telefono</Text>
                    <Text color="#555"> 999 888 777 </Text>                    
                </GridItem>
                <GridItem colSpan={3}>
                <Text color="#26b" fontSize="md" >Correo</Text>
                    <Text color="#555">maria_maria@gmail.com </Text>
                </GridItem>
                <GridItem colSpan={4}>
                <Text color="#26b" fontSize="md" >Observaciones</Text>
                    <Text color="#555">Atencion para personas mayores de 50 años </Text>
                </GridItem>
                <GridItem colSpan={2}>
                    <Button variant="outline" borderRadius="lg" borderColor="#999">Editar</Button>
                </GridItem>
            </Grid>
        </Box>
    )

}

export default StaffDoctor