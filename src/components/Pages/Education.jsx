import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text,
  } from '@chakra-ui/react'

const Education = () => {
  return (
    <>
    <Text textAlign={"center"} fontWeight={"800"} color={"purple"} fontSize={["20","30"]} mt={"10"}>EDUCATION</Text>
    <Accordion defaultIndex={[0]} allowMultiple p={["30","50"]}>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Board of Seconday Education
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    "I successfully completed my 10th grade at Zilla High School Bhadrak, achieving a passing mark of 56%. This accomplishment reflects my dedication to learning and sets the foundation for future academic success. I'm proud of the knowledge gained during this journey and excited about the educational opportunities that lie ahead."
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Council of Higher Secondary Education
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    "I proudly completed my +2 Science at Vinayak College of Science and Commerce, achieving a passing mark of 50%. This educational milestone marks a crucial step in my academic journey, emphasizing my commitment to learning and growth. I look forward to leveraging the knowledge gained as I pursue future endeavors and educational opportunities."
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        BCA
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    "I am a BCA graduate from Bhadrak Autonomous College with a notable achievement of 64%. This academic milestone underscores my commitment to excellence in the field of Computer Applications. The knowledge and skills acquired during my BCA journey serve as a strong foundation for my ongoing pursuit of success in the professional realm."
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        MSC Computer Science
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    "I am proud to have completed my MCS in Computer Science from Bhadrak Autonomous College, achieving a notable 81%. This academic achievement reflects my dedication to mastering the intricacies of computer science and sets the stage for continued success in the dynamic field of technology."
    </AccordionPanel>
  </AccordionItem>
</Accordion>
</>
  )
}

export default Education