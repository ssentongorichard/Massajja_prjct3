const express = require('express');
const router = express.Router();
//structure of a route
router.get('/register',(req,res) =>{
res.render('registration');
})
router.post('/register',(req,res) =>{
    console.log(req.body);
    res.send('registration successful');
})


//This is the last line always
module.exports = router;