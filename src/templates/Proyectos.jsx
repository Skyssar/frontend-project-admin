import { useState } from "react"
import ProjectsList from "./ProjectsList"
import { Link } from "react-router-dom"

const data = [
    {
        id: 1,
        nombre: "Desarrollo Aplicativo Web",
        periodo: "2021-2",
        descripcion: "Desarrollar una herramienta web con posibilidades infinitas... bla bla bla...",
        tipo: "Ingeniería aeroespacial",
        objetivos: {
            general: "Dominar el universo",
            especificos: [
                {value: "Encontrar alternativas al cambio climático"},
                {value: "Fomentar el desarrollo de la carrera espacial"},
                {value: "Colonizar el planeta vecino Marte"}
            ]
        },
        presupuesto: {
            asignado: 15000000,
            ejecutado: 20000,
        },
        fecha_inicial: new Date("2021-09-04T08:00:00"),
        fecha_final: new Date("2021-11-04T08:00:00"),
        director: [
            {documento: 1003458251, fecha_ingreso: new Date(), horas_proyecto: 1800}
        ],
        estado: "ejecución", // [EJECUCIÓN, INICIO, CIERRE]
        fase: "desarrollo", // [INICIO, DESARROLLO, DOCUMENTACIÓN, ENTREGA, FINALIZACIÓN]
        avances: [
            {documento: 1003458261, fase: "ejecucion", reporte: "iniciamos etapa 1", fecha_reporte: new Date(), observacion: "xxx"},
            {documento: 1003458262, fase: "ejecucion", reporte: "iniciamos etapa 2", fecha_reporte: new Date(), observacion: "yyy"}
        ],
        miembros: [
            {documento: 1003458251, fecha_ingreso: new Date(), rol: "lider investigador"},
            {documento: 1003458262, fecha_ingreso: new Date(), rol: "estudiante investigador"},
            {documento: 1003458264, fecha_ingreso: new Date(), rol: "estudiante investigador"}
        ]
    },
    {
        id: 2,
        nombre: "Desarrollo Aplicativo Móvil",
        periodo: "2021-2",
        descripcion: "Desarrollar una aplicación para Android de ...",
        tipo: "Ingeniería de sistemas",
        estado: "cierre", 
        fase: "finalizacion", 
    },
    {
        id: 3,
        nombre: "Proyecto para el monitoreo cardiovascular",
        periodo: "2020-1",
        descripcion: "Diseñar una herramienta basada en el uso de smartbands para el monitoreo del riesgo ...",
        tipo: "Medicina",
        estado: "ejecución", 
        fase: "documentación", 
    },
    

]

function Proyectos(){
    
    const [busqueda, setBusqueda] = useState("")
    const [projects, setProjects] = useState(data)

    function searchProject() {
        const projectsFiltered = data.filter(project => project.nombre.toLowerCase().includes(busqueda.toLowerCase()))
        setProjects(projectsFiltered)
    }

    return (
        <div>
            <div className="d-flex mb-3">
                <form className="d-flex">
                    <input 
                        type="search" 
                        className="form-control me-2" 
                        id="inputUserSearch" 
                        placeholder="Type project name..." 
                        onChange={ e => setBusqueda(e.target.value) }
                        />
                    <button 
                        type="button" 
                        className="btn btn-primary"
                        onClick={ searchProject }
                    > Search
                    </button> 
                    
                </form>
                <div className="ms-auto">
                    <Link
                        className="btn btn-outline-success"
                        to="/new-project"
                    >
                        Nuevo proyecto
                    </Link>
                </div>
            </div>
            <ProjectsList projects={projects} />
        </div>
       
    )
}

export default Proyectos;


