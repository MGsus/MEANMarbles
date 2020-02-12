import baseCtrl from "./baseCtrl";
import user from "../models/user";

export default class loginCtrl extends baseCtrl {
  model = user;

  login = function(req: any, res: any) {
    this.model.findOne(
      { nickname: req.body.nickname },
      (_err: any, rslt: any) => {
        if (!rslt) return res.sendStatus(403);
        if (_err) return console.error(_err);
        res.status(200).json({ message: "OK" });
      }
    );
  };
}
