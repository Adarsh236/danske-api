import {
    listUserFile,
    addUserFile,
    userFileById,
    updateUserFileById,
    removeUserFileById,
} from '../data-access/userFile';

export default () => {
    const getAllUserFile = (req, res, next) => {
        listUserFile()
            .then((data) => {
                res.send(data);
            })
            .catch(next);
    };

    const postUserFile = (req, res, next) => {
        addUserFile(req.body)
            .then((data) => {
                res.send(data);
            })
            .catch(next);
    };

    const getUserFileById = (req, res, next) => {
        //console.log('getUserFileById', req.params.id);
        userFileById(req.params.id)
            .then((data) => {
                res.send(data);
            })
            .catch(next);
    };

    const putUserFileById = (req, res, next) => {
        // console.log('putUserFileById', req.params.id, req.body);
        updateUserFileById(req.params.id, req.body)
            .then((data) => {
                res.send(data);
            })
            .catch(next);
    };

    const deleteUserFileById = (req, res, next) => {
        // console.log('deleteUserFileById', req.params.id);
        removeUserFileById(req.params.id)
            .then((data) => {
                res.send(data);
            })
            .catch(next);
    };

    return {
        getAllUserFile,
        getUserFileById,
        postUserFile,
        putUserFileById,
        deleteUserFileById,
    };
};
