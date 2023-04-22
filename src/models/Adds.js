import mongoose from "mongoose";

const addsSchema = new mongoose.Schema({
  companyId: String,
  primaryText: String,
  headline: String,
  description: String,
  CTA: String,
  imageUrl: String,
});

const Add = mongoose.model("Add", addsSchema);
export default Add;
