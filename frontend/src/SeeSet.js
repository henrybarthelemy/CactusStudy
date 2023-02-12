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
import CaptionCarousel from "./CardCarousel";


export default function SeeSet(props) {
    const { setlist } = props;
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
                </Stack>
                <Badge px={2} py={1} bg={colorValue}>
                    <Text>All Study Sets</Text>
                </Badge>
                {setlist.map((set) => {
                    return (
                        <div style={{
                            margin: "15px"
                        }}>
                            <CaptionCarousel set={set} />
                        </div>
                    );
                })}

            </Box>
        </Center>
    );
}
