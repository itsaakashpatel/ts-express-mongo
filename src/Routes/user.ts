import * as express from "express";
const router = express.Router()

//Controllers
import UserController from '../Controllers/User/UserController'

//OBJ
const userController = new UserController()

//ROUTES
router.route('/profile')
  .get(userController.getUser)
  .post(userController.addUser)


export = router