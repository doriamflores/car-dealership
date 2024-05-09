import { IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateCarDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  id: string;

  @IsString()
  @IsOptional()
  readonly brand?: string;

  @IsString()
  @IsOptional()
  readonly model?: string;
}