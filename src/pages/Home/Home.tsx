import { Flex, IconButton, useColorMode, VStack } from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";
import Header from "../../components/Header";
import Timer from "../../components/Timer";

export default function Home(): JSX.Element {
  const { toggleColorMode } = useColorMode();
  return (
    <Flex w="full" h="full" alignItems={"center"} direction={"column"} justifyContent={"center"}>
      <VStack alignItems={"end"} w="full" pt={3} pr={3}>
        <IconButton aria-label="Toggle Dark Mode" onClick={toggleColorMode}>
          <MoonIcon></MoonIcon>
        </IconButton>
      </VStack>
      <Header flex={1}></Header>
      <Timer flex={2}></Timer>
    </Flex>
  );
}
