import { PartialType } from '@nestjs/mapped-types';
import { CreateVisitorLogDto } from './create-visitor-log.dto';

export class UpdateVisitorLogDto extends PartialType(CreateVisitorLogDto) {}
