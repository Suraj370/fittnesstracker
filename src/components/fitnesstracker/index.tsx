import React from "react";
import { Box, Heading } from "@radix-ui/themes";

const FitnessTracker = () => {
  return (
    <Box className="bg-gradient-to-b text-black from-primary-3 to to-primary-10 flex  p-10 max-lg:flex-col justify-between">
      <header className="flex items-center text-white border-b-2 border-white p-5  justify-between w-full">
        <Heading as="h1" className=" text-xl">
          Fitness Tracker
        </Heading>
        <button className=" bg-accent-12 text-white px-5 py-2 ">Add</button>
      </header>
    </Box>
  );
};

export default FitnessTracker;
