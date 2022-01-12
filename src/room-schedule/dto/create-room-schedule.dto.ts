import {
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateRoomScheduleDto {
  @IsString()
  @IsNotEmpty()
  roomId: string;

  @IsString()
  @IsNotEmpty()
  branchId: string;

  @IsDateString()
  @IsNotEmpty()
  datetime: Date;

  @IsNumber()
  @IsNotEmpty()
  duration: number;
}
