import pool from "../models/pool";
import baseCtrl from "./baseCtrl";
import * as bcrypt from "bcrypt";

export default class poolCtrl extends baseCtrl {
  model = pool;

  newPool = function(req: any, res: any) {
    let {
      TotalMarbles: _totalMarbles,
      AvailableMarbles: _avlblMarbles
    } = req.body;
    bcrypt.genSalt(5, function(err: any, salt: any) {
      if (err) res.json(err);
      bcrypt.hash(Date(), salt, function(err: any, hash: any) {
        if (err) return res.json(err);
        else {
          const nwPool = new pool();
          nwPool.code = hash.substring(7, 12);
          nwPool.date = Date();
          nwPool.totalMarbles = _totalMarbles;
          nwPool.availableMarbles = _avlblMarbles;
          nwPool
            .save()
            .then(function() {
              res.json("pool created!");
            })
            .catch(err => {
              console.error(err);
            });
        }
      });
    });
  };
}
