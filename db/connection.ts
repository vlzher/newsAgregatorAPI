import mongoose from "mongoose";
export function connectDB() {
    const url = process.env.DB_URL;
    if(!url) {
        throw new Error("data base url is not defined");
    }
    mongoose.connect(url);
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
        console.log("MongoDB connected!");
    });
}
