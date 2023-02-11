import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Button, Flex, Heading, Stack, Textarea} from "@chakra-ui/react";
export default function SeeSet() {

    function ListCards(props) {
        const cards = props.cards;
        const cardRender = cards.map((card) => </Card card={card}>)
    }

    function Card(props){
        return {

        }
    }

    //iterate viewing card component for every card in the set
    console.log("see set");
    return (
        <Flex
            align={"center"}
            justify={"center"}
            flexDir={"column"}
            gap={"1em"}
            py={12}
        >
            <Stack spacing={8} mx={"auto"} width={"60%"} maxW={"2xl"}>

                <Heading fontSize={"3xl"}>Set name</Heading>

                <Button colorScheme={"green"}>Add cards</Button>
            </Stack>
        </Flex>
    );
}
