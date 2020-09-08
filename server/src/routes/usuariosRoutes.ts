import { Router } from 'express';

import  usuariosController  from '../controllers/usuariosController';

class MascotasRoutes{
    public router: Router = Router();
 
    constructor(){
         this.config();
    }
    config(): void {
     this.router.get('/',usuariosController.list);

    }
 }

 const mascotasRoutes = new MascotasRoutes();
export default mascotasRoutes.router;