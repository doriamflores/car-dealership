import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    // { id: uuid(), brand: 'Toyota', model: 'Corolla' },
    // { id: uuid(), brand: 'Honda', model: 'Civic' },
    // { id: uuid(), brand: 'Jeep', model: 'Cherokee' }
  ];
  findAll() {
    return this.cars;
  }
  findOneById(id: string) {
    let findCar = this.cars.find(i => i.id == id)
    if (!findCar) throw new NotFoundException(`Car with id '${id}' not found`);
    return findCar;
  }
  createCar(createCarDto: CreateCarDto) {
    const car: Car = {
      id: uuid(),
      ...createCarDto,
    }
    this.cars.push(car);
    return car;
  }
  updateCar(id: string, updateCarDto: UpdateCarDto) {
    let findCar = this.findOneById(id);
    Object.assign(findCar, updateCarDto);
    return findCar;
  }
  deleteCar(id: string) {
    let findCar = this.findOneById(id);
    this.cars = this.cars.filter(i => i.id !== findCar.id);
  }
  fillCarsWithData(cars: Car[]) {
    this.cars = cars;
  }
}
