import { useState } from "react";
import {
    Flex,
    Textarea,
    Stack,
    Heading,
    Button,
    Box,
    Text,
} from "@chakra-ui/react";
import CaptionCarousel from "./CardCarousel";
/**
 * Functionality which renders and controls the form for searching by a deck
 * @returns {JSX.Element} to render
 * @constructor no param/state needed
 */
export default function NewDeck() {
    const [title, setTitleContents] = useState("");
    const [tags, setTagContents] = useState("");
    const [populated, setPopulated] = useState(false);
    const [decks, setDecks] = useState([]);
    //Example return after parsing from backend
    const deckReturn = [
        [
            {
                "front": "Facilitated Diffusion",
                "back": "A passive movement of particles from high to low concentration through a protein channel in a cell",
                "id": 1,
                "tags": "biology,science,mcat"
            },
            {
                "front": "Termal Contact",
                "back": "is when two substances can affect each other's temperature",
                "id": 2,
                "tags": "phyics,science,thermal"
            },
            {
                "front": "una cucharadita",
                "back": "a teaspoon",
                "id": 4,
                "tags": "spanish,languages"
            },
            {
                "front": "Conduction",
                "back": "is when heat flows through a heated solid.",
                "id": 5,
                "tags": "phyics,science"
            }
        ],
        [
            {
                "front": "hypothesis",
                "back": "a tentative insight that is not yet verified or tested",
                "id": 6,
                "tags": "science"
            },
            {
                "front": "graph",
                "back": "a visual representation of the relations between quantities",
                "id": 7,
                "tags": "science, math"
            },
            {
                "front": "un mesa",
                "back": "a table",
                "id": 8,
                "tags": "spanish,languages"
            },
            {
                "front": "Henry",
                "back": "the swaggiest project manager",
                "id": 9,
                "tags": "hackbeanpot members"
            }
        ],
        [
            {
                "front": "Dillon",
                "back": "cs bio major",
                "id": 10,
                "tags": "science, hackbeanpot members"
            },
            {
                "front": "ben lerner",
                "back": "best fundies prof",
                "id": 11,
                "tags": "northeastern"
            },
            {
                "front": "observation",
                "back": "the act of making and recording a measurement",
                "id": 12,
                "tags": "science"
            },
            {
                "front": "empirical",
                "back": "derived from experiment and observation rather than theory",
                "id": 13,
                "tags": "science"
            }
        ]
    ];


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
     * Populates search sets page based on return from backend
     * @param e unused
     */
    const searchByDeck = (e) => {
        // Some fetch call, read MDN
        const deck = {
            title: title,
            tags: tags,
            id: -1,
        };
        console.log(`Adding deck: ${deck}`);

        //TODO: Backend call to get decks from database
        setDecks(deckReturn);

        setTitleContents("");
        setTagContents("");
        setPopulated(true);
    };

    if (populated) {
        //user has hit the search already
        return(
            <Flex>

                <Box>
                    { decks.map((set) => {
                            return (
                                <div style={{
                                    margin: "15px"
                                }}>
                                    <CaptionCarousel set={set} />
                                </div>
                            );
                    })}
                </Box>

            </Flex>
        );
    } else {
        //users first time searching
        return(<Flex
                align={"center"}
                justify={"center"}
                flexDir={"column"}
                gap={"1em"}
                py={12}
            >
                <Stack spacing={8} mx={"auto"} width={"60%"} maxW={"2xl"}>
                    <Heading fontSize={"3xl"}>Search for Decks</Heading>
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
                    <Button colorScheme={"yellow"} onClick={searchByDeck}>
                        Search for Deck
                    </Button>
                </Stack>
            </Flex>
        );
    }
}
