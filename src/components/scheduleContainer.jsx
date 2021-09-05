import React from "react";
import {Text, Box} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { ListIcon,BookIcon } from "../helpers/customer-icon";
import ButtonScheduleGroup  from "./groupButtonSchedule";
import Schedule  from "./schedule";

const ScheduleContainer = ()=>{
    return(
        <>
        <Box display="flex" justifyContent="space-between">
            <Box >
            <Text fontSize="xl" color="medical.100" ><BookIcon color="#ade370" /> Horarios registrados del médico</Text>
            </Box>
            <Box>
                <Link href="#" isExternal><ListIcon  m="0.5rem"/> Descargar horarios</Link>
                <Link href="#" isExternal><ListIcon m="0.5rem" /> Ver historial de cambios</Link>
            </Box>
        </Box>
        <ButtonScheduleGroup />
        <Schedule />
        </>

    )
}

export default ScheduleContainer