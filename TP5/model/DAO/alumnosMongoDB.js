import CnxMongoDB from '../DB.js'
import { ObjectId } from "mongodb"


class AlumnosMongoDAO {

    findCalculo = async _ => {
        if(!CnxMongoDB.connection) return []
        try {
            let alumnos = await CnxMongoDB.db.collection('alumnos').find({}).toArray()
            let suma = 0
            for (let index = 0; index < alumnos.length; index++) {
                const element = alumnos[index];
                suma = suma + Number(element.nota)
                
            }

            return {promedio: suma/alumnos.length, cantidad:alumnos.length}
           
        }
        //catch(err) {
        catch {
            return []
        }
    }

    findNotas = async ()  => {
        if(!CnxMongoDB.connection) return []
        try {
            let alumnos = await CnxMongoDB.db.collection('alumnos').find({}).toArray()
            let notas = []
            alumnos.forEach(element => {
                notas.push(element.nota)
            });

            return notas
        }
        //catch(err) {
        catch {
            return []
        }
    }

    saveAlumno = async alumno => {
        if(!CnxMongoDB.connection) return {}

        alumno.nota = parseInt(alumno.nota)
        await CnxMongoDB.db.collection('alumnos').insertOne(alumno)
        return alumno    
    }

}

export default AlumnosMongoDAO
