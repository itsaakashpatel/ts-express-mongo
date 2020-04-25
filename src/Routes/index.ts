import {Request, Response} from "express"

const user = require('./user')

export default class Routes {
  public routes(app): void {          
      app.get('/', (req: Request,res: Response) => {
        res.status(404)
            .send("Welcome to app!")    
      })              
      app.use("/user", user)
  } 
}
