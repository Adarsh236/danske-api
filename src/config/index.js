// Set environment variables
export const env = process.env.NODE_ENV;

// port
export const PORT = process.env.PORT;

// user credentials
export const mongo = {
    MONGO_USER: process.env.MONGO_USER,
    MONGO_PW: process.env.MONGO_PW,
};

const runLocal = 'mongodb://localhost:27017/DanskeAPI';
const runWeb = process.env.MONGODB_URL;

export const mongoDBConnection = runWeb;
