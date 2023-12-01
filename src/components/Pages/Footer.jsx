import React from 'react';
import { Box, Center, Link, Text, HStack } from '@chakra-ui/react';
import {BsWhatsapp, BsInstagram,BsLinkedin } from "react-icons/bs"

const Footer = () => {
  return (
    <Box bg="blackAlpha.900" color={"white"} p={4} mt={"10"}>
      <Center>
        <HStack spacing={2}>
          <Text fontSize="lg">Connect with me:</Text>
          <Link href="https://wa.me/+917008671443" isExternal>
          <BsWhatsapp />
          </Link>
          <Link href="https://www.instagram.com/rabble_razz/" isExternal>
          <BsInstagram />
          </Link>
          <Link href="https://www.linkedin.com/in/satyaswarupa/" isExternal>
          <BsLinkedin />
          </Link>
        </HStack>
      </Center>
      <Center mt={4}>
        <Text fontSize="sm">&copy; 2023 Satyaswarupa parida All rights reserved.</Text>
      </Center>
    </Box>
  );
};

export default Footer;
