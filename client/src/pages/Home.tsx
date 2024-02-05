import {
  Box,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button
} from '@chakra-ui/react';

export default function Home() {
  return (
    <Box>
      <Heading as="h2" size="3xl" fontWeight={400}>
        Welcome to your daily bird diary!
      </Heading>
      <VStack as="form" my="3rem" spacing="1rem">
        <FormControl>
          <FormLabel>Add a bird</FormLabel>
          <Input size="lg" placeholder="Steller's sea eagle" />
        </FormControl>
        <Button size="lg" w="full">
          Submit
        </Button>
      </VStack>
      <VStack>
        <Heading as="h3">Recent birds</Heading>
      </VStack>
    </Box>
  );
}
