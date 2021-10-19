import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import UsuariosList from "./UsuariosList"

const data = [
    {
        id: 1,
        perfil: "admin",
        identificacion: 1003458251,
        nombres: "Yasar José",
        apellidos: "Cure González",
        celular: 3002245892,
        email: "admin@ejemplo.com",
        username: "admin",
        password: "qwerty",
        status: "activo",
        registrado: new Date()
    },
    {
        id: 2,
        perfil: "estudiante",
        identificacion: 1003458261,
        nombres: "Leonardo",
        apellidos: "Pérez López",
        carrera: "Ingeniería de alimentos",
        celular: 3002245892,
        email: "leo@ejemplo.com",
        status: "activo",
        registrado: new Date()
    },
    {
        id: 3,
        perfil: "estudiante",
        identificacion: 1003458262,
        nombres: "Daniela Sofía",
        apellidos: "Suárez Mendoza",
        carrera: "Ingeniería de sistemas",
        celular: 3002245979,
        email: "dani@ejemplo.com",
        status: "activo",
        registrado: new Date()
    },
    {
        id: 4,
        perfil: "estudiante",
        identificacion: 1003458264,
        nombres: "Adriana Lucía",
        apellidos: "Matorral Burgos",
        carrera: "Psicología",
        celular: 3002245972,
        email: "adri@ejemplo.com",
        status: "inactivo",
        registrado: new Date()
    },
    {
        id: 5,
        perfil: "invitado",
        identificacion: 2756921,
        nombres: "Cristiano Ronaldo",
        apellidos: "Dos Santos Aveiro",
        carrera: "Futbolista",
        celular: 3012245979,
        email: "cr7@ejemplo.com",
        status: "activo",
        username: "cr7siu",
        password: "123456",
        registrado: new Date()
    }

]

function Usuarios() {

    const [busqueda, setBusqueda] = useState("")
    const [users, setUsers] = useState(data)

    function searchUser() {
        const usersFiltered = data.filter(user => user.identificacion.toString().includes(busqueda))
        setUsers(usersFiltered)
    }

    return (
        <div>
            <div className="d-flex mb-3">
                <form className="d-flex">
                    <input 
                        type="search" 
                        className="form-control me-2" 
                        id="inputUserSearch" 
                        placeholder="Type User Id" 
                        onChange={ e => setBusqueda(e.target.value) }
                        />
                    <button 
                        type="button" 
                        className="btn btn-primary"
                        onClick={ searchUser }
                    > Search
                    </button> 
                    
                </form>
                <div className="ms-auto">
                    <Link
                        className="btn btn-outline-success"
                        to="/new-user"
                    >
                        Nuevo usuario
                    </Link>
                </div>
            </div>
            <UsuariosList users={users} />
        </div>
       
    )
}

export default Usuarios