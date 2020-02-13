import * as express from "express";
import UserCtrl from "../controller/userCtrl";
import AdminCtrl from "../controller/adminCtrl";
import PoolCtrl from "../controller/poolCtrl";

export default function setRoutes(app: any) {
  const router = express.Router();

  const userCtrl = new UserCtrl();
  const adminCtrl = new AdminCtrl();
  const poolCtrl = new PoolCtrl();

  router.route("/user/login").post(userCtrl.login);
  router.route("/user/vote").post(userCtrl.vote);
  router.route("/admin/login").post(adminCtrl.login);

  router.route("/pool").get(poolCtrl.getAll);
  router.route("/newPool").post(poolCtrl.newPool);
  router.route("/showPool").post(poolCtrl.showPool);
  app.use("/", router);
}
