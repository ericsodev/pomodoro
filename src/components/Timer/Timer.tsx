import { Box, Button, ButtonGroup, Heading, useColorMode, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useTimer } from "../../hooks/useTimer";

export default function Timer({ ...props }): JSX.Element {
  const { colorMode } = useColorMode();
  const [start, setStart] = useState(false);
  const { duration, resetTimer } = useTimer(25 * 60, start);

  return (
    <Box {...props}>
      <VStack gap={5}>
        <Box>
          <Heading
            size={"4xl"}
            fontWeight={"semibold"}
            color={colorMode === "light" ? "purple.900" : "purple.100"}
          >
            {Math.floor(duration / 60)}:{String(`${duration % 60}`).padStart(2, "0")}
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
      </VStack>
    </Box>
  );
}
