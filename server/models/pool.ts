import * as mongoose from "mongoose";

const poolSchema = new mongoose.Schema({
  code: String,
  date: Date,
  totalMarbles: Number,
  availableMarbles: Number,
  results: {
    user: { type: String },
    vote: { type: Number }
  }
});

const pool = mongoose.model("pool", poolSchema);
export default pool;
