import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Spacer } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header */}
      <Box bg="gray.800" color="white" py={4}>
        <Container maxW="container.xl">
          <Flex align="center">
            <Heading as="h1" size="lg" letterSpacing={"tighter"}>
              Financial Times
            </Heading>
            <Spacer />
            <HStack spacing={8}>
              <Link href="#" color="white">Home</Link>
              <Link href="#" color="white">World</Link>
              <Link href="#" color="white">Business</Link>
              <Link href="#" color="white">Markets</Link>
              <Link href="#" color="white">Opinion</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} mt={8}>
        {/* Articles Section */}
        <Box flex="3" p={4}>
          <VStack spacing={8} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Sample Article 1</Heading>
              <Text mt={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Sample Article 2</Heading>
              <Text mt={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Sample Article 3</Heading>
              <Text mt={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" p={4} bg="gray.50">
          <VStack spacing={4} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="lg">Advertisement</Heading>
              <Text mt={4}>Place your ad here.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="lg">Additional Links</Heading>
              <VStack align="start" mt={4}>
                <Link href="#">Link 1</Link>
                <Link href="#">Link 2</Link>
                <Link href="#">Link 3</Link>
              </VStack>
            </Box>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={4} mt={8}>
        <Container maxW="container.xl">
          <Flex align="center" justify="space-between">
            <Text>&copy; 2023 Financial Times</Text>
            <HStack spacing={4}>
              <Link href="#" isExternal>
                <FaFacebook />
              </Link>
              <Link href="#" isExternal>
                <FaTwitter />
              </Link>
              <Link href="#" isExternal>
                <FaLinkedin />
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;