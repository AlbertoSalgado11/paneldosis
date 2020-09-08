import {Request, Response } from 'express';


import poolDB from '../database';

class MascotasController{

    async list (req: Request, res: Response) {
        const games = await poolDB.query('SELECT m.id_mascotas, u.nombre AS nombreUsuario, m.nombre, g.origen AS genero, r.origen AS raza, m.ciudad, m.pais, m.active FROM mascotas m LEFT JOIN razas r ON m.id_raza = r.id_razas LEFT JOIN mascotas_generos g ON m.id_genero = g.id_generos LEFT JOIN usuarios u ON m.usuario_id = u.id_usuario')
          res.json(games);
      }

      async obtenerUno (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
       const games = await poolDB.query( 'SELECT * FROM mascotas WHERE id_mascotas = ?',[id]);
        
       if(games.length > 0){
           return res.json(games[0]);
       }
        res.status(404).json({text: 'La mascota no existe'});
    }

   async create(req: Request, res: Response): Promise<void>{
       await poolDB.query('INSERT INTO mascotas set ?', [req.body])

        res.json({ message: 'Mascota guardada'});
    }
    async delete(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
       await poolDB.query( 'DELETE FROM mascotas WHERE id_mascotas = ?', [id]);
       res.json({ text: 'Mascota eliminado'});      

    }

   async actualizar(req: Request, res: Response): Promise<void>{

        const { id } = req.params;
        await poolDB.query('UPDATE mascotas set ? WHERE id_mascotas = ?', [req.body, id]);


        res.json({ text: 'Mascota actualizado '});

    }

}

const mascotaController = new MascotasController();
export default mascotaController;