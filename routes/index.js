const express = require('express');
const router = express.Router();
const db=require("dblo")
// glob
let par="",tit=""
let typblo=[]

const typBlo=function(req, res, next) {

par=(req.params.id).replace(/page-/,"")
typblo=db.typBlo(par)
    for(let i=0;i<typblo.length;i++){
    tit=typblo[i].title
console.log(tit)
    }

bod=req.body

next()}

const chk=function(req, res, next) {

console.log(par)
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
