import express from 'express'
import ControladorAlumnos from '../controller/alumnos.js'


export class RouterAlumnos {
    constructor() {
        this.router = express.Router()
        this.controladorAlumnos = new ControladorAlumnos()
    }

    start() {
        this.router.post('/', this.controladorAlumnos.postAlumno)
        this.router.get('/notas', this.controladorAlumnos.getNotas)
        this.router.get('/calculo', this.controladorAlumnos.getCalculo)

        return this.router
    }
}
