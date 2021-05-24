import { Router } from 'express';
import UserFileController from '../controllers/userFile';

const userFileRouter = () => {
    const router = Router();
    const controller = UserFileController();
    router
        .route('/')
        .get(controller.getAllUserFile)
        .post(controller.postUserFile);
    router
        .route('/:id')
        .get(controller.getUserFileById)
        .put(controller.putUserFileById)
        .delete(controller.deleteUserFileById);
    return router;
};

export default userFileRouter;
