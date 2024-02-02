var express = require('express');
const UserModal = require('../model/users');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  UserModal.find().then(users =>{
    res.render('users',{
      users,
    })
  })
  // res.send('respond with a resource');
});

router.post('/',function(req,res,next){
  const user=new UserModal(req.body)
  try{
    user.save().then(d=>{
      res.redirect('/view')
    }) 
  }catch(error){
      res.status(500).send(error);
  }
})

module.exports = router;
