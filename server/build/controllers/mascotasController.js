"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class MascotasController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield database_1.default.query('SELECT m.id_mascotas, u.nombre AS nombreUsuario, m.nombre, g.origen AS genero, r.origen AS raza, m.ciudad, m.pais, m.active FROM mascotas m LEFT JOIN razas r ON m.id_raza = r.id_razas LEFT JOIN mascotas_generos g ON m.id_genero = g.id_generos LEFT JOIN usuarios u ON m.usuario_id = u.id_usuario');
            res.json(games);
        });
    }
    obtenerUno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield database_1.default.query('SELECT * FROM mascotas WHERE id_mascotas = ?', [id]);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            res.status(404).json({ text: 'La mascota no existe' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO mascotas set ?', [req.body]);
            res.json({ message: 'Mascota guardada' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM mascotas WHERE id_mascotas = ?', [id]);
            res.json({ text: 'Mascota eliminado' });
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE mascotas set ? WHERE id_mascotas = ?', [req.body, id]);
            res.json({ text: 'Mascota actualizado ' });
        });
    }
}
const mascotaController = new MascotasController();
exports.default = mascotaController;
