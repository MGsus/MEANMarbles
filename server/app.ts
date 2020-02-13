import * as express from "express";
import * as path from "path";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as mongoose from "mongoose";
import setRoutes from "./routes/router";

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use("/", express.static(path.join(__dirname, "../public")));

app.set("port", process.env.PORT || 3000);

mongoose.Promise = global.Promise;
mongoose.set("useCreateIndex", true);
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useUnifiedTopology", true);
mongoose
  .connect("mongodb://localhost:27017/pepitas")
  .then((db: any) => {
    console.log(`Connected to DB ${typeof db}`);
    setRoutes(app);
    app.get("/*", (req: any, res: any) => {
      res.sendFile(path.join(__dirname, "../pepitas/index.html"));
    });

    if (!module.parent) {
      app.listen(app.get("port"), () =>
        console.log(`Express listening on port ${app.get("port")}`)
      );
    }
  })
  .catch(err => console.error(err));

export { app };
