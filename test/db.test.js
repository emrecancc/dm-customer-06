const { User } = require('../src/models');
const sequelize = require('../src/database');

// Ensure the User table is clean before each test to avoid flaky order-dependent failures.
beforeEach(() => User.destroy({ where: {}, truncate: true }));

describe('User model', () => {
  it('creates a user', async () => {
    const user = await User.create({ name: 'John Doe' });
    expect(user).toBeDefined();
  });

  it('starts with empty database', async () => {
    const count = await User.count();
    expect(count).toBe(0);
  });
});