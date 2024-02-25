require("dotenv").config();

const dev = {
  app: {
    port: process.env.port,
  },
  db: {
    url: process.env.url,
  },
};

module.exports = dev;
