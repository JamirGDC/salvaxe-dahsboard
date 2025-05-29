import SideNav from "../ui/dashboard/sidenav";
import { Flex } from "@chakra-ui/react";
import TopHeader from "../ui/dashboard/top-header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Flex h="100vh" w="100vw" overflow="hidden">
            <Flex
                w="270px"
                h="100vh"
                p="25px"
                bg="#C6E6E0"
                position="fixed"
                top="0"
                left="0"
                zIndex="1"
                direction="column"
            >
                <SideNav />
            </Flex>

            <Flex
                ml="270px"
                flex="1"
                h="100vh"
                p="25px"
                overflowY="auto"
                bg="#F1F8F6"
                direction="column"
            >
                <TopHeader />
                {children}
            </Flex>
        </Flex>
    );
}
