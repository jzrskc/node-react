const express = require ('express');
const router = express.Router();
const Ninja = require('../models/ninja');

/////////////////
// GEOLOCATION //
/////////////////

// http://localhost:3000/api/ninjas/?lng=-80&lat=25
router.get('/ninjas', function(req, res, next){
  /* Ninja.find({}).then(function(ninjas){
    res.send(ninjas);
  }); */
  Ninja.geoNear(
    [parseFloat(req.query.lng), parseFloat(req.query.lat)],
    {maxDistance: 10, spherical: true}
  ).then(function(ninjas){
    res.send(ninjas);
  }).catch(next);
});


module.exports = router;
