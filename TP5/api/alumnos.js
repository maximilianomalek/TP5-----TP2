import config from '../config.js'
import AlumnosFactoryDAO from '../model/DAO/alumnosFactory.js'



class ApiAlumnos {
    constructor() {
        this.alumnosModel = AlumnosFactoryDAO.get(config.MODO_PERSISTENCIA)
    }

    obtenerNotas = async _ => {
        return  await this.alumnosModel.findNotas()
    }

    guardarAlumno = async alumno => {
        return await this.alumnosModel.saveAlumno(alumno)
    }

    obtenerCalculo = async _ => {
        return await this.alumnosModel.findCalculo()
    }
}

export default ApiAlumnos