const { Comment } = require('../models');

const commentData = [{
        comment_text: "lfkel;kfmelmfekfml;kmf,ldmfklds",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "ksfmsdkmfkdmfkdmfdkmfdl",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "sfjskfmksdjfdfnskd;fm;lsdkmfjekjfw;lfskfljfnjdsnfksnf;slf;lsakmfs",
        user_id: 3,
        post_id: 3
    }
];

const seedsComments = () => Comment.bulkCreate(commentData);

module.exports = seedsComments;