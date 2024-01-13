import mongoose from 'mongoose';

async function openAndGetConnection() {
    mongoose.connect(process.env.DB_CONNECTION_STRING).then();
    return mongoose.connection;
}

export default openAndGetConnection;