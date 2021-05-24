import { mongo, mongoDBConnection, env } from '../config';
import mongoose from 'mongoose';

// Use ES6 Promises for mongoose
mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);

if (env === 'production') {
    // Using mongoose to connect to MLAB
    //database(Create new database single node free and create new user and set name and password)
    mongoose.connect(
        `mongodb://${mongo.MONGO_USER}:${mongo.MONGO_PW}@ds161630.mlab.com:61630/passport`
    );
} else {
    mongoose.connect(mongoDBConnection), { useMongoClient: true };
}

// Signal connection
mongoose.connection
    .once('open', function () {
        // console.log('Mongoose ' + 'Connection has been made');
    })
    .on('error', function (error) {
        // console.log('Mongoose ' + 'Connect error', error);
    })
    .on('disconnected', function () {
        // console.log('Mongoose ' + 'Connection disconnected');
    });

export function connect() {
    return new Promise((resolve, reject) => {
        mongoose.connect(mongoDBConnection).then((res, err) => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
}

export function close() {
    return mongoose.disconnect();
}

export default mongoose;
