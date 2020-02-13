import baseCtrl from "./baseCtrl";
import user from "../models/user";
import poolCtrl from "./poolCtrl";

export default class userCtrl extends baseCtrl {
  model = user;

  login = function(req: any, res: any) {
    let { nickname: _nickname, code: _code } = req.body;
    try {
      let out = this.model.findOne({ nickname: _nickname, code: _code });
      res.status(200).json(out.nickname);
    } catch (error) {
      console.error(error);
    }
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
