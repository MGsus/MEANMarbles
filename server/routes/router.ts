import * as express from "express";
import * as LoginCtrl from "../controller/loginCtrl";

export default function setRoutes(app) {
  const router = express.Router();
  
  const loginCtrl = new LoginCtrl();

  router.route("/login").post(loginCtrl.login);

  app.use("/", router);
}
