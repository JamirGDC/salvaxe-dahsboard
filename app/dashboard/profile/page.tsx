import {Avatar, Button, Flex, Text} from "@chakra-ui/react";
import InfoCard from "../../ui/dashboard/profile/card-info";
import PayrollCard from "../../ui/dashboard/profile/payroll-card";
import CardMessages from "../../ui/dashboard/profile/card-messages";
import AgendaCard from "../../ui/dashboard/profile/card-agenda";
import ActiveProjectsCard from "../../ui/dashboard/profile/card-projects";


export default async function Page() {

    return (
        <>
            <Flex w='100%' h='full' direction='column' align='center' zIndex={0} mt='-100px' >
                <Flex w='100%' h='full' maxH='300px' bg='teal.400' rounded='3xl' zIndex={0}></Flex>
                <Flex w='96%' h='full' maxH='115px' justify='space-between' p='20px' align='center' bg="rgba(255, 255, 255, 0.8)" backdropFilter="blur(10px)"  mt='-50px' rounded='3xl'  zIndex={2}>
                    <Flex gap='20px' align='center'>
                        <Avatar.Root shape="rounded" size="2xl">
                            <Avatar.Fallback name="Segun Adebayo" />
                            <Avatar.Image src="https://bit.ly/sage-adebayo" />
                        </Avatar.Root>
                        <Flex direction='column'>
                            <Text>Jamir Gutierrez DC</Text>
                            <Text>jamiggdc@gmail.com</Text>
                        </Flex>
                    </Flex>

                    <Flex gap='20px' align='center'>
                        <Button rounded='xl' w='135px'>General</Button>
                        <Button rounded='xl' w='135px'>Equipo</Button>
                        <Button rounded='xl' w='135px'>Proyectos</Button>
                    </Flex>
                </Flex>

                <Flex direction='column' w='100%'>

                    <Flex mt='100px' w='100%' gap='25px'>
                        <InfoCard />
                        <PayrollCard />
                        <CardMessages />
                    </Flex>

                    <Flex mt='100px' w='100%' gap='25px'>
                        <AgendaCard />
                        <ActiveProjectsCard />


                    </Flex>

                </Flex>


            </Flex>



        </>
    )
}
