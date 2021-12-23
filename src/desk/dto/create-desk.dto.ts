import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateDeskDto {
  @IsString()
  @IsNotEmpty()
  areaId: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsBoolean()
  @IsNotEmpty()
  status: boolean;
}
