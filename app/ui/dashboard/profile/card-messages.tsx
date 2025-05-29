'use client';

import {
    Box,
    Flex,
    Text,
    VStack,
    HStack,
    Link as ChakraLink,
    Avatar,
} from '@chakra-ui/react';

const messages = [
    {
        name: 'Esthera Jackson',
        message: 'Hi! I need more informations...',
        avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
        name: 'Esthera Jackson',
        message: 'Awesome work, can you change...',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
        name: 'Esthera Jackson',
        message: 'Have a great afternoon...',
        avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    {
        name: 'Esthera Jackson',
        message: 'About files I can...',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
];

export default function CardMessages() {
    return (
        <Box
            bg="whiteAlpha.900"
            borderRadius="2xl"
            boxShadow="lg"
            p={4}
            w='100%'
            maxW="33%"
            mx="auto"
        >
            <Flex justify="space-between" align="center" mb={4}>
                <Text fontSize="lg" fontWeight="bold">
                    Mensajes internos
                </Text>
                <ChakraLink fontSize="sm" fontWeight="semibold" color="black" display="flex" alignItems="center">
                    Ir a mensajes
                </ChakraLink>
            </Flex>

            <VStack gap={4} align="stretch">
                {messages.map((msg, idx) => (
                    <Flex key={idx} align="center" justify="space-between">
                        <HStack gap={3}>
                            <Avatar.Root shape="rounded" size="sm">
                                <Avatar.Fallback name={msg.name} />
                                <Avatar.Image src={msg.avatar} />
                            </Avatar.Root>

                            <Box>
                                <Text fontWeight="bold" fontSize="sm">
                                    {msg.name}
                                </Text>
                                <Text fontSize="sm" color="gray.500" lineClamp={1}>
                                    {msg.message}
                                </Text>
                            </Box>
                        </HStack>
                        <Text fontSize="xs" fontWeight="bold" color="teal.500">
                            REPLY
                        </Text>
                    </Flex>
                ))}
            </VStack>
        </Box>
    );
}
