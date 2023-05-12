var express = require('express');
var router = express.Router();

const Model = require('../models/model');
const Bible = require('../models/biblemodel');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Get all Method
router.get('/getAll', async(req, res) => {
    try{
      const data = await Model.find();
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
})

//Get User by object id
router.get('/getUser/:cid', async(req, res) => {
  try{
    const data = await Model.findById(req.params.cid);
    res.json(data)
}
catch(error){
    res.status(500).json({message: error.message})
}
})

//Get getBiblequote by object id
router.get('/getBiblequote/:cid', async(req, res) => {
  try{
    const data = await Bible.findById(req.params.cid);
    res.json(data)
}
catch(error){
    res.status(500).json({message: error.message})
}
})

//Get getChapterverse by chapter id and verse id
router.get('/getChapterverse/:cid/:vid', async(req, res) => {
  try{
    var query = { "chapter": req.params.cid, "verse": req.params.vid };
    const data = await Bible.find(query);
    res.json(data)
    
  }  
catch(error){
    res.status(500).json({message: error.message})
}
})


//Get getChapter by Book and chapter id 
router.get('/getBookChapter/:bid/:cid', async(req, res) => {
  try{
    var query = { "book_id":req.params.bid, "chapter": req.params.cid };
    const data = await Bible.find(query);
    res.json(data)
    
  }  
catch(error){
    res.status(500).json({message: error.message})
}
})


//Get getChapter by Book and chapter id 
router.get('/getBookChapterVerse/:bid/:cid/:vid', async(req, res) => {
  try{
    var query = { "book_id":req.params.bid, "chapter": req.params.cid, "verse": req.params.vid };
    const data = await Bible.find(query);
    // res.json(data)
    //console.log(data)
    res.render('biblebookchapterverse', { articles : data[0], title: 'Bible' })
    
  }  
catch(error){
    res.status(500).json({message: error.message})
}
})


//Get all Method
router.get('/getKJVBible', async(req, res) => {
  try{
    const data = await Bible.find();
    res.json(data)
}
catch(error){
    res.status(500).json({message: error.message})
}
})


module.exports = router;
