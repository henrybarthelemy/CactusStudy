import {
  Flex,
  Textarea,
  Stack,
  Heading,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { useState } from "react";
import Card from "./Card";

export default function ReviewCards() {
  const currentCards = [
    {
      front: "Facilitated Diffusion",
      back: "A passive movement of particles from high to low concentration through a protein channel in a cell.",
      tags: "biology,science,mcat",
    },
    {
      front: "Garbage Collection",
      back: "Automatic memory management that attempts to reclaim memory allocated by the program",
      tags: "computer science",
    },
    {
      front: "React",
      back: "A framework for developing frontend things",
      tags: "code monkey,crying",
    },
  ];
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const increment = () => {
    setCurrentCardIndex(currentCardIndex + 1);
  };
  const decrement = () => {
    setCurrentCardIndex(Math.max(currentCardIndex - 1, 0));
  };
  if (currentCardIndex >= currentCards.length) {
    return (
      <Box textAlign="center" py={10} px={6}>
        <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Finished Review
        </Heading>
        <Text color={"gray.500"}>
          Come back later for more cards to review!
        </Text>
      </Box>
    );
  } else {
    return (
      <Stack spacing={3} mx={"auto"} width={"60%"} maxW={"2xl"} py={12}>
        <Heading fontSize={"3xl"}>Review Cards</Heading>
        <Card
          contents={currentCards[currentCardIndex]}
          increment={increment}
          decrement={decrement}
          key={currentCardIndex}
        ></Card>
      </Stack>
    );
  }
}
