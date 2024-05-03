import { Box, Flex, Text, Link, Image, VStack, Heading } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      <Flex as="header" bgImage="url('/images/header-background.jpg')" bgSize="cover" bgPos="center" h="60vh" align="center" justify="center">
        <Heading size="2xl" color="white">John Doe</Heading>
      </Flex>
      <Flex as="nav" p={4} justifyContent="space-between" bg="gray.100" align="center">
        <Link p={2} href="#about">About</Link>
        <Link p={2} href="#portfolio">Portfolio</Link>
        <Link p={2} href="#contact">Contact</Link>
      </Flex>
      <VStack spacing={8} p={8} id="about">
        <Heading>About Me</Heading>
        <Text fontSize="lg">I am a professional web developer with a passion for creating beautiful and functional websites. With over 10 years of experience, I have a deep understanding of modern web technologies and design principles.</Text>
      </VStack>
      <VStack spacing={8} p={8} id="portfolio">
        <Heading>Portfolio</Heading>
        <Text fontSize="lg">Here are some of my recent projects.</Text>
        {/* Portfolio items would be dynamically loaded here */}
      </VStack>
      <VStack spacing={8} p={8} id="contact" align="center">
        <Heading>Contact Me</Heading>
        <Flex>
          <Link href="https://linkedin.com/in/johndoe" isExternal><FaLinkedin size="24px" /></Link>
          <Link href="https://github.com/johndoe" isExternal><FaGithub size="24px" /></Link>
          <Link href="mailto:johndoe@example.com"><FaEnvelope size="24px" /></Link>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Index;