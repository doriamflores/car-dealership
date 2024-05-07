import { Controller, Get, Param } from '@nestjs/common';
import { existsSync } from 'fs';

@Controller('cars')
export class CarsController {
  private cars = ['Toyota', 'Honda', 'Jeep'];
  @Get()
  getAllCars() {
    return this.cars;
  }
  @Get(':id')
  getCarById(@Param('id') id: number) {
    let isExists = this.cars.find((i, j) => j == id);
    if (!isExists) {
      return 'No existe un carro con ese id';
    }
    return this.cars[id];
  }
}
