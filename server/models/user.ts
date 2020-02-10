import * as mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  nickname: String
});

const user = mongoose.model('User', userSchema);

export default user;
