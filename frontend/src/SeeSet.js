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
import { useState } from "react";
import CardSetView from "./CardSetView";
export default function SeeSet(props) {
    const { cards } = props;
    const colorValue = useColorModeValue("gray.50", "gray.800");

    return (
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
                    <Badge px={2} py={1} bg={colorValue}>
                        <Text>Some set info here</Text>
                    </Badge>
                </Stack>
                <Text>
                    Current set of cards:
                </Text>
                {cards.map((card) => {
                    return (
                        <CardSetView>
                        </CardSetView>
                    );
                })}




            </Box>
        </Center>
    );
}
