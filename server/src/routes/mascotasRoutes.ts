import { Router } from 'express';

import  mascotasController  from '../controllers/mascotasController';

class MascotasRoutes{
    public router: Router = Router();
 
    constructor(){
         this.config();
    }
    config(): void {
     this.router.get('/',mascotasController.list);
     this.router.get('/:id',mascotasController.obtenerUno);
     this.router.post('/', mascotasController.create);
     this.router.put('/:id', mascotasController.actualizar);
     this.router.delete('/:id', mascotasController.delete);
    }
 }

 const mascotasRoutes = new MascotasRoutes();
export default mascotasRoutes.router;