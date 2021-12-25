import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateDeskScheduleDto {
  @IsString()
  @IsNotEmpty()
  deskId: string;

  @IsString()
  @IsNotEmpty()
  date: string;
}
