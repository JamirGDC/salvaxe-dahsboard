"use client"

import {Button, Field, Flex, Heading, Input, Switch} from "@chakra-ui/react"
import {useRouter} from "next/navigation";

export function Login() {
  const router = useRouter();

  const handleSignIn = () => {
    router.push('/dashboard');
  };
  return (
      <Flex textAlign="center" overflow='hidden' w='100%' justifyContent='center' alignItems='center' fontSize="xl" pt="30vh">
        <Flex direction='column' w='100%' maxW='350px' h='100%' justifyContent='center' alignItems='start'>
          <Heading fontSize='32px' mb='10px'>
            Welcome Back
          </Heading>
          <Field.Root>
            <Field.Label>Email</Field.Label>
            <Input
                borderRadius='15px'
                mb='24px'
                fontSize='sm'
                type='text'
                placeholder='Your email adress'
                size='lg'
            />
          </Field.Root>
          <Field.Root>
            <Field.Label>Password</Field.Label>
            <Input
                borderRadius='15px'
                mb='24px'
                fontSize='sm'
                type='password'
                placeholder='Your password'
                size='lg'
            />
          </Field.Root>

          <Switch.Root>
            <Switch.HiddenInput />
            <Switch.Control />
            <Switch.Label>Remember me</Switch.Label>
          </Switch.Root>

          <Button
              onClick={handleSignIn}
              fontSize='10px'
              type='submit'
              borderRadius='15px'
              bg='teal.300'
              w='100%'
              h='45'
              mb='20px'
              color='white'
              mt='20px'
              _hover={{
                bg: "teal.200",
              }}
              _active={{
                bg: "teal.400",
              }}>
            SIGN IN
          </Button>
        </Flex>

      </Flex>
  )
}
