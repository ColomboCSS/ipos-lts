const User = require('../repo/user-repo')
const base = require('./client-base-route')
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

router.get('/list', async function (req, res) {
  res.json(await base.list(User));
})

router.post('/', jsonParser, (req, res) => {
    var reqbody = req.body;
    res.json(base.post(reqbody._id, reqbody, User));
})

module.exports = router