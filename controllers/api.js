const express = require('express');
const CORS = require('cors');
const crypto = require('crypto');

const router = express.Router();

router.use(CORS());

router.route('/')
.post((req, res) => {
    if (req.body.name == null || req.body.name === '')
        return res.render('noname');

    if (req.body.name === 'admin' && req.body.password !== 'krishna')
        return res.render('wrongpass');
    
    res.render('submitted', {
        ...req.body,
        md5: text => crypto.createHash('md5').update(req.body.password).digest('hex')
    });
});

module.exports = router;