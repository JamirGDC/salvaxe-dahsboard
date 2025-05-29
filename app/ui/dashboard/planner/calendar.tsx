'use client'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { Flex} from "@chakra-ui/react";

export default function Calendar() {
    return (
        <Flex
            p="2"
            borderRadius="lg"
            bg="white"
            color='gray.800'
            justify="center"
            align="center"
            w='100%'
            maxW='300px'
        >
            <DayPicker />
        </Flex>
    );
}
