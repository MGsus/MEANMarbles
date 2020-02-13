import * as mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
  user: String,
  redMarbles: Number,
  greenMarbles: Number
});

const poolSchema = new mongoose.Schema({
  code: String,
  date: Date,
  totalPeople: Number,
  marbles: Number,
  results: [resultSchema]
});

const pool = mongoose.model("pool", poolSchema);
export default pool;
