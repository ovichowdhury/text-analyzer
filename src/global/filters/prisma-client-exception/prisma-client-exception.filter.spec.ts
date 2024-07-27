import { PrismaClientExceptionFilter } from './prisma-client-exception.filter';

describe('PrismaClientExceptionFilter', () => {
  it('[PrismaClientExceptionFilter] should be defined', () => {
    expect(new PrismaClientExceptionFilter()).toBeDefined();
  });
});
