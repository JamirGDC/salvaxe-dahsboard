import {Flex, Image, Text} from "@chakra-ui/react";

export default function Logo() {
    return (
        <>
            <Flex gap='8px' justify='center' align='center' pb='50px' >
                <Image w='22px' h='28px' src="../static/logo.svg" alt="Dan Abramov" />
                <Text fontWeight='bold' fontSize='14px'>SALVAXE DASHBOARD</Text>
            </Flex>
        </>
    );
}
