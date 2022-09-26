import { Center, Heading, useColorMode } from "@chakra-ui/react";

export default function Header (props: any): JSX.Element {
  const { colorMode } = useColorMode();
  return (
    <Center {...props}>
      <Heading
        size="2xl"
        color={colorMode === "light" ? "green.500" : "green.100"}
        fontWeight="bold"
      >
        Pomodoro Timer
      </Heading>
    </Center>
  );
}
