import { IsString } from 'class-validator';

export class CreateOrganizationDto {
  @IsString()
  name: string;

  @IsString()
  address: string;
}

export class CreateAnnoucementDto {
  @IsString()
  title: string;
  @IsString()
  description: string;
  @IsString()
  organizationId: string;
}

export class CreateDto {
  @IsString()
  name: string;
  @IsString()
  organizationId: string;
}