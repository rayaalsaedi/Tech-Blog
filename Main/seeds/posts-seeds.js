const { Post } = require('../models');

const postsData = [{
        title: 'Lorem Ipsum I',
        content: 'a;sksfkfkl;skfldkfdsfkldkfmdsk, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        user_id: 1

    },
    {
        title: 'Lorem Ipsum 2',
        content: ';sdkslkfefe,fekfmkejfejfkefmke pharetra.',
        user_id: 2
    },
    {
        title: 'Lorem Ipsum 3',
        content: 'Ujjefenfejnfejkfnek bfjkenfje jefjenfjek fefjkebf ke.',
        user_id: 3
    }
];

const seedsPosts = () => Post.bulkCreate(postsData);

module.exports = seedsPosts;