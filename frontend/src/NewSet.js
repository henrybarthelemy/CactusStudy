import { useState } from "react";
import {
    Flex,
    Textarea,
    Stack,
    Heading,
    Button,
    useToast,
} from "@chakra-ui/react";

/**
 * Functionality which renders and controls the form for creating a new set/deck
 * @returns {JSX.Element} to render
 * @constructor no param/state needed
 */
export default function NewDeck() {
    const [title, setTitleContents] = useState("");
    const [tags, setTagContents] = useState("");
    const toast = useToast();

    /**
     * Handle changes in the state every time a user changes the text form
     * @param e change event
     */
    const handleTitleChange = (e) => {
        const contents = e.target.value;
        setTitleContents(contents);
    };

    /**
     * Handles change in tag input form and updates state when user changes it
     * @param e change event
     */
    const handleTagChange = (e) => {
        const contents = e.target.value;
        setTagContents(contents);
    };

    /**
     * Adds a new set based on current state of component
     * @param e unused
     */
    const addNewSet = (e) => {
        //New deck to pass to backend
        const newDeck = {
            "title": title,
            "tags": tags
        }

        //Post request sending to backend, it'll assign blank cards and an appropriate unique ID
        fetch("http://localhost:8000/newset", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newDeck)
        })

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
                    <Heading fontSize={"lg"}>Deck Title</Heading>
                    <Textarea resize="none" value={title} onChange={handleTitleChange} rows={2} pb={2} />
                </Stack>
                <Stack spacing={4}>
                    <Heading fontSize={"md"}>Deck Tags</Heading>
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
