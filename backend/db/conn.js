const mongoose = require("mongoose");

// const DB = process.env.DATABASE;

// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("connection start"))
//   .catch((error) => console.log(error.message));

const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "userdb",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("Connected Successfully..");
  } catch (err) {
    console.log(err);
  }
};



module.exports = connectDB;