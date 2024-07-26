import {
  ArgumentMetadata,
  Injectable,
  NotFoundException,
  PipeTransform,
} from '@nestjs/common';
import { TextService } from '../../../text/text.service';

@Injectable()
export class ValidIdPipe implements PipeTransform {
  constructor(private textService: TextService) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async transform(value: any, metadata: ArgumentMetadata) {
    try {
      await this.textService.findOne(+value);
      return value;
    } catch (ex) {
      throw new NotFoundException('Text id not found');
    }
  }
}
