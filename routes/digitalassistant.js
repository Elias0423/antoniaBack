var express = require('express')
var router = express.Router()
var DigitalAssistant = require('../app/scripts/antonia')

router.post('/', (req, res) => {
  console.log(req.body)
  let digitalAssistant = new DigitalAssistant()
  digitalAssistant.iniciar(this, "order a pizza", (response) => {
    return res.status(200).send("OK");
  });
});

module.exports = router
