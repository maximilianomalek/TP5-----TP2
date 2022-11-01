import ApiAlumnos from '../api/alumnos.js'


class ControladorAlumnos {

    constructor() {
        this.apiAlumnos = new ApiAlumnos()
    }

    getNotas = async (req,res) => {
        res.json( await this.apiAlumnos.obtenerNotas())
    }

    getCalculo = async (req,res) => {
        res.json( await this.apiAlumnos.obtenerCalculo())
    }


    postAlumno = async (req,res) => {
        const alumno = req.body
        res.json(await this.apiAlumnos.guardarAlumno(alumno))
        
    }
}

export default ControladorAlumnos