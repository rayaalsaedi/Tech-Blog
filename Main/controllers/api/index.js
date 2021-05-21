const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./postRoutes');
const comments= require ('./commentsRoutes');

router.use('/users', userRoutes);
router.use('/projects', postRoutes);
router.use ('/comments', commentRoutes)

module.exports = router;
