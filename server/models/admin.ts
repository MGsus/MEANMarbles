import * as mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  nickname: String,
  code: String
});

const admin = mongoose.model('admin', adminSchema);

export default admin;
