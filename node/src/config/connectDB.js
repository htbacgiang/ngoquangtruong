const { Sequelize } = require('sequelize');

// Option 2: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('truongnq_vn', 'admin', 'Truong*123', {
//   host: 'truongnq-vn.csh5sjcsoz30.ap-northeast-1.rds.amazonaws.com',
//   dialect: 'mysql',
//   logging: false
// });
const sequelize = new Sequelize('dca484vk35f56d', 'tpteeupzygdgch', "0e8c352bb51b7cb9f887387c658122fa4b4341949893e18c9197a4676337cc29", {
  host: 'ec2-52-3-60-53.compute-1.amazonaws.com',
  dialect: 'postgres',
  logging: false,
  dialectOptions:{
    ssl:{
      require: true,
      rejectUnauthorized: false
    }
  }
});
let connectDB = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
module.exports = connectDB;