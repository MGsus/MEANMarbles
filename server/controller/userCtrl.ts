import baseCtrl from "./baseCtrl";
import user from "../models/user";
import poolCtrl from "./poolCtrl";

export default class userCtrl extends baseCtrl {
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

  vote = async function(req: any, res: any) {
    let {
      code: _code,
      greenMarbles: _greenM,
      redMarbles: _redM,
      nickname: user
    } = req.body;
    const _poolCtrl = new poolCtrl();
    let out: any = await _poolCtrl.updatePool(_code, _greenM, _redM, user);
    res.status(200).json(out);
  };
}
