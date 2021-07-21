const { User } = require('../models');

const userData = [{
        username: 'Jack',
        password: 'jkohn'

    },
    {
        username: 'Tom',
        password: 'tom1'
    },
    {
        username: 'Henry',
        password: 'henry1'
    }
];

const seedsUsers = () => User.bulkCreate(userData);

module.exports = seedsUsers;