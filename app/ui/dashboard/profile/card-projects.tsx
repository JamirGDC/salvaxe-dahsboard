'use client';

import {
    Box,
    Flex,
    Text,
    Image,
    Button,
    HStack,
    Circle,
} from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import AvatarList from "./component-avatar";

export default function ActiveProjectsCard() {
    return (
        <Box
            bg="white"
            borderRadius="2xl"
            boxShadow="md"
            p={6}
            w='100%'
            mx="auto"
        >
            {/* Encabezado */}
            <Flex justify="space-between" align="start" mb={4}>
                <Box>
                    <Text fontSize="xs" fontWeight="semibold" color="gray.400">
                        Mis proyectos
                    </Text>
                    <Text fontSize="xl" fontWeight="bold">
                        Proyectos activos
                    </Text>
                </Box>
                <HStack gap={1}>
                    <Text fontSize="sm" fontWeight="semibold">
                        Ir a proyectos
                    </Text>
                    <FaArrowRight size={12} />
                </HStack>
            </Flex>

            {/* Imagen del proyecto */}
            <Box
                rounded="xl"
                overflow="hidden"
                mb={4}
                w="100%"
                h="180px"
                bg="gray.100"
            >
                <Image
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                    alt="Proyecto"
                    objectFit="cover"
                    w="100%"
                    h="100%"
                />
            </Box>

            {/* Detalles del proyecto */}
            <Box mb={4}>
                <Text fontSize="xs" fontWeight="semibold" color="gray.400">
                    EMPRESA 1234
                </Text>
                <Text fontSize="lg" fontWeight="bold" mb={1}>
                    Redes sociales
                </Text>
                <Text fontSize="sm" color="gray.500" lineClamp={2}>
                    As Uber works through a huge amount of internal management turmoil.
                </Text>
            </Box>

            <Flex justify="space-between" align="center">
                <Button
                    size="sm"
                    borderRadius="full"
                    bg="teal.400"
                    color="white"
                    px={5}
                    _hover={{ bg: 'teal.500' }}
                >
                    VIEW ALL
                </Button>

                {/* Grupo de Avatares */}
                <AvatarList/>
            </Flex>

            {/* Paginación de slides */}
            <Flex justify="center" mt={4} gap={2}>
                {[0, 1, 2, 3].map((_, i) => (
                    <Circle
                        key={i}
                        size="8px"
                        bg={i === 0 ? 'gray.800' : 'gray.300'}
                    />
                ))}
            </Flex>
        </Box>
    );
}
