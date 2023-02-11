import {
  Flex,
  Textarea,
  Stack,
  Heading,
  Button,
  Box,
  Text,
  Center,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { useState } from "react";
import Card from "./Card";
import Cactus from "./Cactus";
import { useParams } from "react-router-dom";

export default function ReviewCards() {
  const id = useParams();
  console.log(id)
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
    {
      front: "Design Recipe",
      back: "How to cook recipes or something idk",
      tags: "fun dies",
    },
    {
      front: "Backend",
      back: "Where the magic happens",
      tags: "webdev,computer science",
    },
    {
      front: "Flip the card around for a surprise",
      back: "I'm being held hostage against my will please save me call the police anyone please",
      tags: "fun,things,to,do,in,someone's,basement",
    },
    {
      front: "Computer",
      back: "010101010101011110100100010101 or something idk i didn't take systems",
      tags: "systems",
    },
    {
      front: "Algorithms",
      back: "Djikstra's go brrrrr",
      tags: "algorithms",
    },
    {
      front: "Cactus",
      back: "Theme of the hackathon",
      tags: "cacti",
    },
    {
      front: "thinknig",
      back: "thonking",
      tags: "hmm",
    },
    {
      front: "help",
      back: "me",
      tags: "pls",
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
        <Center>
          <Cactus count={currentCardIndex} maxCount={currentCards.length} />
        </Center>
      </Box>
    );
  } else {
    return (
      <Stack spacing={3} mx={"auto"} width={"60%"} maxW={"2xl"} py={12}>
        <Heading fontSize={"3xl"}>Review Cards</Heading>
        <Flex
          flexDir="column"
          width={"100%"}
          align="center"
          justify="space-between"
        >
          <Card
            contents={currentCards[currentCardIndex]}
            increment={increment}
            decrement={decrement}
            key={currentCardIndex}
          ></Card>
          <Cactus count={currentCardIndex} maxCount={currentCards.length} />
        </Flex>
      </Stack>
    );
  }
}
