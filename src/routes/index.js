import { Router } from 'express';
import UserFileController from './userFile.js';

const apiRouter = () => {
    const routes = Router();
    const userFileRouter = UserFileController();
    routes.use('/user-file', userFileRouter);
    return routes;
};

export default apiRouter;
