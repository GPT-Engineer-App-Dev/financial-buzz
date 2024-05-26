import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Spacer } from "@chakra-ui/react";

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
            <HStack spacing={4}>
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
      <Flex direction={{ base: "column", md: "row" }} mt={4}>
        {/* Articles Section */}
        <Box flex="3" p={4}>
          <VStack spacing={8} align="stretch">
            <Box>
              <Heading as="h2" size="md">Sample Article 1</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
            <Box>
              <Heading as="h2" size="md">Sample Article 2</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
            <Box>
              <Heading as="h2" size="md">Sample Article 3</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" bg="gray.100" p={4}>
          <Heading as="h3" size="sm" mb={4}>Sidebar</Heading>
          <VStack spacing={4} align="stretch">
            <Link href="#">Additional Link 1</Link>
            <Link href="#">Additional Link 2</Link>
            <Link href="#">Additional Link 3</Link>
            <Link href="#">Additional Link 4</Link>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={4} mt={8}>
        <Container maxW="container.xl">
          <Flex direction={{ base: "column", md: "row" }} align="center">
            <Text>&copy; 2023 Financial Times</Text>
            <Spacer />
            <HStack spacing={4}>
              <Link href="#" color="white">Contact Us</Link>
              <Link href="#" color="white">Privacy Policy</Link>
              <Link href="#" color="white">Terms of Service</Link>
              <Link href="#" color="white">Facebook</Link>
              <Link href="#" color="white">Twitter</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;