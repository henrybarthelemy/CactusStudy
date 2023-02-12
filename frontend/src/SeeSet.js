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
                    <Stack align={"center"} justify={"center"} direction={"row"} mb={6}>
                    </Stack>
                    <Badge px={2} py={1} bg={colorValue}>
                        <Text>All Study Sets</Text>
                    </Badge>
                    { allSets.map((set) => {
                        return (
                            <div style={{ margin: "15px" }}>
                                <CaptionCarousel set={set.cards}/>
                            </div>
                        );
                    })}
                </Box>
            </Center>
        </SetsContext.Provider>
    );
}
