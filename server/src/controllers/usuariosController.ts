import {Request, Response } from 'express';

import poolDB from '../database';

class UsuariosController{

    async list (req: Request, res: Response) {
        const usuarios = await poolDB.query('SELECT * FROM usuarios')
          res.json(usuarios);
      }



}

const usuarioController = new UsuariosController();
export default usuarioController;