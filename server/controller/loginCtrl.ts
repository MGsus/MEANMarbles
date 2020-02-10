import baseCtrl from "./baseCtrl";
import user from "../models/user";

export default class loginCtrl extends baseCtrl {
  model = user;

  login = (req, res) => {
    this.model.findOne({ nickname: req.body.nickname }, (err, rslt) => {
      if (!rslt) return res.sendStatus(403);
      // else if () { // validacion del codigo de sesion
      res.status(200).json({ message: "OK" });
      // }
    });
  };
}
