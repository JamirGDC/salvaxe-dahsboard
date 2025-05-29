'use client';

import { UserGroupIcon } from "@heroicons/react/16/solid";
import { Flex, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import NavItem from "./nav-item";

export default function NavLinks() {
    const pathname = usePathname();

    const links = [
        { name: 'Dashboard', href: '/dashboard', icon: UserGroupIcon },
        { name: 'Proyectos', href: '/dashboard/projects', icon: UserGroupIcon },
        { name: 'Clientes', href: '/dashboard/clients', icon: UserGroupIcon },
        { name: 'Agenda', href: '/dashboard/planner', icon: UserGroupIcon },
        { name: 'Equipo', href: '/dashboard/team', icon: UserGroupIcon },
        { name: 'Mensajes', href: '/dashboard/messages', icon: UserGroupIcon },
        { name: 'Perfil', href: '/dashboard/profile', icon: UserGroupIcon },
        { name: 'Ajustes', href: '/dashboard/settings', icon: UserGroupIcon },
    ];

    const linksAdmin = [
        { name: 'Ajustes Perfil', href: '/dashboard/admin-profile', icon: UserGroupIcon },
        { name: 'Ajustes Agenda', href: '/dashboard/admin-planner', icon: UserGroupIcon },
        { name: 'Ajustes Proyecto', href: '/dashboard/admin-settings', icon: UserGroupIcon },
        { name: 'Facturación', href: '/dashboard/billing', icon: UserGroupIcon },
        { name: 'Estadísticas', href: '/dashboard/statistics', icon: UserGroupIcon },
    ];

    return (
        <Flex direction="column" w="100%" h="100%">
            {links.map((link) => (
                <NavItem key={link.name} link={link} pathname={pathname} />
            ))}

            <Text mt='40px' mb='40px' fontWeight="bold" pl='3'>
                Administration
            </Text>

            {linksAdmin.map((link) => (
                <NavItem key={link.name} link={link} pathname={pathname} />
            ))}
        </Flex>
    );
}
