import {Flex, Icon, Text} from "@chakra-ui/react";
import {HiHeart} from "react-icons/hi";

export default function CardResume() {
    return (
        <>
            <Flex justify='space-between' align='center' w='100%' h='80px' bg='white' rounded="2xl" p='20px' >
               <Flex direction='column' gap='10px'>
                   <Text color='#A0AEC0' fontSize='12px' fontWeight='bold'>Ganancias Mayo</Text>
                   <Text color='#2D3748' fontSize='18px' fontWeight='bold'>$53,000 <span style={{color: '#48BB78', fontSize: '14px'}}>+55%</span></Text>
               </Flex>
                <Flex
                    w="45px"
                    h="45px"
                    rounded="xl"
                    bg='#ADD4CC'
                    justify="center"
                    align="center"

                >
                    <Icon size="lg" color="white">
                        <HiHeart />
                    </Icon>
                </Flex>
            </Flex>
        </>
    );
}
