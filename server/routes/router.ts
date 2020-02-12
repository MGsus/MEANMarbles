import * as express from "express";
import LoginCtrl from "../controller/loginCtrl";
import AdminCtrl from "../controller/adminCtrl";
import PoolCtrl from "../controller/poolCtrl";

export default function setRoutes(app: any) {
  const router = express.Router();

  const loginCtrl = new LoginCtrl();
  const adminCtrl = new AdminCtrl();
  const poolCtrl = new PoolCtrl();

  router.route("/user/login").post(loginCtrl.login);
  router.route("/admin/login").post(adminCtrl.login);

  router.route("/pool").get(poolCtrl.getAll);
  router.route("/newPool").post(poolCtrl.newPool);

  app.use("/", router);
}
