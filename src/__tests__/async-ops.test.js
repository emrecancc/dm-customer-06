const { asyncOperation } = require('../src/async-ops');

describe('batch processing', () => {
  it('processes all items', async () => {
    const items = Array.from({ length: 10 }, (_, i) => i);
    const promises = items.map(item => asyncOperation(item));
    const results = await Promise.all(promises);
    expect(results).toHaveLength(10);
  });
});