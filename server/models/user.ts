import * as mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  nickname: { type: String, unique: true }
});

const user = mongoose.model("user", userSchema);
export default user;
