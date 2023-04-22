import mongoose from "mongoose";

const companiesSchema = new mongoose.Schema({
  company_id: String,
  name: String,
  url: String,
});

const Company = mongoose.model("Company", companiesSchema);
export default Company;
