import { Request, Response } from "express";
import { calculateCarValue } from "../services/calculateCarValue";
import { CarValueInput, CarValueOutput } from "../interfaces/Interface";

const carValueController = (req: Request, res: Response) => {
  // Retrieve model and year from request body or query parameters
  const { model, year }: CarValueInput = req.body; // or req.query, depending on your API design

  // Create an input object
  const input: CarValueInput = { model, year };

  // Invoke the calculateCarValue function
  const result: CarValueOutput = calculateCarValue(input);

  // Check if an error occurred
  if (result.error) {
    return res.status(400).json({ error: result.error });
  }

  // Send the car value as the response
  return res.json({ car_value: result.car_value }); // car_value is the key of the object and result.car_value is the value of the object
};

export default carValueController;
