import {Text, Flex, Image, Table} from "@chakra-ui/react";

export default function CardPlannerResume() {
    const items = [
        { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
        { id: 2, name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
        { id: 3, name: "Desk Chair", category: "Furniture", price: 150.0 },

    ]

    return (
        <>
            <Flex w='40%' bg='white' rounded="2xl" p='20px' direction='column'>

                <Flex justify='space-between' align='center' w='100%'>
                    <Text fontWeight='bold' fontSize='12px' color='#A0AEC0'>Trabajo y equipo</Text>
                    <Text fontWeight='bold' fontSize='10px' color='#2D3748'>Ir a agenda</Text>
                </Flex>

                <Flex justify='space-between' align='center' w='100%' h='100%' maxHeight='445px'>
                    <Flex direction='column' w='100%' h='100%' justify='space-between' gap='10px'>



                        <Flex justify='start' align='start' w='100%' h='100%' direction='column' gap='10px'>
                            <Text fontWeight='bold' fontSize='18px' color='#2D3748'>Resumen de agenda</Text>

                            <Table.Root size="sm">
                                <Table.Header>
                                    <Table.Row>
                                        <Table.ColumnHeader>Product</Table.ColumnHeader>
                                        <Table.ColumnHeader>Category</Table.ColumnHeader>
                                        <Table.ColumnHeader textAlign="end">Price</Table.ColumnHeader>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {items.map((item) => (
                                        <Table.Row key={item.id}>
                                            <Table.Cell>{item.name}</Table.Cell>
                                            <Table.Cell>{item.category}</Table.Cell>
                                            <Table.Cell textAlign="end">{item.price}</Table.Cell>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table.Root>

                        </Flex>

                        <Flex justify='space-between' align='center' w='100%'>
                            <Text fontWeight='bold' fontSize='18px' color='#2D3748'>Agenda de Equipo</Text>
                            <Text fontWeight='bold' fontSize='10px' color='#2D3748'>Ir a equipo</Text>
                        </Flex>

                        <Flex justify='start' align='end' w='100%' h='100%' direction='row' gap='10px'>
                            <Flex rounded='lg' bg='#EDF2F7' color='black' w='100%' h='100%' maxH='91px' p='10px' maxW='128px'  direction='column' gap='10px' justify='space-between' align='start'>
                                <Flex gap='10px' justify='start' align='center' w='100%' h='100%'>
                                    <Image src='../static/test.svg' alt='Planner' w='26px' h='26px' rounded="full"/>
                                    <Text fontWeight='bold' fontSize='12px' color='#2D3748'>Trabajador 1</Text>
                                </Flex>

                                <Flex direction='column' justify='start' align='start' w='100%' h='100%' >
                                    <Text fontWeight='bold' fontSize='15px' color='#2D3748'>Maquetación</Text>
                                    <Text fontWeight='bold' fontSize='10px' color='#2D3748'>EMPRESA 1234</Text>
                                </Flex>




                            </Flex>

                        </Flex>
                    </Flex>
                </Flex>









            </Flex>
        </>
    );
}
