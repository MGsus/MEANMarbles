import baseCtrl from "./baseCtrl";
import admin from "../models/admin";

export default class adminCtrl extends baseCtrl {
  model = admin;

  login = function(req: any, res: any) {
    try {
      let out = this.model.findOne({ nickname: req.body.nickname });
      res.status(200).json(out.nickname);
    } catch (error) {
      console.error(error);
    }
  };
}
