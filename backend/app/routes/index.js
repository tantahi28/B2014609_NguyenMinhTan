const express = require("express");
const router = express.Router();
const authRoute = require('./auth')

router.use('/test', (req, res, next) => {
    res.status(200).json({
        message: "Welcome"
    })
});

router.use('/auth', authRoute);

module.exports = router;