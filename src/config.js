const config = {
  // Fallback to a default secret during development or CI when NEXTAUTH_SECRET is not set
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || 'dev-secret',
  // Add other configuration values here if needed
};

module.exports = config;
