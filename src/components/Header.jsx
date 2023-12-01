import { Button, HStack, Heading, Image, useColorMode } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack h={'16'} bg={'blackAlpha.800'} justifyContent={"space-evenly"}>
        <Image src='https://i.ibb.co/YZV0tbV/IMG-20231201-115218.jpg' h={'50'} w={'50'} borderRadius={'100'} />
        <Heading children='Satyaswarupa' color='white'  fontSize={'17'} textTransform={"uppercase"} />
        <Button onClick={toggleColorMode} size='xs'>
        {colorMode === 'light' ? 'Dark' : 'Light'} Mode
      </Button>
    </HStack>
  )
}

export default Header