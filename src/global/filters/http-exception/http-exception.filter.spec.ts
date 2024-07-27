import { HttpExceptionFilter } from './http-exception.filter';

describe('HttpExceptionFilter', () => {
  it('[HttpExceptionFilter] should be defined', () => {
    expect(new HttpExceptionFilter()).toBeDefined();
  });
});
