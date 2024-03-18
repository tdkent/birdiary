// Imports
import { useState } from 'react';
import {
  Box,
  Stack,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  Card,
  CardHeader,
  CardBody,
  Divider,
  Text,
  Textarea,
  Flex,
  Badge,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react';
// Internal Imports
import { trpc } from '../trpc';

export default function Home() {
  // State
  const [userInput, setUserInput] = useState('');
  // React Query
  const { data, isLoading, refetch } = trpc.diary.getRecentBirds.useQuery();
  const mutation = trpc.diary.addBird.useMutation({
    onSuccess: () => refetch()
  });
  // Form Functions
  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUserInput(e.currentTarget.value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUserInput('');
    console.log(userInput);
    // mutation.mutate({ name: userInput });
    mutation.mutate({ name: userInput });
  };

  // modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  //isLoading state
  if (isLoading) return <span>Loading ...</span>;

  return (
    <>
      <Box>
        <Heading as="h2" size="3xl" variant="splash">
          Welcome to your daily bird diary!
        </Heading>
        <VStack as="form" mt="3rem" spacing="1rem" onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Add a bird</FormLabel>
            <Input size="lg" value={userInput} onChange={handleInputChange} />
          </FormControl>
          <Button size="lg" width="full" type="submit" colorScheme="blue">
            Quick add
          </Button>
          <Button size="lg" width="full" colorScheme="gray" onClick={onOpen}>
            Add details
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
              {(data?.rows ?? []).map((bird) => {
                return (
                  <Flex key={bird.sight_id} flexDirection="column" gap={2}>
                    <Heading as="h6" size="sm">
                      {bird.bird_name}
                    </Heading>
                    <Text fontSize="sm">
                      {bird.sight_date}
                      {bird.is_new ? (
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
      {/* Details modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading size="lg">Add sighting details</Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box
              bg="tomato"
              w="100%"
              h="180px"
              position="relative"
              overflow="hidden">
              <Text color="white">Bird image</Text>
            </Box>
            <Heading size="sm">{userInput || 'Blue jay'}</Heading>
            <Text>
              <i>Cyanocitta cristata</i>
            </Text>
            <VStack as="form" mt="1rem" spacing="1rem">
              <FormControl>
                <FormLabel>Location</FormLabel>
                <Input
                  size="lg"
                  value={userInput}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea
                  size="sm"
                  placeholder="Add some notes about your sighting"
                />
                <FormHelperText>Characters remaining: 500</FormHelperText>
              </FormControl>
              <Button size="lg" width="full" type="submit" colorScheme="blue">
                Add sighting
              </Button>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
