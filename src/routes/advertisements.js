import express, { response } from "express";
import Add from "../models/Adds.js";

const addsRoute = express.Router();

const searchAdds = async (request, response) => {
  console.log("Search ads accessed");
  const search = request.query.search;
  const regex = new RegExp(search, "i");
  console.log(search, regex);
  try {
    const adsData = await Add.aggregate([
      {
        $lookup: {
          from: "companies",
          localField: "companyId",
          foreignField: "company_id",
          as: "company",
        },
      },
      { $unwind: "$company" },
      {
        $match: {
          $or: [
            { "company.name": { $regex: regex } },
            { primaryText: { $regex: regex } },
            { headline: { $regex: regex } },
            { description: { $regex: regex } },
          ],
        },
      },
      {
        $project: {
          imageUrl: 1,
          companyName: "$company.name",
        },
      },
    ]);
    response.send({ data: adsData });
  } catch (err) {
    console.error(err);
    response.status(500);
    response.send({ message: "Internal server error" });
  }
};

addsRoute.get("/get-ads", searchAdds);
export default addsRoute;
