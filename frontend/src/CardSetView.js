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
import CaptionCarousel from "./CardCarousel";
import cards from "set-example";


export default function CardSetView(props) {
    const colorValue = useColorModeValue("gray.50", "gray.800");

    return (
        <div>
            <CaptionCarousel set={cards} />
            <CaptionCarousel set={cards} />
            <CaptionCarousel set={cards} />
        </div>
    )
}
