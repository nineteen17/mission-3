export interface CarValueInput {
  model: string;
  year: number;
}

export interface CarValueOutput {
  car_value?: number;
  error?: string;
}

