import mongoose from "mongoose";



async function connectDb(): Promise<void> {
  try {
    const conection = await mongoose.connect(process.env.NEXT_DB_URL as string, {
      dbName: "portfolio",
    });
    if (conection) {
      console.log(
        "Successfuly Connected Database To The Host : ",
        conection.connection.host,
      );
    }
  } catch (error) {
    console.log(error);
  }
}

export default connectDb;
