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
      <Heading as="h2">Birdiary is your daily bird diary</Heading>
      <VStack as="form" my="3rem" spacing="1rem">
        <FormControl>
          <FormLabel>Add a bird</FormLabel>
          <Input size="lg" />
        </FormControl>
        <Button size="lg" w="full">
          Add bird
        </Button>
      </VStack>
    </Box>
  );
}
