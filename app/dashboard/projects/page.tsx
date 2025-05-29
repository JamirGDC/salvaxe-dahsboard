import ProjectsGrid from "../../ui/dashboard/projects/projects-grid";
import {Flex, Text} from "@chakra-ui/react";
import ChartResume from "../../ui/dashboard/project-resume";
import { FaPlus } from "react-icons/fa6";


export default async function Page() {

    return (
        <>
            <Flex direction='column' gap='25px' w='100%' h='100%'>
                <ProjectsGrid/>

                <Flex gap='25px' direction='row' w='100%' h='100%'>
                    <ChartResume />

                    <Flex w='30%' h='100%' bg='white' rounded="2xl" align='center' justify='center' direction='column'>
                        <FaPlus />
                        <Text textAlign="center">Crear nuevo<br/>proyecto</Text>
                    </Flex>


                </Flex>
            </Flex>

        </>
    )
}
