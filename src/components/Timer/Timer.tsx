import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  useColorMode,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useTabFocus from "../../hooks/useTabFocus";
import { useTimer } from "../../hooks/useTimer";
import TimerConfig from "../TimerConfig";

export default function Timer({ ...props }): JSX.Element {
  const { colorMode } = useColorMode();
  const isFocused = useTabFocus();
  const [start, setStart] = useState(false);
  const [duration, setDuration] = useState(25);
  const toast = useToast();
  const { timeRemaining, resetTimer } = useTimer(60 * duration, start, () => {
    setStart(false);
    toast({
      position: "top-right",
      title: "Session complete",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    if (!isFocused) {
      new Notification("Pomodoro", { body: "Your session has ended." });
    }
  });

  useEffect(() => {
    Notification.requestPermission().catch((e) => {});
  }, []);
  return (
    <Box {...props}>
      <VStack gap={5}>
        <Box>
          <Heading
            size={"4xl"}
            fontWeight={"semibold"}
            color={colorMode === "light" ? "purple.800" : "purple.100"}
          >
            {Math.floor(timeRemaining / 60)}:{String(`${timeRemaining % 60}`).padStart(2, "0")}
          </Heading>
        </Box>
        <ButtonGroup>
          {start && (
            <Button
              size={"lg"}
              colorScheme={"orange"}
              onClick={() => {
                setStart((prev) => !prev);
              }}
            >
              Stop
            </Button>
          )}
          {!start && (
            <Button
              size={"lg"}
              colorScheme={"green"}
              onClick={() => {
                setStart((prev) => !prev);
              }}
            >
              Start
            </Button>
          )}

          <Button
            size={"lg"}
            colorScheme={"purple"}
            onClick={() => {
              setStart(false);
              resetTimer();
            }}
          >
            Reset
          </Button>
        </ButtonGroup>
        <TimerConfig setDuration={setDuration}></TimerConfig>
      </VStack>
    </Box>
  );
}
