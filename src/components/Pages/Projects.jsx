import React from 'react';
import { Box, Image, Text, VStack, Link as ChakraLink, SimpleGrid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    name: 'Project 1',
    image: 'https://i.ibb.co/x3BVvvL/Screenshot-38.png',
    description: 'Description of Project 1.',
    link: 'https://eventopiaa.vercel.app/',
  },
  {
    id: 2,
    name: 'Project 2',
    image: 'https://i.ibb.co/1fwt7pD/Screenshot-14.png',
    description: 'Description of Project 2.',
    link: 'https://calori-react-frontend.vercel.app/login',
  },
  {
    id: 3,
    name: 'Project 2',
    image: 'https://i.ibb.co/tsjBr0m/Screenshot-13.png',
    description: 'Description of Project 2.',
    link: 'https://arphysics.netlify.app/',
  },
  {
    id: 4,
    name: 'Project 2',
    image: 'https://i.ibb.co/pdxX3NS/Screenshot-12.png',
    description: 'Description of Project 2.',
    link: 'https://satyaswarupa.github.io/crypto-react/',
  },
];

const ProjectCard = ({ project }) => (
  <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer">
    <VStack spacing={4} p={4} borderWidth="1px" borderRadius="lg" textAlign="center">
      <Image src={project.image} alt={project.name} maxH="200px" maxW="300px" borderRadius="lg" />
      <Text fontSize="lg" fontWeight="bold">
        {project.name}
      </Text>
      <Text>{project.description}</Text>
      <ChakraLink color="teal.500" fontWeight="bold">
        View Project
      </ChakraLink>
    </VStack>
  </a>
);

const Projects = () => {
  return (
    <>
      <Text fontWeight="800" textAlign="center" color="purple" fontSize={["20", "30"]} mt="10">
        PROJECTS
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={8} mt={10} px={4} boxShadow='lg'>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Projects;
