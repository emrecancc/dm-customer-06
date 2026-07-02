function processUser(user = {}) {
  const address = user.address || {};
  const { street = "", city = "" } = address;
  return `${street}, ${city}`;
}

module.exports = { processUser };
