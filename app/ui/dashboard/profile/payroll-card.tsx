'use client';

import {
    Box,
    Flex,
    Text,
    VStack,
    Icon,
    HStack,
} from '@chakra-ui/react';
import {
    FaAtlassian,
    FaSlack,
    FaSpotify,
    FaTrello,
    FaDownload,
    FaChevronDown
} from 'react-icons/fa';

const payrolls = [
    { name: 'Nómina junio', icon: FaAtlassian },
    { name: 'Nómina mayo', icon: FaAtlassian },
    { name: 'Nómina abril', icon: FaSlack },
    { name: 'Nómina marzo', icon: FaSpotify },
    { name: 'Nómina febrero', icon: FaTrello },
];

export default function PayrollCard() {
    return (
        <Box
            bg="whiteAlpha.900"
            borderRadius="2xl"
            p={4}
            w='100%'
            mx="auto"
        >
            <Flex justify="space-between" align="start" mb={4}>
                <Box>
                    <Text fontSize="xs" color="gray.400">
                        Documentación
                    </Text>
                    <Text fontSize="lg" fontWeight="bold">
                        Nóminas
                    </Text>
                </Box>
                <HStack gap={1} align="center">
                    <Text fontSize="sm" fontWeight="medium">
                        Nóminas
                    </Text>
                    <FaChevronDown />
                </HStack>
            </Flex>

            <VStack gap={0} align="stretch" maxH="250px" overflowY="auto">
                {payrolls.map(({ name, icon: IconComponent }, idx) => (
                    <Box key={idx}>
                        <Flex align="center" py={3} px={2}>
                            <Icon as={IconComponent} boxSize={5} mr={3} />
                            <Text fontSize="sm" flex="1">
                                {name}
                            </Text>
                            <Icon size="sm" color="pink.700">
                                <FaDownload />
                            </Icon>
                        </Flex>
                        {idx < payrolls.length - 1 && (
                            <Box borderBottom="1px solid" borderColor="gray.200" />
                        )}
                    </Box>
                ))}
            </VStack>
        </Box>
    );
}
