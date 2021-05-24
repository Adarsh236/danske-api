import UserFileDB from '../../db/schemas/userFile';
import serialize from './serializer'; // serializer custom to db

const listUserFile = async () => {
    const data = await UserFileDB.find({});
    return serialize(data);
};

const userFileById = async (id) => {
    let i = '_id';
    const data = await UserFileDB.find({ [i]: id.toString() });
    return serialize(data);
};

const addUserFile = async (newData) => {
    const data = await UserFileDB.create(newData);
    return serialize(data);
};

const updateUserFileById = async (id, updatedFile) => {
    const data = await UserFileDB.replaceOne({ ['_id']: id }, updatedFile);
    return serialize(data); // for serializing _ id
};

const removeUserFileById = async (id) => {
    try {
        await UserFileDB.findByIdAndDelete(id);
        return {
            status: 'success',
        };
    } catch (err) {
        return {
            status: 'fail',
        };
    }
};

export {
    listUserFile,
    userFileById,
    addUserFile,
    updateUserFileById,
    removeUserFileById,
};
