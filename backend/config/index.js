require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  dbUri: process.env.DB_URI || 'mongodb://localhost:27017/gogrocer',
  jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret',
};
