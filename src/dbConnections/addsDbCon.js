import mongoose from "mongoose";

const db =
  "mongodb+srv://SrinuMeesala:RadheKrishn@cluster0.qexijqt.mongodb.net/AddsDB?retryWrites=true&w=majority";

const connectAddsDb = async () => {
  try {
    mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("AddsDb connected Successfully");
  } catch (error) {
    console.log("Could not connect to AddsDb");
  }
};

export default connectAddsDb;
