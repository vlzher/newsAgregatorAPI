import mongoose from "mongoose";
export function connectDB() {
    const username = "admin";
    const password = "admin";
    const cluster = "newsagregatorapp.6dvptik";
    const dbname = "";

    mongoose.connect(
        `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`
    );


    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
        console.log("MongoDB connected!");
    });
}
