const SequelizeAuto = require("sequelize-auto");
const Sequelize = require("sequelize");
// const sequelize = new Sequelize('sqlite::memory:');
const sequelize = new Sequelize(
  "mysql://elfrique:lfrique.2000@localhost:3306/old_elfrique"
);
const options = { caseFile: "l", caseModel: "p", caseProp: "c" };
const auto = new SequelizeAuto(sequelize, null, null, options);
//const auto = new SequelizeAuto("old_elfrique", "elfrique", "lfrique.2000");

auto.run().then((data) => {
  console.log(data.tables); // table and field list
  console.log(data.foreignKeys); // table foreign key list
  console.log(data.indexes); // table indexes
  console.log(data.hasTriggerTables); // tables that have triggers
  console.log(data.relations); // relationships between models
  console.log(data.text); // text of generated models
});
