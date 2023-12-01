import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import About from "./About";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

const Home = () => {
  return (
   <> 
   <Box
   display={"flex"}
   justifyContent={"center"}
  mt={15}
  p={5}
   borderRadius={"50"}
 >
   <Box position={"relative"}>
     <Image
       src="https://wallpapers.com/images/high/blue-mountain-bh1a22x5nfa62xpn.webp"
       borderRadius={"10"}
       opacity={"0.54"}
       h={["80","auto"]}
     />
     <Text color={'blackAlpha.800'} fontSize={['20','40']} position="absolute" top="26%" left="40%" transform="translate(-50%, -50%)" fontWeight={'700'}>
       Hy, I Am Satyaswarupa Parida
     </Text>
     <Text color={'blackAlpha.700'} fontSize={['10','20']} position="absolute" top={["52%","50%"]} left={["40%","40%"]} transform="translate(-50%, -50%)" fontWeight={'700'}>
     A MERN Developer || A Designer || A Frontend Developer
     </Text>
    <Stack> 
     <a href="#contact"><Button colorScheme="purple" variant='outline' size={['xs','md']} position="absolute" top={["75%","65%"]} left={["31%","17%"]} transform="translate(-50%, -50%)"  >Contact me</Button></a>

     <a href="mailto:satyaswarupaparida130@gmail.com">
      <Button colorScheme="purple" variant='link' size={['xs','md']} position="absolute" top={["75%","65%"]}  left={["55%","30%"]} transform="translate(-50%, -50%)" >Hire me</Button>
      </a>

    </Stack>
   </Box>
 </Box>

 <About />
 <Education />
 <Skills />
 <Projects />
 <Contact />
 </>
  );
};

export default Home;
