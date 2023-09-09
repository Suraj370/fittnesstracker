import React from "react";
import { Box, TextField, Text } from "@radix-ui/themes";
import Tab from "./Tab";

interface FormProps {
  weight: number |undefined;
  height: number | undefined;
  gender: string[];
  setWeight: (val: number) => void;
  setHeight: (val: number) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
const Form: React.FC<FormProps> = ({
  weight,
  height,
  gender,
  setWeight,
  setHeight,
  onSubmit,
}) => {
  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <Box className="flex gap-5 items-center">
        <h2 className="mb-2 text-xl text-accent-12 font-medium">Gender</h2>
        <Tab genders={gender}></Tab>
      </Box>

      <Box className="flex gap-5 items-center">
        <h2 className="mb-2 text-xl text-accent-12 font-medium">Weight</h2>
        <TextField.Root className="flex  items-center gap-3 py-2">
          <TextField.Input
            value={weight || ""}
            className="bg-white text-accent-12 p-3"
            onChange={(e) => setWeight(parseFloat(e.target.value))}
          />
          <TextField.Slot>
            <Text
              size={{ initial: "2", lg: "3" }}
              className="font-semibold text-accent-10"
            >
              kg
            </Text>
          </TextField.Slot>
        </TextField.Root>
      </Box>

      <Box className="flex gap-5 items-center">
        <h2 className="mb-2 text-xl text-accent-12 font-medium">Height</h2>
        <TextField.Root className="flex  items-center gap-3 py-2">
          <TextField.Input
            value={height || ""}
            className="bg-white text-accent-12 p-3"
            onChange={(e) => setHeight(parseFloat(e.target.value))}
          />
          <TextField.Slot>
            <Text
              size={{ initial: "2", lg: "3" }}
              className="font-semibold text-accent-10"
            >
              cm
            </Text>
          </TextField.Slot>
        </TextField.Root>
      </Box>

      <input className=" bg-white px-20 py-5" type="submit" value="Calculate" />
    </form>
  );
};

export default Form;
