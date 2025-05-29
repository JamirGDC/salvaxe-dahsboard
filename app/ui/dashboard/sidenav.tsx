import {Flex} from "@chakra-ui/react";
import Logo from "./logo";
import NavLinks from "./nav-links";


export default function SideNav() {
  return (
      <>
          <Flex justify='start' align='start' w='100%' h='100%' direction='column'>
              <Logo />
              <NavLinks />
          </Flex>
      </>

  );
}
