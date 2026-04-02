import { connect, Mongoose } from "mongoose";

const mongo_Url = process.env.MONGODB_URL;
console.log(mongo_Url);

if (!mongo_Url) {
    console.log("Mongodb url not found or incorrect ")
}

let cache = global.mongoose
if (!cache) {
    cache = global.mongoose = { conn: null, promise: null }
}

const connectDB = async () => {
    if (cache.conn) {
        return cache.conn
    }
    if (!cache.promise) {
        cache.promise = connect(mongo_Url!).then((c) => c.connection)
    }
    try {
        cache.conn = await cache.promise
    } catch (error) {
        console.error(error)
    }
    return cache.conn
}

export default connectDB;