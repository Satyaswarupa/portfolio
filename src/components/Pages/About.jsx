import {  Center, Image, Text, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';

const About = () => {
  return (
   <>
   <Text textAlign={"center"} fontWeight={800} color={"purple"} fontSize={["20","30"]} mt={"10"}>
    ABOUT ME
   </Text>
    <Wrap spacing='30px' justify='center' maxW={"100%"} mt={15}  p={"2"} borderRadius={'50'} m={"5"}>
  <WrapItem>
    <Center w='180px' h='auto'>
      <Image src='https://imgs.search.brave.com/l9w20sn2nT0b6vgAwa_ItIVsVZ3r5kYCQnG56m010ns/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL3NvZnR3YXJl/LWRldmVsb3Blci1w/bmctLTMxNi5wbmc' h={"auto"} w={"auto"} />
    </Center>
  </WrapItem>
  <WrapItem>
    <Center textAlign={"center"} mt={["","20"]}>
    Passionate Full Stack Web Developer | MSc Computer Science Graduate Seeking Exciting Opportunities
    </Center>
  </WrapItem>
</Wrap>
   </>
  );
};

export default About;
