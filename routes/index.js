const express = require('express');
const router = express.Router();
const db=require("dblo")
// glob
let par,typblo

const typBlo=function(req, res, next) {

par=req.params.id
typblo=db.typBlo(par)

next()}


const chk=function(req, res, next) {

console.log(par)
console.log(typblo)
next()}

// get
const gcb= function(req, res, next) {

res.render("index", {
title: par,
par:par,
typblo:typblo

});
}

router.get('/:id', [typBlo,chk,gcb])
// post


module.exports = router;
