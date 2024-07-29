import { AppLogMiddleware } from './app-log.middleware';

describe('AppLogMiddleware', () => {
  it('[AppLogMiddleware] should be defined', () => {
    expect(new AppLogMiddleware()).toBeDefined();
  });
});
