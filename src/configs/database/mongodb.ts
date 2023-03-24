import mongoose from "mongoose";
import config from '../env';

const HOST = config.mongodbhost as string
const connect_mongodb = async () => {
    try {
        const connected = await mongoose.connect(HOST, { dbName: (config.mongodbname as string) })
        console.log(`Connected to Mongodb >_ Happy Coding . . . `);

    } catch (error) {
        throw new Error(`Couldn't connect to database: ${error}`)
    }
}
export default connect_mongodb; 