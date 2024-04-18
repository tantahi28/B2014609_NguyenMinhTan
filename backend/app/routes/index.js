const express = require("express");
const router = express.Router();
const authRoute = require('./auth')
const bookRoute = require('./book')
const genreRoute = require('./genre')

router.use('/test', (req, res, next) => {
    res.status(200).json({
        message: "Welcome"
    })
});

router.use('/auth', authRoute);
router.use('/book', bookRoute);
router.use('/genre', genreRoute);

module.exports = router;