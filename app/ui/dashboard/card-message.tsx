import {Badge, Button, Text, Flex, Image, Span} from "@chakra-ui/react";

export default function CardMessage() {
    return (
        <>
            <Flex w='40%' bg='white' rounded="2xl" p='20px' direction='column'>

                <Flex justify='space-between' align='center' w='100%'>
                    <Text fontWeight='bold' fontSize='12px' color='#A0AEC0'>Reuniones para hoy</Text>
                    <Text fontWeight='bold' fontSize='10px' color='#2D3748'>Ir a reuniones</Text>
                </Flex>

                <Flex justify='space-between' align='center' w='100%' h='100%' maxHeight='290px' p='10px'>
                    <Flex direction='column' w='100%' h='100%' justify='space-between' gap='10px'>

                        <Flex direction='row' align='start' w='100%' justify='start' gap='10px'>
                            <Image src='../static/test.svg' alt='Planner' w='40px' h='40px' rounded="xl"/>
                            <Flex direction='column' >
                                <Text fontWeight='bold' fontSize='14px' color='#2D3748'>Laura Pérez <Span fontWeight='bold' fontSize='10px' color='#A0AEC0' > EMPRESA 1234</Span></Text>
                                <Text fontWeight='regular' fontSize='14px' color='#718096'>laura@laura.com</Text>
                                <Text fontWeight='bold' fontSize='10px' color='#38B2AC'>Quedan 2h para la reunión</Text>
                            </Flex>
                        </Flex>

                        <Flex gap='10px' justify='start' align='center'>
                            <Badge bg='#FF4A74' color='white'>videollamada</Badge>
                            <Badge bg='#FF8E7A' color='white'>crerrarproyecto</Badge>

                        </Flex>
                        <Flex justify='start' align='start' w='100%' h='100%' direction='column' gap='10px'>
                            <Text fontWeight='bold' fontSize='18px' color='#2D3748'>Reunión con Empresa 1234</Text>
                            <Text fontWeight='regular' fontSize='12px' color='#2D3748'>Hablar sobre propuesta para el proyecto que tiene en mente.
                                Presentar acuerdo económico y plazos de entrega.</Text>
                        </Flex>
                        <Flex justify='start' align='end' w='100%' h='100%' direction='row' gap='10px'>
                            <Button rounded='lg' h='32px' bg='#EDF2F7' color='black'>Enviar Mail</Button>
                            <Button rounded='lg' h='32px' bg='#38B2AC'>Ir a Reunión</Button>
                            <Button rounded='lg' h='32px'>Shared</Button>
                        </Flex>
                    </Flex>
                    {/*<Flex justify='center' align='center' w='100%' h='100%'>*/}
                    {/*    <Image src='../static/test.svg' alt='Planner' w='427px' h='100%' rounded="3xl"/>*/}
                    {/*</Flex>*/}

                </Flex>









            </Flex>
        </>
    );
}
