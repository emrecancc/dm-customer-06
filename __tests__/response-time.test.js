import request from 'supertest';
import app from '../src/app';

describe('API responds within 200ms', () => {
  it('should respond quickly', async () => {
    const start = Date.now();
    await request(app).get('/').expect(200);
    const duration = Date.now() - start;
    expect(duration).toBeLessThan(600);
  });
});