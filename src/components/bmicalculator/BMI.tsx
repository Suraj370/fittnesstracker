"use client";
import { Box, Heading, Text, TextField } from "@radix-ui/themes";
import React, { useState, ChangeEvent } from "react";
import Tab from "./Tab";
import { log } from "console";

const BMI: React.FC = () => {
  const gender = ["Male", "Female"];
  const [messageTitle, setMessageTitle] = useState("Normal");
  const [message, setMessage] = useState(
    "Normal BMI means that your weight is in the healthy range as per your height."
  );
  const [weight, setWeight] = useState<number | undefined>(undefined);
  const [height, setHeight] = useState<number | undefined>(undefined);
  const [bmi, setBMI] = useState<number | undefined>(undefined);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    calculateBMI();
  };
  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      var desiredweight = 0.0;
      if (bmiValue > 30) {
        desiredweight = 19 * (heightInMeters * heightInMeters);
        setMessageTitle("Obese");
        setMessage(
          `You are in obese range based on our calculations. You need to lose ${(
            weight - desiredweight
          ).toFixed(2)} to fit in normal BMI range`
        );
      } else if (bmiValue < 30 && bmiValue > 25) {
        desiredweight = 19 * (heightInMeters * heightInMeters);
        setMessageTitle("Overweight");
        setMessage(
          ` You are in overweight range based on our calculations. You need to lose ${(
            weight - desiredweight
          ).toFixed(2)} to fit in normal BMI range`
        );
      } else if (bmiValue < 18.5) {
        desiredweight = 19 * (heightInMeters * heightInMeters);

        setMessageTitle("Underweight");
        setMessage(
          `You are in underweight range based on our calculations. You need to gain ${(
            desiredweight - weight
          ).toFixed(2)} to fit in normal BMI range`
        );
      } else {
        setMessageTitle("Normal")
        setMessage(
          "Normal BMI means that your weight is in the healthy range as per your height."
        );
      }

      setBMI(parseFloat(bmiValue.toFixed(2)));
    } else {
      setBMI(undefined);
    }
  };

  return (
    <>
      <Box className="bg-gradient-to-b text-black from-primary-3 to to-primary-10 flex  p-10 max-lg:flex-col justify-between">
        <div className="flex flex-col justify-center  gap-9">
          <Box>
            <h1 className=" text-2xl font-semibold mb-2">{messageTitle}</h1>
            <p className=" text-lg max-w-lg">{message}</p>
          </Box>
          <div className="flex justify-between gap-5">
            <Box className="flex flex-col gap-1 items-center">
              <h2 className="mb-2 text-xl text-accent-12 font-medium">
                {" "}
                Ideal BMI
              </h2>
              <p className="text-lg font-semibold text-accent-10">
                18.5 - 24.9
              </p>
            </Box>

            <Box className="flex flex-col gap-1 items-center justify-center">
              <h2 className="mb-2 text-xl text-accent-12 font-medium">
                {" "}
                Your BMI
              </h2>
              <p className="text-lg font-semibold text-accent-10">
                {bmi !== undefined ? bmi : "-"}
              </p>
            </Box>
            <Box className="flex flex-col gap-1 items-center justify-center">
              <h2 className="mb-2 text-xl text-accent-12 font-medium">
                {" "}
                BMI Prime
              </h2>
              <p className="text-lg font-semibold text-accent-10">
                {bmi !== undefined ? (bmi / 25).toFixed(2) : "-"}
              </p>
            </Box>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-9">
          <h1 className=" text-2xl font-semibold mb-2">Calculate BMI</h1>
          <form className="flex flex-col gap-4" onSubmit={onSubmit}>
            <Box className="flex gap-5 items-center">
              <h2 className="mb-2 text-xl text-accent-12 font-medium">
                Gender
              </h2>
              <Tab genders={gender} />
            </Box>

            <Box className="flex gap-5 items-center">
              <h2 className="mb-2 text-xl text-accent-12 font-medium">
                Weight
              </h2>
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
              <h2 className="mb-2 text-xl text-accent-12 font-medium">
                Height
              </h2>
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
                    kg
                  </Text>
                </TextField.Slot>
              </TextField.Root>
            </Box>

            <input
              className=" bg-white px-20 py-5"
              type="submit"
              value="Calculate"
            />
          </form>
        </div>
      </Box>
    </>
  );
};

export default BMI;
