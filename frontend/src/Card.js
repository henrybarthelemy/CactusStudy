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

export default function Card(props) {
  const { front, back, tags } = props;
  const [currentContent, setCurrentContent] = useState(front);
  const [frontShowing, setFrontShowing] = useState(true);
  const colorValue = useColorModeValue("gray.50", "gray.800");

  const flipCard = (e) => {
    if (frontShowing) {
      setCurrentContent(back);
    } else {
      setCurrentContent(front);
    }
    setFrontShowing(!frontShowing);
  };

  return (
    <Center py={6}>
      <Box
        maxW={"2xl"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          {currentContent}
        </Text>

        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          {tags.split(",").map((t) => {
            return (
              <Badge px={2} py={1} bg={colorValue}>
                {t}
              </Badge>
            );
          })}
        </Stack>

        <Stack mt={8} direction={"row"} spacing={4}>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            _focus={{
              bg: "gray.200",
            }}
            onClick={flipCard}
          >
            Flip
          </Button>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"blue.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "blue.500",
            }}
          >
            Next Card
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
