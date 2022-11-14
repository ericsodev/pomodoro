import { EditIcon } from "@chakra-ui/icons";
import {
  Button,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { SetStateAction, useEffect, useState } from "react";

interface TimerConfigProps {
  setDuration: React.Dispatch<SetStateAction<number>>
}
export default function TimerConfig({ setDuration }: TimerConfigProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const [sliderValue, setSliderValue] = useState(25);
  const { colorMode } = useColorMode();
  useEffect(() => {
    setDuration(sliderValue);
  }, [sliderValue, setDuration]);
  return (
    <VStack gap={5}>
      <Button
        onClick={() => {
          setOpen((open) => !open);
        }}
        colorScheme={"gray"}
        leftIcon={<EditIcon></EditIcon>}
        aria-label="Edit"
      >
        Edit
      </Button>
      {open && (
        <VStack>
          <Slider
            onChange={(val) => setSliderValue(val)}
            aria-label="duration slider"
            defaultValue={sliderValue}
            min={0}
            max={60}
            step={0.5}
            colorScheme="purple"
            minW={350}
          >
            <SliderMark
              mt={5}
              bgColor={colorMode === "light" ? "purple.300" : "purple.500"}
              w={"4ch"}
              ml={-5}
              textAlign={"center"}
              rounded={"sm"}
              value={sliderValue}
            >
              {sliderValue}
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack></SliderFilledTrack>
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </VStack>
      )}
    </VStack>
  );
}
