import { Box, Flex, Text } from "@chakra-ui/react";

export default function InfoCard() {
    return (
        <Box
            bg="white"
            borderRadius="xl"
            p="6"
            w='100%'
            mx="auto"
        >
            <Text fontSize="xl" fontWeight="bold" mb="2">
                Información sobre mí
            </Text>

            <Text fontSize="sm" color="gray.500" mb="4">
                Hola soy Jamir, peruano de profesión. Me gusta que me peguen y
                conectarme el router directamente con el cable. Me encanta tener amigos
                drogadictos, timadores y sudacas, eso hace que mi reputación aumente en
                los juzgados. Conozco a toda la justicia, tengo contactos.
            </Text>

            <Box borderTop="1px solid" borderColor="gray.200" pt="4">
                <Flex mb="2">
                    <Text fontWeight="bold" w="140px">
                        Full Name:
                    </Text>
                    <Text>Jamir Eduardo Dash Gutiérrez</Text>
                </Flex>

                <Flex mb="2">
                    <Text fontWeight="bold" w="140px">
                        Móvil empresa:
                    </Text>
                    <Text>(44) 123 1234 123</Text>
                </Flex>

                <Flex mb="2">
                    <Text fontWeight="bold" w="140px">
                        Email empresa:
                    </Text>
                    <Text>alecthompson@mail.com</Text>
                </Flex>

                <Flex mb="2">
                    <Text fontWeight="bold" w="140px">
                        Location:
                    </Text>
                    <Text>Ribeira</Text>
                </Flex>

                <Flex>
                    <Text fontWeight="bold" w="140px">
                        Cumpleaños:
                    </Text>
                    <Text>15 - 05</Text>
                </Flex>
            </Box>
        </Box>
    );
}
