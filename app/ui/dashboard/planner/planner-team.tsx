'use client'
import {Avatar, Button, Flex, Span, Text} from "@chakra-ui/react";

import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import Calendar from "./calendar";

export default function PlannerTeam() {
    return (
        <>
            <Flex w='100%' h='100%' maxH='560px' direction='row' rounded='2xl' overflow='hidden' color={'white'} gap='20px'>
                <Flex w='25%' bg='#4FD1C5' p='30px' direction='column' gap='30px' rounded='2xl' >
                    <Text>Agenda Equipo</Text>
                    <Calendar />
                </Flex>
                <Flex w='75%' bg='white' color='black' p='30px' direction='column' gap='30px' rounded='2xl'>

                    <Flex justify='space-between' >
                        <Text>Hoy, Jueves, 06 de junio de 2025</Text>
                        <Button rounded='lg'>Nueva Entrada</Button></Flex>

                    <Flex gap='10px' direction='row'>
                        <Flex bg='gray.100' w='10%' rounded='lg' justify='center' align='center'>Todo El dia</Flex>
                        <Flex bg='gray.100' w='90%' rounded='lg' p='20px' direction='column' gap='5px'>
                            <Flex justify="space-between" align="center" w="100%">
                                <Text fontWeight="bold" fontSize="lg">
                                    Maquetación
                                </Text>
                                <Flex gap={4}>
                                    <Button  color="red" variant="ghost" size="sm">
                                        <MdDelete />DELETE
                                    </Button>
                                    <Button  colorScheme="gray" variant="ghost" size="sm">
                                        <MdEdit /> EDIT
                                    </Button>
                                </Flex>
                            </Flex>

                            <Flex gap='10px' direction='row'>
                                <Text color='gray.400'>Compañia: </Text><Span color='gray.500'>Empresa 4566</Span>
                                <Text color='gray.400'>Empresa: </Text><Span color='gray.500'>oliverburrito@gmail.com</Span>
                                <Text color='gray.400'>Proyecto: </Text><Span color='gray.500'>Aplicación Web</Span>
                            </Flex>

                            <Flex gap='10px' direction='row'>
                                <Text color='gray.600'>Toda la jornada la dedicaré a trabajar en la maquetación del proyecto para poder ...</Text>

                            </Flex>

                        </Flex>

                    </Flex>

                    <Flex justify='space-between' >
                        <Text>Agenda Equipo</Text>
                    </Flex>

                    <Flex justify='space-between' >
                        <Flex
                            bg="#4FD1C5"
                            color="white"
                            borderRadius="xl"
                            p={4}
                            w="180px"
                            boxShadow="md"
                            direction="column"
                        >
                            <Flex align="center" gap={3} mb={2}>
                                <Avatar.Root>
                                    <Avatar.Fallback name="Segun Adebayo" />
                                    <Avatar.Image src="https://bit.ly/sage-adebayo" />
                                </Avatar.Root>                                <Text fontWeight="bold" fontSize="sm" color="black">
                                    Trabajador 1
                                </Text>
                            </Flex>

                            <Text fontSize="lg" fontWeight="bold">
                                Maquetación
                            </Text>

                            <Text fontSize="xs" fontWeight="semibold">
                                EMPRESA 1234
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>




            </Flex>
        </>

    );
}
