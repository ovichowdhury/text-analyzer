import { Test, TestingModule } from '@nestjs/testing';
import { ValidIdPipe } from './valid-id.pipe';
import { TextService } from '../../../text/text.service';

describe('ValidIdPipe', () => {
  it('should be defined', async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TextService],
    }).compile();
    expect(new ValidIdPipe(module.get<TextService>(TextService))).toBeDefined();
  });
});
