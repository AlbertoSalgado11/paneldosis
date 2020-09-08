import {Request, Response } from 'express';

class IndexController{
    index (req: Request, res: Response) {
        res.json({ text: 'API Is /dashboard/mascotas' });
    }
}


export const indexController = new IndexController();