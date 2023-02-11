import { useState } from "react";
import { useParams } from "react-router-dom";
import {
    Flex,
    Textarea,
    Stack,
    Heading,
    Button,
    useToast,
} from "@chakra-ui/react";

export default function NewDeck() {
    const [title, setTitleContents] = useState("");
    const [tags, setTagContents] = useState("");
    const toast = useToast();

    const handleTitleChange = (e) => {
        const contents = e.target.value;
        setTitleContents(contents);
    };

    const handleTagChange = (e) => {
        const contents = e.target.value;
        setTagContents(contents);
    };

    const addNewSet = (e) => {
        // Some fetch call, read MDN
        const deck = {
            title: title,
            tags: tags,
            cards: [],
        };
        console.log(`Adding deck: ${deck}`);

        //TODO: Backend call to add deck to database

        toast({
            title: "Deck Created",
            description: `Deck has been successful created`,
            status: "success",
            duration: 5000,
            isClosable: true,
        });

        setTitleContents("");
        setTagContents("");
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
                <Heading fontSize={"3xl"}>Create a Deck</Heading>
                <Stack spacing={4}>
                    <Heading fontSize={"lg"}>Front</Heading>
                    <Textarea value={title} onChange={handleTitleChange} pb={4} />
                </Stack>
                <Stack spacing={4}>
                    <Heading fontSize={"md"}>Tags</Heading>
                    <Textarea
                        value={tags}
                        onChange={handleTagChange}
                        size="sm"
                        resize="none"
                        rows={1}
                        pb={2}
                    />
                </Stack>
                <Button colorScheme={"yellow"} onClick={addNewSet}>
                    Create Deck
                </Button>
            </Stack>
        </Flex>
    );
}
