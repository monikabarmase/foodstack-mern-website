import mongoose  from "mongoose";

export const dbConnection = () => {

    mongoose
      .connect(process.env.MONGO_URI, {
        dbName: "HOTEL_PROJECT",
    })
      .then(() => {
         console.log("Connected to database successfully");
    })
      .catch(err => {
        console.log(`Some error ${err}`);
       });
};