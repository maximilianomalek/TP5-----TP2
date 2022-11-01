class AlumnosMemDAO {

    constructor() {
        this.alumnos = [
            { id: '1', nombre: 'Juan',apellido:'Perez', nota: 7 },
            { id: '2', nombre: 'Ana',apellido:'Marquez', nota: 8 },
        ]
    }



    findNotas = async ()  => {
        try {
            let devolver = []
            this.alumnos.forEach(element => {
                devolver.push(element.nota)
            });
            return devolver
        }
        catch {
            return []
        }
    }

    findCalculo = async ()  => {
        try {
            let suma = 0
            for (let index = 0; index < this.alumnos.length; index++) {
                const element = this.alumnos[index];
                suma = suma + element.nota
                
            }

            return {promedio: suma/this.alumnos.length, cantidad:this.alumnos.length}
        }
        catch {
            return {}
        }
    }


    saveAlumno = async alumno => {
        alumno.nota = parseInt(alumno.nota)
        
        const id =  parseInt(this.alumnos[this.alumnos.length-1].id) + 1
        alumno.id = String(id)

        this.alumnos.push(alumno)

        return alumno    
    }

}

export default AlumnosMemDAO
