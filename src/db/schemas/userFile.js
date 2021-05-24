import mongoose from '../connection';

const Schema = mongoose.Schema;
const UserFileSchema = new Schema(
    {
        name: {
            type: [String],
            required: [true, 'Required'],
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        jsonFile: [Schema.Types.Mixed],
    },
    { strict: false }
);

const UserFile = mongoose.model('UserFile', UserFileSchema);

export default UserFile;
