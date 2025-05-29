'use client';

import {
    Flex, Text, Icon, Spacer, HStack,
    Breadcrumb,
} from '@chakra-ui/react';

import { FaUser, FaCog, FaBell } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import React from 'react';

const translations: Record<string, string> = {
    dashboard: 'Dashboard',
    projects: 'Proyectos',
    clients: 'Clientes',
    planner: 'Agenda',
    team: 'Equipo',
    messages: 'Mensajes',
    profile: 'Perfil',
    settings: 'Ajustes',
    'admin-profile': 'Ajustes Perfil',
    'admin-planner': 'Ajustes Agenda',
    'admin-settings': 'Ajustes Proyecto',
    billing: 'Facturación',
    statistics: 'Estadísticas',
};

export default function TopHeader() {
    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter(Boolean);

    const breadcrumbItems = pathSegments.map(segment => translations[segment] || segment);

    const currentPage = breadcrumbItems[breadcrumbItems.length - 1] || 'Inicio';

    return (
        <Flex direction="column" mb='4' zIndex={10} p='20px'>
            <Flex w="100%" align="center">
                <Breadcrumb.Root>
                    <Breadcrumb.List>
                        {breadcrumbItems.map((segment, idx) => {
                            const isLast = idx === breadcrumbItems.length - 1;
                            return (
                                <React.Fragment key={`group-${idx}`}>
                                    <Breadcrumb.Item>
                                        <Breadcrumb.Link
                                            href="#"
                                            fontWeight="regular"
                                            color={isLast ? 'gray.700' : 'gray.400'}
                                        >
                                            {segment}
                                        </Breadcrumb.Link>
                                    </Breadcrumb.Item>

                                    {!isLast && (
                                        <Breadcrumb.Separator aria-hidden="true">/</Breadcrumb.Separator>
                                    )}
                                </React.Fragment>
                            );

                        })}
                    </Breadcrumb.List>
                </Breadcrumb.Root>


                <Spacer />

                <HStack gap='3'>

                    <Icon as={FaUser} boxSize={4} color="gray.500" />
                    <Icon as={FaCog} boxSize={4} color="gray.500" />
                    <Icon as={FaBell} boxSize={4} color="gray.500" />
                </HStack>
            </Flex>

            <Text fontSize="14px" fontWeight="bold" color="gray.700">
                {currentPage}
            </Text>
        </Flex>
    );
}
