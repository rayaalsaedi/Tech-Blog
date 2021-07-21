const seedsUsers = require('./user-seeds');
const seedsPosts = require('./post-seeds');
const seedsComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedPosts();
    await seedsComments();
    process.exit(0);
};

seedAll();