import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Flex,
  Textarea,
  Stack,
  Heading,
  Button,
  useToast,
} from "@chakra-ui/react";

export default function NewCard() {
  const id = useParams().id;
  const [frontContents, setFrontContents] = useState("");
  const [backContents, setBackContents] = useState("");
  const [tags, setTags] = useState("");
  const toast = useToast();

  const handleFrontChange = (e) => {
    const contents = e.target.value;
    setFrontContents(contents);
  };

  const handleBackChange = (e) => {
    const contents = e.target.value;
    setBackContents(contents);
  };

  const handleTagsChange = (e) => {
    const contents = e.target.value;
    setTags(contents);
  };

  const addNewCard = (e) => {
    // Some fetch call, read MDN
    const card = {
      front: frontContents,
      back: backContents,
      tags: tags,
      set: id,
    };
    console.log(`Adding card ${card}`);

    toast({
      title: "Card Added",
      description: `We added the card to the set`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    setFrontContents("");
    setBackContents("");
    setTags("");
  };

  return (
    <Flex
      align={"center"}
      justify={"center"}
      flexDir={"column"}
      gap={"1em"}
      py={12}
    >
      <Stack spacing={8} mx={"auto"} width={"60%"} maxW={"2xl"}>
        <Heading fontSize={"3xl"}>Create a Card</Heading>
        <Stack spacing={4}>
          <Heading fontSize={"lg"}>Front</Heading>
          <Textarea value={frontContents} onChange={handleFrontChange} pb={4} />
        </Stack>
        <Stack spacing={4}>
          <Heading fontSize={"lg"}>Back</Heading>
          <Textarea value={backContents} onChange={handleBackChange} pb={4} />
        </Stack>
        <Stack spacing={4}>
          <Heading fontSize={"md"}>Tags</Heading>
          <Textarea
            value={tags}
            onChange={handleTagsChange}
            size="sm"
            resize="none"
            rows={1}
            pb={2}
          />
        </Stack>
        <Button colorScheme={"yellow"} onClick={addNewCard}>
          Add Card
        </Button>
      </Stack>
    </Flex>
  );
}
