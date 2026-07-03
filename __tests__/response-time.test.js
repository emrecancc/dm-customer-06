const request = require('supertest');
const app = require('../app');

describe('API responds within 450ms', () => {
  it('should respond quickly', async () => {
    const start = Date.now();
    await request(app).get('/');
    const duration = Date.now() - start;
    expect(duration).toBeLessThan(450);
  });
});