import baseCtrl from "./baseCtrl";
import admin from "../models/admin";

export default class adminCtrl extends baseCtrl {
  model = admin;

  login = function(req, res) {
    this.model
      .findOne({ nickname: req.body.nickname })
      .then((_rslt: any) => {
        if (!_rslt) return res.sendStatus(403);
        res.status(200).json({ message: "OK" });
      })
      .catch((_err: any) => {
        if (_err) return console.error(_err);
      });
  };
}
