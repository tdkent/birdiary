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
  Divider
  // Text,
  // Flex,
  // Badge
} from '@chakra-ui/react';
// Internal Imports
import { trpc } from '../trpc';

export default function Home() {
  const { data, isLoading, refetch } = trpc.diary.getRecentBirds.useQuery();
  console.log('🚀 ~ Home ~ data:', data);
  // State
  const [userInput, setUserInput] = useState('');
  // const [name, setName] = useState('');

  // const mutation = trpc.user.createUser.useMutation({
  //   onSuccess: () => refetch()
  // });

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setName(event.target.value);
  // };

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   setName('');
  //   mutation.mutate({ name });
  //   event.preventDefault();
  // };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(userInput);
  };

  // if (isLoading) return <span>Loading ...</span>;

  return (
    <Box>
      <Heading as="h2" size="3xl" variant="splash">
        Welcome to your daily bird diary!
      </Heading>
      <VStack as="form" mt="3rem" spacing="1rem" onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Add a bird</FormLabel>
          <Input size="lg" value={userInput} onChange={handleInputChange} />
        </FormControl>
        <Button size="lg" w="full" type="submit">
          Add bird
        </Button>
      </VStack>
      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" value={name} onChange={handleChange} />

        <button type="submit">Create</button>
      </form> */}
      <Card variant="unstyled" mt="3rem">
        <CardHeader>
          <Heading as="h3" size="md">
            Recent birds
          </Heading>
        </CardHeader>
        <CardBody mt="2rem">
          <Stack divider={<Divider />} spacing={4}>
            {/* {dummydata.map((bird) => {
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
            })} */}
            <ul>
              {/* {(data ?? []).map((user) => (
                <li key={user.id}>{user.name}</li>
              ))} */}
            </ul>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}
