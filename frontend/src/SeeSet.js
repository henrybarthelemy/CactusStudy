import {
    Flex,
    Text,
    Stack,
    Heading,
    Button,
    Center,
    Box,
    Link,
    Badge,
    Avatar,
    useColorModeValue,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import CaptionCarousel from "./CardCarousel";

const SetsContext = React.createContext({
    allSets: [], fetchAllSets: () => {}
})

export default function SeeSet() {
    const colorValue = useColorModeValue("gray.50", "gray.800");
    const [allSets, setAllSets] = useState([]);
    const fetchAllSets = async () => {
        const response = await fetch("http://localhost:8000/sets");
        const getSets = await response.json()
        setAllSets(getSets.data)
    }

    useEffect(() => {
        fetchAllSets()
    }, [])

    return (
        <SetsContext.Provider value={{allSets, fetchAllSets}}>
            <Center py={6}>
                <Box
                    width={"700px"}
                    bg={useColorModeValue("white", "gray.900")}
                    boxShadow={"2xl"}
                    rounded={"lg"}
                    p={6}
                    textAlign={"center"}
                >

                    <Badge px={2} py={1} bg={colorValue}>
                        <Text>All Study Sets</Text>
                    </Badge>
                    { allSets.map((set) => {
                        return (
                            <div style={{ margin: "20px"}}>
                                <Box shadow="lg">
                                    <CaptionCarousel cards={set.cards}/>
                                    <Box mb={8} direction={"row"} spacing={4} p={5} align={"center"}>
                                        <Button
                                            as={"a"}
                                            bg={"#EDB458"}
                                            ml={4}
                                            mr={4}
                                            href={`/review/${set.id}`}
                                            _hover={{
                                                backgroundColor: "#fcd494"
                                            }}>Review</Button>

                                        <Button
                                            as={"a"}
                                            bg={"#EDB458"}
                                            ml={4}
                                            mr={4}
                                            href={`/newcard/${set.id}`}
                                            _hover={{
                                                backgroundColor: "#fcd494",
                                            }}>Add Card</Button>
                                    </Box>
                                </Box>
                            </div>
                        );
                    })}
                </Box>
            </Center>
        </SetsContext.Provider>
    );
}
