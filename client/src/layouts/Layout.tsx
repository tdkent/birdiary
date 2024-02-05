import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <Box w="100%">
      <Box minH="calc(100vh - 100px)" border="1px">
        <Flex as="header" border="1px" justify="space-between">
          <Heading
            as="h1"
            fontSize={{ base: '24px', md: '40px', lg: '56px', xl: '64px' }}>
            Birdiary
          </Heading>
        </Flex>
        <Box as="main" maxW="container.xl" mx="auto" p="2rem 1rem">
          <Outlet />
        </Box>
      </Box>
      <Box as="footer" h="100px" border="1px">
        <Text>&copy; 2024 Birdiary</Text>
      </Box>
    </Box>
  );
}
