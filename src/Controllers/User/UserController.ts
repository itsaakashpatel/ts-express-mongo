//Schema 
import { User as UserSchema } from '../../Database/Schema/user'

import { Request, Response} from "express";

export default class UserController {


  addUser(req: Request, res: Response) {

  }

  getUser(req: Request, res: Response) {
    const userId = req.headers.user_id

    //Find from DB
    UserSchema.findById(userId, (error, user) => {
      if(error)
        res.status(404).json(error)
      res.json(user)
    })

  }

}