import { Flex, Textarea, Stack, Heading, Button } from "@chakra-ui/react";
import Card from "./Card";

export default function ReviewCards() {
  return (
    <Stack spacing={3} mx={"auto"} width={"60%"} maxW={"2xl"} py={12}>
      <Heading fontSize={"3xl"}>Review Cards</Heading>
      <Card
        front={"Facilitated Diffusion"}
        back={
          "A passive movement of particles from high to low concentration through a protein channel in a cell."
        }
        tags={"biology,science,mcat"}
      ></Card>
    </Stack>
  );
}
