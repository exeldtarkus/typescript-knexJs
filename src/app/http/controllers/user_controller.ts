import {Request, Response} from 'express';

const getUser = async (req: Request, res: Response) => {
    res.json({
        me: "name"
    });
}

export {
    getUser
}