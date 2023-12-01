// Skills.js
import React from 'react';
import { Box, Center, Container, Text, VStack } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const skillsData = [
  'JavaScript',
  'React.js',
  'Node.js',
  'HTML',
  'CSS',
  'Chakra UI',
  'MongoDB',
  'Express.js',
  'Git',
  // Add more skills as needed
];

const Skills = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4, // Number of slides to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Time between slides in milliseconds
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
   <Container maxW='2xl'>
   <Text fontWeight={"800"} textAlign={"center"} color={"purple"} fontSize={["20","30"]} mt={"10"}>Skills</Text>
    <Box mt={10} px={4}>
      <Slider {...settings}>
        {skillsData.map((skill, index) => (
          <Center key={index}>
            <VStack
              p={10}
              borderRadius="lg"
              borderWidth="1px"
              boxShadow="md"
              transition="transform 0.2s"
              _hover={{ transform: 'scale(1.05)' }}
            >
              <Text fontWeight="bold">{skill}</Text>
            </VStack>
          </Center>
        ))}
      </Slider>
    </Box>
    </Container>
  );
};

export default Skills;
