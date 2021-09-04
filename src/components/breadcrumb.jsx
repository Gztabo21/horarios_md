import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
  } from "@chakra-ui/react"
import {ChevronRightIcon}  from '@chakra-ui/icons'

const BreadcrumbDR = ()=>{
 return(
<Breadcrumb separator={<ChevronRightIcon color="#137" />} >
  <BreadcrumbItem>
    <BreadcrumbLink href="#" color="#555">Inicio</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href="#" color="#555">Medicos</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href="#" color="#555">Mantenimiento de horarios</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>)
}
export default BreadcrumbDR