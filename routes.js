const express = require('express');
const { helloWorld, sendJson, postRequest } = require('./controller');

const router = express.Router();

router.get('/hello', helloWorld);
router.get('/json', sendJson);
router.post('/post', postRequest);

module.exports = router;