'use client'
import {Text, Flex, Table, Box, Image, Button} from "@chakra-ui/react";
import { Progress } from "@chakra-ui/react";

export default function ChartResume() {
    const items = [
        { id: 1, company: "Laptop", companyLogo:"../static/test.svg", service: "Electronics", team: ["../static/test.svg", "../static/test.svg", "../static/test.svg", "../static/test.svg", "../static/test.svg"], progress: 60 },
        { id: 2, company: "Coffee Maker", companyLogo:"../static/test.svg", service: "Home Appliances", progress: 49 },
        { id: 3, company: "Desk Chair", companyLogo:"../static/test.svg", service: "Furniture", progress: 15.0},
        { id: 4, company: "Smartphone", companyLogo:"../static/test.svg", service: "Electronics", progress: 79 },
        { id: 5, company: "Headphones", companyLogo:"../static/test.svg", service: "Accessories", progress: 19 },
    ]

    // @ts-ignore
    // @ts-ignore
    return (
        <>
            <Flex w='70%' bg='white' rounded="2xl" p='20px' direction='column'>

                <Flex justify='space-between' align='center' w='100%'>
                    <Text fontWeight='bold' fontSize='12px' color='#A0AEC0'>Trabajo y equipo</Text>
                    <Text fontWeight='bold' fontSize='10px' color='#2D3748'>Ir a agenda</Text>
                </Flex>

                <Flex justify='space-between' align='center' w='100%' h='100%' maxHeight='445px'>
                    <Flex direction='column' w='100%' h='100%' justify='space-between' gap='10px'>



                        <Flex justify='start' align='start' w='100%' h='100%' direction='column' gap='2px'>
                            <Text fontWeight='bold' fontSize='18px' color='#2D3748'>Ganancias anuales</Text>
                            <Text fontWeight='regular' fontSize='14px' color='#2D3748'>(+5) mas que 2024</Text>
                        </Flex>

                        <Table.Root size="sm">
                            <Table.Header>
                                <Table.Row>
                                    <Table.ColumnHeader>Empresa</Table.ColumnHeader>
                                    <Table.ColumnHeader>Servicio</Table.ColumnHeader>
                                    <Table.ColumnHeader>Equipo</Table.ColumnHeader>
                                    <Table.ColumnHeader textAlign="end">Completado</Table.ColumnHeader>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {items.map((item) => (
                                    <Table.Row key={item.id}>
                                        <Table.Cell>
                                            <Flex align="center" gap="8px">
                                                <Image src={item.companyLogo} alt='{item.company}' w="7" h="7" rounded="xl" />
                                                <Text>{item.company}</Text>
                                            </Flex>
                                        </Table.Cell>
                                        <Table.Cell>{item.service}</Table.Cell>
                                        <Table.Cell>
                                            <Flex>
                                                {item.team?.slice(0, 4).map((member, index) => (
                                                    <Box
                                                        key={index}
                                                        boxSize="30px"
                                                        borderRadius="full"
                                                        overflow="hidden"
                                                        border="2px solid white"
                                                        ml={index === 0 ? "0" : "-10px"}
                                                        zIndex={10 - index}
                                                    >
                                                        <img src={member} alt={`member-${index}`} width="30" height="30" />
                                                    </Box>
                                                ))}
                                            </Flex>
                                        </Table.Cell>
                                        <Table.Cell textAlign="end">
                                            <Flex direction="column" align="end">
                                                <Progress.Root w='120px' maxW="240px" defaultValue={item.progress} colorScheme="teal">
                                                    <Progress.Label mb="2" color="teal.500" fontWeight="bold" fontSize="sm" >
                                                        {item.progress}%
                                                    </Progress.Label>
                                                    <Progress.Track h='3px' rounded="full" bg="gray.200">
                                                        <Progress.Range bg="teal.500"/>
                                                    </Progress.Track>
                                                </Progress.Root>

                                            </Flex>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table.Root>

                        <Button
                            variant="outline"
                            size="sm"
                            colorScheme="teal"
                            mt={6}
                            w="full"
                            maxW="240px"
                            borderColor="teal.400"
                            color="teal.400"
                            borderRadius="xl"
                        >
                            IR A PROYECTOS
                        </Button>

                    </Flex>

                </Flex>









            </Flex>
        </>
    );
}