import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  { id: uuid(), brand: 'Audi', model: 'A4' },
  { id: uuid(), brand: 'BMW', model: 'M5' },
  { id: uuid(), brand: 'Mercedes', model: 'C63' },
  { id: uuid(), brand: 'Volvo', model: 'S60' },
]