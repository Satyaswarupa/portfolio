import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  useToast,
  Container,
  Center,
  Text,
} from '@chakra-ui/react';
import {BsWhatsapp, BsInstagram, BsGithub} from "react-icons/bs"
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase.js';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const toast = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Save data to Firestore collection named 'contactForms'
      await addDoc(collection(db, 'contactForms'), formData);

      toast({
        title: 'Form submitted!',
        description: 'We will get in touch with you soon.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);

      toast({
        title: 'Error',
        description: 'Failed to submit the form. Please try again later.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW="lg" mt={10} id='contact' >
       <Text textAlign={"center"} fontWeight={"800"} color={"purple"} fontSize={["20","30"]} mt={"10"}>Contact me</Text>
    <Box p={4} borderWidth="1px" borderRadius="lg" >
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required="true"
            />
          </FormControl>

          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required="true"
            />
          </FormControl>

          <FormControl id="message">
            <FormLabel>Message</FormLabel>
            <Textarea
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required="true"
            />
          </FormControl>
          <Button type="submit" colorScheme="teal">
            Submit
          </Button>
        </VStack>
      </form>
      <Center gap={"10"} fontSize={["20","30"]} mt={"5"} color={"purple"}>
        <a href="https://wa.me/+917008671443"><BsWhatsapp /></a>
        <a href="https://www.instagram.com/rabble_razz/"><BsInstagram /></a>
        <a href="https://github.com/Satyaswarupa">
            <BsGithub className="social" />
          </a>
    </Center>
    </Box>
    </Container>
  );
};

export default Contact;

