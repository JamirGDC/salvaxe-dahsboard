'use client'
import {Text, Flex, VStack, Box, Button} from "@chakra-ui/react";
import {FaBoxOpen, FaCreditCard, FaShoppingCart} from "react-icons/fa";
import { SiVuedotjs } from "react-icons/si";
import {BellIcon} from "@heroicons/react/16/solid";

export default function CardExpenses() {
    const events = [
        {
            icon: BellIcon,
            title: "$2400, Design changes",
            date: "22 DEC 7:20 PM",
            color: "teal.400",
        },
        {
            icon: SiVuedotjs,
            title: "New order #4219423",
            date: "21 DEC 11:21 PM",
            color: "red.400",
        },
        {
            icon: FaShoppingCart,
            title: "Server Payments for April",
            date: "21 DEC 9:28 PM",
            color: "blue.400",
        },
        {
            icon: FaCreditCard,
            title: "New card added for order #3210145",
            date: "20 DEC 3:52 PM",
            color: "orange.400",
        },
        {
            icon: FaBoxOpen,
            title: "Unlock packages for Development",
            date: "19 DEC 11:35 PM",
            color: "purple.400",
        },
    ];

    return (
        <Flex w='30%'>
            <Flex bg="white" p={6} borderRadius="2xl" w="100%" direction="column" h="100%" justify="space-between"  >

                <Flex direction='column'>
                    <Text fontWeight="bold" fontSize="lg" mb={1}>Resumen de gastos</Text>
                    <Text fontSize="sm" color="green.400" mb={4}>+30% this month</Text>
                </Flex>


                <VStack align="stretch" position="relative" gap={5}>
                    {events.map((event, idx) => (
                        <Flex key={idx} align="start" gap={4} position="relative">
                            <Box position="relative" pt="1">
                                <Box
                                    as={event.icon}
                                    boxSize={5}
                                    color={event.color}
                                    zIndex={1}
                                    bg="white"
                                />
                                {idx < events.length - 1 && (
                                    <Box
                                        position="absolute"
                                        top="24px"
                                        left="50%"
                                        transform="translateX(-50%)"
                                        w="2px"
                                        h="calc(100% - 24px)"
                                        bg="gray.200"
                                        zIndex={0}
                                    />
                                )}
                            </Box>
                            <Box>
                                <Text fontWeight="bold" fontSize="sm">{event.title}</Text>
                                <Text fontSize="xs" color="gray.400">{event.date}</Text>
                            </Box>
                        </Flex>
                    ))}
                </VStack>

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
                    IR A GASTOS
                </Button>
            </Flex>
        </Flex>



    );
}
