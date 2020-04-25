import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as mongoose from "mongoose";

//Routes
import Routes from './Routes'

class App {

  public app: express.Application;
  public route: Routes = new Routes();
  public mongoUrl: string = 'mongodb://localhost:27017/nodemongo';  

  constructor() {
    this.app = express();
    this.config();
    this.mongoSetup();
  }
  
  private mongoSetup(): void{
    mongoose.Promise = global.Promise;
    mongoose.connect(this.mongoUrl, {
      useNewUrlParser: true
    }).then(() => { console.log('connection established')})
    .catch( err => console.log('error', err));    
  }

  private config(): void {
    
    this.route.routes(this.app)
    this.app.use(bodyParser.json()) //Support Json type post data
    this.app.use(bodyParser.urlencoded({extended : false})); //Support URL form-urlencoded type post data
    this.app.use(cors()) //Support cross origin requests

    this.app.use((request: express.Request, response: express.Response, next) => {
      console.log(`${request.method} ${request.path}`);
      next();
    });
  }


}

export default new App().app;
