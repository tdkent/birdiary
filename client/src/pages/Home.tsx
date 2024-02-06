// Imports
import { useState } from 'react';
import {
  Box,
  Stack,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Card,
  CardHeader,
  CardBody,
  Divider,
  Text,
  Flex,
  Badge
} from '@chakra-ui/react';

const dummydata = [
  {
    id: 1,
    name: "Steller's sea eagle",
    date: '12/04/24',
    isNew: true
  },
  {
    id: 2,
    name: 'Blue jay',
    date: '12/04/24',
    isNew: false
  },
  { id: 3, name: 'American coot', date: '12/02/24', isNew: false },
  { id: 4, name: 'Brown pelican', date: '12/01/24', isNew: true }
];

export default function Home() {
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUserInput(e.currentTarget.value);
  };

  return (
    <Box>
      <Heading as="h2" size="3xl" variant="splash">
        Welcome to your daily bird diary!
      </Heading>
      <VStack as="form" mt="3rem" spacing="1rem">
        <FormControl>
          <FormLabel>Add a bird</FormLabel>
          <Input size="lg" value={userInput} onChange={handleInputChange} />
        </FormControl>
        <Button size="lg" w="full">
          Add bird
        </Button>
      </VStack>
      <Card variant="unstyled" mt="3rem">
        <CardHeader>
          <Heading as="h3" size="md">
            Recent birds
          </Heading>
        </CardHeader>
        <CardBody mt="2rem">
          <Stack divider={<Divider />} spacing={4}>
            {dummydata.map((bird) => {
              return (
                <Flex key={bird.id} flexDirection="column" gap={2}>
                  <Heading as="h6" size="sm">
                    {bird.name}
                  </Heading>
                  <Text fontSize="sm">
                    {bird.date}
                    {bird.isNew ? (
                      <Badge ml={4} colorScheme="green">
                        New
                      </Badge>
                    ) : null}
                  </Text>
                </Flex>
              );
            })}
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}
