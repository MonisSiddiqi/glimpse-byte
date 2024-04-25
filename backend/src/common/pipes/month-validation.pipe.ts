import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { Month } from '@prisma/client';

@Injectable()
export class MonthValidationPipe implements PipeTransform {
  readonly allowedMonths = Object.values(Month).join(', ');

  transform(value: any): Month {
    if (!this.isMonth(value)) {
      throw new BadRequestException(
        `"${value}" is not a valid month. Allowed values are: ${this.allowedMonths}`,
      );
    }
    return value;
  }

  private isMonth(value: any): value is Month {
    return Object.values(Month).includes(value);
  }
}
