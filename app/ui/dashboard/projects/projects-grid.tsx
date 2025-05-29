'use client';

import {
    Box,
    Flex,
    Text,
    Image,
    Button,
    AvatarGroup,
    Avatar,
    SimpleGrid,
    Menu,

} from '@chakra-ui/react';
import {Portal} from "@zag-js/react";

const projects = [
    {
        id: 1,
        title: 'Modern',
        description:
            'As Uber works through a huge amount of internal management turmoil.',
        image:
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        users: [
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg',
            'https://randomuser.me/api/portraits/women/3.jpg',
            'https://randomuser.me/api/portraits/men/4.jpg',
        ],
    },
    {
        id: 2,
        title: 'Scandinavian',
        description:
            'Music is something that every person has his or her own specific opinion about.',
        image:
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        users: [
            'https://randomuser.me/api/portraits/women/5.jpg',
            'https://randomuser.me/api/portraits/men/6.jpg',
            'https://randomuser.me/api/portraits/women/7.jpg',
        ],
    },
    {
        id: 3,
        title: 'Minimalist',
        description:
            'Different people have different taste, and various types of music.',
        image:
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        users: [
            'https://randomuser.me/api/portraits/men/8.jpg',
            'https://randomuser.me/api/portraits/women/9.jpg',
            'https://randomuser.me/api/portraits/men/10.jpg',
        ],
    },
    {
        id: 4,
        title: 'Minimalist',
        description:
            'Different people have different taste, and various types of music.',
        image:
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        users: [
            'https://randomuser.me/api/portraits/women/11.jpg',
            'https://randomuser.me/api/portraits/men/12.jpg',
        ],
    },
];

export default function ProjectsGrid() {
    return (
        <Box bg="white" borderRadius="2xl" boxShadow="md" p={6}>
            {/* Encabezado */}
            <Flex justify="space-between" align="center" mb={6}>
                <Text fontSize="xl" fontWeight="bold">
                    Mis proyectos
                </Text>
                <Menu.Root>
                    <Menu.Trigger asChild>
                        <Button variant="outline" size="sm">
                            Filtrar proyectos
                        </Button>
                    </Menu.Trigger>
                    <Portal>
                        <Menu.Positioner>
                            <Menu.Content>
                                <Menu.Item value="new-txt">New Text File</Menu.Item>
                                <Menu.Item value="new-file">New File...</Menu.Item>
                                <Menu.Item value="new-win">New Window</Menu.Item>
                                <Menu.Item value="open-file">Open File...</Menu.Item>
                                <Menu.Item value="export">Export</Menu.Item>
                            </Menu.Content>
                        </Menu.Positioner>
                    </Portal>
                </Menu.Root>
            </Flex>

            {/* Tarjetas */}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={6}>
                {projects.map((project, idx) => (
                    <Box key={idx}>
                        <Box
                            borderRadius="xl"
                            overflow="hidden"
                            mb={3}
                            h="191px"
                            bg="gray.100"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                objectFit="cover"
                                w="100%"
                                h="100%"
                            />
                        </Box>
                        <Text fontSize="xs" color="gray.400" mb={1}>
                            Project #{project.id}
                        </Text>
                        <Text fontSize="lg" fontWeight="bold" mb={1}>
                            {project.title}
                        </Text>
                        <Text fontSize="sm" color="gray.500" lineClamp={2} mb={3}>
                            {project.description}
                        </Text>
                        <Flex justify="space-between" align="center">
                            <Button
                                size="sm"
                                variant="outline"
                                borderRadius="full"
                                colorScheme="teal"
                            >
                                VIEW ALL
                            </Button>
                            <AvatarGroup size="sm">
                                {project.users.map((user, i) => (
                                    <Avatar.Root key={i}>
                                        <Avatar.Fallback />
                                        <Avatar.Image src={user} />
                                    </Avatar.Root>
                                ))}
                            </AvatarGroup>
                        </Flex>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
}
