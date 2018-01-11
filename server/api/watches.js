const router = require('express').Router()
const {Watch} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Watch.findAll()
    .then(watches => res.json(watches))
    .catch(next)
});

router.get('/:watchId', (req, res, next) => {
  Watch.findById(req.params.watchId)
    .then(watch => res.json(watch))
    .catch(next)
});
