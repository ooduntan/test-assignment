module.exports = {
  database: process.env.database ||'mongodb://127.0.0.1:27017/testAssignment',
  port: 3001,
  secret: process.env.secret || 'fkjhfdkj&*^&'
};
