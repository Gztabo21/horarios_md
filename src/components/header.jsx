import { Switch } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { Box,Flex } from "@chakra-ui/react"
import { FormControl,FormLabel } from "@chakra-ui/react"

const HeaderDR = ()=>{
    return(
        <Flex align="flex-start" justify="space-between">
        <Box display="flex" alignItems="flex-start" flexDirection="column">
        <Text fontSize="4xl" color="#26b">Mantenimiento de horarios</Text>
        <Text fontSize="sm">A continuacion podras registrar o modificar los horarios de atencion del medico</Text> 
        </Box>
        <Box>
        <FormControl display="flex" alignItems="center" flexDirection="row-reverse" justifyContent="space-between" >
            <FormLabel htmlFor="shedule-dr" fontSize="sm" mb="0">
                Desactivar Horario de medico
            </FormLabel>
            <Switch id="shedule-dr" m="1rem"/>
            </FormControl>
        </Box>
        </Flex>
    )
}

export default HeaderDR 