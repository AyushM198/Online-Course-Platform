const ensureAuthenticated = require('../Middlewares/Auth');

const router = require('express').Router();

router.get('/', ensureAuthenticated,(req, res) => {
    console.log(req.user);
    res.status(200).json([{
        name: "mobile",
        price: 200000
    },
    {
        name: "laptop",
        price: 300000
    }])
});
module.exports = router;