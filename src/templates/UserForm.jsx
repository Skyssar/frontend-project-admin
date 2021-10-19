import { useEffect } from "react"

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

function setUserValues(){
    var nombres = document.getElementById("inputNombres").value
    var apellidos = document.getElementById("inputApellidos").value
    var identificacion = document.getElementById("inputIdentificacion").value
    var celular = document.getElementById("inputCelular").value
    var email = document.getElementById("inputEmail").value
    var usuario = document.getElementById("inputUsuario").value
    var password = document.getElementById("inputPassword").value
    var perfil = document.getElementById("inputPerfil").value
    var status = document.getElementById("inputStatus").value
    var registrado = new Date()

    const user = {
        "nombres": nombres,
        "apellidos": apellidos,
        "identificacion": parseInt(identificacion),
        "celular": parseInt(celular),
        "email": email,
        "username": usuario,
        "password": password,
        "status": status,
        "perfil": perfil,
        "registrado": registrado

    }

    console.log(user)
}

function setFormUpdateValues(user){
    document.getElementById("inputNombres").value = user.nombres
    document.getElementById("inputApellidos").value = user.apellidos
    document.getElementById("inputIdentificacion").value = user.identificacion
    document.getElementById("inputCelular").value = user.celular
    document.getElementById("inputEmail").value = user. email
    document.getElementById("inputUsuario").value = user.username
    document.getElementById("inputPassword").value = user.password
    document.getElementById("inputPerfil").value = user.perfil
    document.getElementById("inputStatus").value = user.status
}

// component
function UserForm({ userId }){
    
    useEffect(() => {
        if (userId){
            const user = data.filter(u => u.id === parseInt(userId))
            console.log(user);
            setFormUpdateValues(user[0]);
        }
    }
    )
    
    return(

        <form id="form"
            className="row g-3 mt-2"
            onSubmit={ e => {
                e.preventDefault();
                setUserValues();
                // window.location.href = "/create-project";
            }}
        >
            <div className="col-md-6">
                <label htmlFor="inputNombres" className="form-label">Nombres</label>
                <input type="text" className="form-control" id="inputNombres" placeholder="Nombres del usuario" required/>
            </div>
            <div className="col-md-6">
                <label htmlFor="inputApellidos" className="form-label">Apellidos</label>
                <input type="text" className="form-control" id="inputApellidos" placeholder="Apellidos del usuario" required/>
            </div>
            
            <div className="col-md-3">
                <label htmlFor="inputIdentificacion" className="form-label">Identificación</label>
                <input type="number" className="form-control" id="inputIdentificacion" required />
            </div>
            <div className="col-md-3">
                <label htmlFor="inputCelular" className="form-label">Celular</label>
                <input type="number" className="form-control" id="inputCelular"required />
            </div>
            <div className="col-md-6">
                <label htmlFor="inputEmail" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
            </div>
            <div className="col-md-4">
                <label htmlFor="inputUsuario" className="form-label">Usuario</label>
                <input type="text" className="form-control" id="inputUsuario" placeholder="Username"/>
            </div>
            <div className="col-md-4">
                <label htmlFor="inputPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
            </div>
            <div className="col-md-2">
                <label htmlFor="inputPerfil" className="form-label">Perfil</label>
                <select id="inputPerfil" className="form-select">
                    <option defaultValue disabled>Choose...</option>
                    <option value="admin">Admin</option>
                    <option value="estudiante">Estudiante</option>
                    <option value="profesor">Profesor</option>
                    <option value="invitado">Invitado</option>
                </select>
            </div>
            <div className="col-md-2">
                <label htmlFor="inputStatus" className="form-label">Status</label>
                <select id="inputStatus" className="form-select">
                    <option defaultValue disabled>Choose...</option>
                    <option value="activo">Activo</option>
                    <option value="inactivo">Inactivo</option>
                </select>
            </div>
            
            <div className="col-12">
                <button className="btn btn-primary">Guardar</button>
            </div>
        </form>
        
    )
}

export default UserForm;