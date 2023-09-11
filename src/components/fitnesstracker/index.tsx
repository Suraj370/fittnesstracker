'use client'
import React, { useState, useEffect } from "react";
import { Box, Heading } from "@radix-ui/themes";

import MyDialog from "./MyDialog";
import { useTodos } from "@/store/exercises";
import Card from "./Card";

const FitnessTracker = () => {
  const { todos } = useTodos();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // After the component is mounted on the client side, set isHydrated to true.
    setIsHydrated(true);
  }, []);

  return (
    <>
      <Box className="bg-gradient-to-b text-black from-primary-3 to to-primary-10 flex p-10 flex-col justify-between">
        <Box className="flex items-center text-white border-b-2 border-white p-5 justify-between w-full">
          <Heading as="h1" className="text-xl">
            Fitness Tracker
          </Heading>
          <MyDialog />
        </Box>
        <div>
          {/* Conditionally render the todos only after hydration */}
          {isHydrated && (
            <div className="mt-4">
              {todos.map((todo) => (
                <Card key = {todo.id} exercise = {todo}></Card>
              ))}
            </div>
          )}
        </div>
      </Box>
    </>
  );
};

export default FitnessTracker;
