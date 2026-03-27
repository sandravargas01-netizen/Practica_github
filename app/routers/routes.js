const express = require('express');
const router = express.Router();
const items = require('../data/data');

router.get('/items', (req, res) => {
    res.json(items);
});

module.exports = router;