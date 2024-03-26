const sequelize = require('../config/connection');
const seedContent = require('./postData');
const seedEvents = require('./eventData');

const seedAll = async () => {
    try {
        await sequelize.sync({ force: true });

  await seedContent();
  await seedEvents();
  console.log('seed data added');
  process.exit(0);
  
    } catch (err) {
        console.error("Error seeding data:", err);
        process.exit(1);
      }  
};

seedAll();
