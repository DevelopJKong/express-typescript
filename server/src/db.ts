import mongoose from "mongoose";

mongoose.connect(String(process.env.DB_URL)); // 설정점검 필요

const db = mongoose.connection;

const handleOpen = () => console.log("db connected");
const handleError = (error:Error) => console.error("db Error!",error);

db.on("error",handleError);
db.once("open",handleOpen);


