'use client';

import {Flex, Icon, Link, Text} from "@chakra-ui/react";

export default function NavItem({ link, pathname }: { link: any; pathname: string }) {

    const LinkIcon = link.icon;
    const isActive = pathname === link.href;


    return (
        <Link w="100%" key={link.name} href={link.href}>
            <Flex
                w="100%"
                h="54px"
                bg={isActive ? 'white' : 'transparent'}
                rounded="2xl"
                p="16px"
                align="center"
                justify="start"
                _hover={{ bg: 'white' }}
                transition="background-color 0.2s"
            >
                <Flex
                    w="30px"
                    h="30px"
                    rounded="xl"
                    bg={isActive ? '#51BCB6' : 'white'}
                    justify="center"
                    align="center"
                    mr="16px"
                >
                    <Icon as={LinkIcon} w={5} h={5} color={isActive ? 'white' : '#51BCB6'} />
                </Flex>
                <Text>{link.name}</Text>
            </Flex>
        </Link>
    );
}
