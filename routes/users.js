const express= require('express');

const router= express.Router();

const userController=require('../controllers/user_controller');

const postController= require('../controllers/post_controller')


router.get('/profile',userController.profile);
router.get('/signup',userController.usersignup);
router.get('/signin',userController.usersignin);

router.post('/create',userController.create)

router.get('/post',postController.post);






module.exports= router;