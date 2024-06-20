import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://rvsunil0603:rvs19092000@food-order-app.07jxxxq.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};


