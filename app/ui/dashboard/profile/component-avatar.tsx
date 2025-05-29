'use client';

import {
    Avatar,
    AvatarGroup,
    Box,
} from '@chakra-ui/react';

const users = [
    {
        name: 'User 1',
        src: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
        name: 'User 2',
        src: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
        name: 'User 3',
        src: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    {
        name: 'User 4',
        src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
];

export default function AvatarList() {
    return (
        <Box>
            <AvatarGroup size="sm">
                {users.map((user, index) => (
                    <Avatar.Root key={index}>
                        <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
                        <Avatar.Image src={user.src} alt={user.name} />
                    </Avatar.Root>
                ))}
            </AvatarGroup>
        </Box>
    );
}
