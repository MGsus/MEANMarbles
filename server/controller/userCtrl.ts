import baseCtrl from "./baseCtrl";
import user from "../models/user";
import poolCtrl from "./poolCtrl";

export default class userCtrl extends baseCtrl {
  model = user;

  login = async function(req: any, res: any) {
    try {
      const nwUser = new user();
      nwUser.nickname = req.body.nickname;
      await nwUser.save().then((rslt: any) => {
        res.status(200).json({ nickname: rslt.nickname });
      });
    } catch (error) {
      console.log(error);
      res.status(500).json(error.errmsg);
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
