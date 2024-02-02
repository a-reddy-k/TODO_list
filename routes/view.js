var express = require('express');
const UserModal = require('../model/users');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  UserModal.find().then(users =>{
    res.render('view',{
      users,
    })
  })
  // res.send('respond with a resource');
});

router.delete('/:id', async(req, res) => {
    const todoId = req.params.id;

    // Implement the code to delete the TODO with the specified ID
    // For example, if todos is an array:
    const index = await UserModal.findByIdAndDelete(todoId);
    res.redirect('/view');
    // UserModal.find().then(users =>{
    //     res.render('view',{
    //       users,
    //     })
    //   })      

    // if (index !== -1) {
    //     UserModal.slice(index, 1);
    //     res.json({ message: 'TODO deleted successfully' });
    // } else {
    //     res.status(404).json({ message: 'TODO not found' });
    // }
  });
  

// router.post('/delete',function(req,res,next){
//     const { id } = req.body;
//     console.log(id);
//     console.log(UserModal);
//   if (!id) {
//     return res.status(400).json({ message: 'Todo ID is required' });
//   }
 
//   try {
//     const i=UserModal.findByIdAndDelete(id)
//     // const deletedTodo =  UserModal.findByIdAndDelete(id);
//     // console.log(deletedTodo);
//     // if (!deletedTodo) {
//     //   return res.status(404).json({ message: 'Todo not found' });
//     // }
//     // // res.json({ message: 'Todo deleted' });
//     // // UserModal.deleteOne(id);
//     // res.redirect('/view');
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
    
// })

module.exports = router;
