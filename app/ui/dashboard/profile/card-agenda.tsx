'use client';

import {
    Box,
    Flex,
    Text,
    Button,
    Icon,
    HStack,
    Table,
} from '@chakra-ui/react';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const agenda = [
    {
        hora: 'Todo el día',
        empresa: 'Empresa 4566',
        titulo: 'Maquetación',
        descripcion: 'Toda la jornada la dedicaré a trabajar en la maquetación del proyecto para poder ...',
        editable: true,
        eliminable: false,
    },
    {
        hora: '10:30',
        empresa: 'Empresa 1234',
        titulo: 'Reunión',
        descripcion: 'Hablar sobre propuesta para el proyecto que tiene en mente...',
        editable: true,
        eliminable: false,
    },
    {
        hora: '17:30',
        empresa: '-',
        titulo: 'Ausencia',
        descripcion: 'Cita médica.',
        editable: true,
        eliminable: true,
    },
];

export default function AgendaCard() {
    return (
        <Box
            bg="white"
            borderRadius="2xl"
            boxShadow="md"
            p={6}
            w='100%'
            overflowX="none"
        >
            {/* Cabecera */}
            <Box mb={6}>
                <Text fontSize="sm" fontWeight="semibold" color="gray.400">
                    Mi Agenda
                </Text>
                <Flex justify="space-between" align="center">
                    <Text fontSize="2xl" fontWeight="bold">
                        Mi agenda hoy
                    </Text>
                </Flex>
            </Box>

            {/* Tabla moderna */}
            <Table.Root size="sm">
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeader textTransform="uppercase" color="gray.400">Hora</Table.ColumnHeader>
                        <Table.ColumnHeader textTransform="uppercase" color="gray.400">Empresa</Table.ColumnHeader>
                        <Table.ColumnHeader textTransform="uppercase" color="gray.400">Título</Table.ColumnHeader>
                        <Table.ColumnHeader textTransform="uppercase" color="gray.400">Descripción</Table.ColumnHeader>
                        <Table.ColumnHeader />
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {agenda.map((item, idx) => (
                        <Table.Row key={idx}>
                            <Table.Cell fontWeight="medium">{item.hora}</Table.Cell>
                            <Table.Cell fontWeight="bold">{item.empresa}</Table.Cell>
                            <Table.Cell fontWeight="bold">{item.titulo}</Table.Cell>
                            <Table.Cell whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" maxW="300px">
                                {item.descripcion}
                            </Table.Cell>
                            <Table.Cell>
                                <Flex justify="end" align="center">
                                    {item.eliminable && (
                                        <HStack gap={1} mr={2}>
                                            <Icon as={MdDelete } color="red.500" />
                                            <Text color="red.500" fontSize="sm" fontWeight="bold">
                                                DELETE
                                            </Text>
                                        </HStack>
                                    )}
                                    {item.editable && (
                                        <HStack gap={1}>
                                            <Icon as={MdEdit} boxSize={3} />
                                            <Text fontSize="sm" fontWeight="bold">
                                                EDIT
                                            </Text>
                                        </HStack>
                                    )}
                                </Flex>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>

            {/* Botones finales */}
            <Flex mt={8} justify="center" gap={4}>
                <Button variant="outline" colorScheme="gray">
                    Nueva entrada
                </Button>
                <Button bg="teal.400" color="white" _hover={{ bg: 'teal.500' }}>
                    Ir a agenda
                </Button>
            </Flex>
        </Box>
    );
}
