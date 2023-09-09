"use client";
import { Box, Heading, Text, TextField } from "@radix-ui/themes";
import React, { useState, ChangeEvent } from "react";
import Tab from "./Tab";
import Form from "./Form";

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
        setMessageTitle("Normal");
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
      <Box className="bg-gradient-to-b text-black from-primary-3 to to-primary-10 flex  p-10 max-xl:flex-col justify-between">
        <div className="flex flex-col justify-center  gap-9">
          <Box>
            <h1 className=" text-2xl font-semibold mb-2">{messageTitle}</h1>
            <p className=" text-lg max-w-lg">{message}</p>
          </Box>
          <div className="flex justify-between gap-5 ">
            <Box className="flex flex-col gap-1 items-center">
              <Heading
                as="h2"
                className="mb-2 text-xl text-accent-12 font-medium"
              >
                {" "}
                Ideal BMI
              </Heading>
              <p className="text-lg font-semibold text-accent-10">
                18.5 - 24.9
              </p>
            </Box>

            <Box className="flex flex-col gap-1 items-center justify-center">
              <Heading
                as="h2"
                className="mb-2 text-xl text-accent-12 font-medium"
              >
                {" "}
                Your BMI
              </Heading>
              <p className="text-lg font-semibold text-accent-10">
                {bmi !== undefined ? bmi : "-"}
              </p>
            </Box>
            <Box className="flex flex-col gap-1 items-center justify-center">
              <Heading
                as="h2"
                className="mb-2 text-xl text-accent-12 font-medium"
              >
                {" "}
                BMI Prime
              </Heading>
              <p className="text-lg font-semibold text-accent-10">
                {bmi !== undefined ? (bmi / 25).toFixed(2) : "-"}
              </p>
            </Box>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-9">
          <h1 className=" text-2xl font-semibold mb-2">Calculate BMI</h1>
          <Form
            weight={weight}
            setWeight={setWeight}
            height={height}
            setHeight={setHeight}
            gender={gender}
            onSubmit={onSubmit} 
          />
        </div>
      </Box>
    </>
  );
};

export default BMI;
