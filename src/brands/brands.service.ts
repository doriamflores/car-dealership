import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    // { id: uuid(), name: 'Audi', createdAt: new Date().getTime() },
    // { id: uuid(), name: 'BMW', createdAt: new Date().getTime() },
    // { id: uuid(), name: 'Mercedes', createdAt: new Date().getTime() },
    // { id: uuid(), name: 'Volvo', createdAt: new Date().getTime() },
  ];
  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = { id: uuid(), name: createBrandDto.name.toLocaleLowerCase(), createdAt: new Date().getTime() };
    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    let brand = this.brands.find((brand) => brand.id === id);
    if (!brand) throw new NotFoundException(`Brand with id ${id} not found`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brand = this.findOne(id);
    Object.assign(brand, updateBrandDto);
    return brand;
  }

  remove(id: string) {
    this.brands = this.brands.filter((brand) => brand.id !== id);
  }

  fillBrandsWithData(brands: Brand[]) {
    this.brands = brands;
  }
}
