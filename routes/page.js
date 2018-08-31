var express = require('express');
var router = express.Router();
var db=require("dblo")

var inPos=function(req, res, next) {
    if(req.body){
var tit=req.body.tit
var type=req.body.type
var term=req.body.term
var link=req.body.link
var body=req.body.body
var date=req.body.date

db.inPos(tit,type,term,link,body,date)
    }else{console.log("no req.body")}
next()}

var chk=function(req, res, next) {
next()}

// get
var pcb= function(req, res, next) {
var par=req.params.id
console.log(par)
var bod=req.body
console.log(bod)

res.render("page", {
title: par,
bod:bod
});
}


router.post('/page-:id', [inPos,chk,pcb])
// post


module.exports = router;
