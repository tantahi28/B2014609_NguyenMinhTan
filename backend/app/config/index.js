const config = {
    app: {
      port: process.env.PORT || 3001,
    },
    db: {
      uri: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/BM",
    },
    jwt: {
        key: "secretkey"
    }
  };
module.exports = config;
  