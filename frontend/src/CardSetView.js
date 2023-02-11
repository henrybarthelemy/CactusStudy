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
    Card,
    useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";

export default function CardSetView(props) {
    const { front, back } = props;
    const colorValue = useColorModeValue("gray.50", "gray.800");

    return (
        <Center py={6}>
            <Card
                maxW={"2xl"}
                w={"full"}
                bg={useColorModeValue("white", "gray.900")}
                rounded={"lg"}
                p={6}
                textAlign={"center"}
            >
                <Text
                    textAlign={"center"}
                    color={useColorModeValue("gray.700", "gray.400")}
                    px={3}
                >
                    Term: {front}
                </Text>

                <Text
                    textAlign={"center"}
                    color={useColorModeValue("gray.700", "gray.400")}
                    px={3}
                >
                    Definition: {back}
                </Text>
            </Card>
        </Center>
    );
}
