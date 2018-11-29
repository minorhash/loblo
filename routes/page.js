const express = require('express');
const router = express.Router();
const db=require("dblo")

let typ=[]
let par="",tit="",ter="",ln="",bod=""

const inPos=function(req, res, next) {
    if(req.body){
const tit=req.body.tit
const type=req.body.type
db.inPos(tit,type)
    }else{console.log("no req.body")}
next()}


const typBlo=function(req, res, next) {

par=(req.params.id).replace(/page/,"")
typ=db.typBlo(par)
    for(let i=0;i<typ.length;i++){
    tit=typ[i].title
    }

bod=req.body

next()}

const chk=function(req, res, next) {
console.log(par)
console.log(typ.length)
//console.log(typ)
console.log(tit)
console.log(bod)
next()}

// get
const pcb= function(req, res, next) {

res.render("page", {
tit: tit,
   par:par,
bod:bod
});
}


router.post('/page-:id', [typBlo,chk,pcb])
// post


module.exports = router;
