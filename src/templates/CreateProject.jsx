import { useState } from "react"


function CreateProject(){


    function newObjetivoEsp(){

        var newInput = document.createElement('input');
        newInput.setAttribute('type', 'text');
        newInput.setAttribute('class', 'form-control');
        newInput.setAttribute('name', 'objetivoEspecifico');

        var parent = document.getElementById('objetivosEsp');
        parent.appendChild(newInput);

        var objetivosEsp = document.getElementsByName('objetivoEspecifico');
        newInput.setAttribute('placeholder', 'Objetivo especifico '+ objetivosEsp.length);

    }

    function deleteObjetivoEsp(){
        var parent = document.getElementById('objetivosEsp');
        var objetivosEsp = document.getElementsByName('objetivoEspecifico')

        if (objetivosEsp.length > 1){

            var lastNode = objetivosEsp[objetivosEsp.length-1]
            
            if (lastNode.value === ""){
                parent.removeChild(lastNode)
                // console.log(lastNode.value)
            }
            else{
                alert("Mi loco, borre lo que dice el input antes de eliminarlo")
            }
        }

    }

    // function validateForm(){
    //     var form = document.getElementById('form');
    //     var formInputs = form.getElementsByTagName('input'); // HTMLlcollection
    //     for (let input of formInputs){
    //         if (input.value === "") {
    //             input.className = 
    //         } 
    //     }

    // }

    function setProjectValues(){
        var nombre = document.getElementById("inputNombre").value
        var tipo = document.getElementById("inputTipo").value
        var periodo = document.getElementById("inputPeriodo").value
        var descripcion = document.getElementById("inputDescripcion").value
        var objGeneral = document.getElementById("inputObjetivo").value
        var presupAsig = document.getElementById("inputPresupAsig").value
        var presupEjec = document.getElementById("inputPresupEjec").value
        var fechaInicio = document.getElementById("inputInicio").value
        var fechaFin = document.getElementById("inputFin").value
        var estado = document.getElementById("inputEstado").value
        var fase = document.getElementById("inputFase").value


        var objetivosEspArray = document.getElementsByName('objetivoEspecifico')
        var objEspecificos = []
        objetivosEspArray.forEach(obj => objEspecificos.push({ "value": obj.value }))

        const project = {
            "nombre": nombre,
            "periodo": periodo,
            "descripcion": descripcion,
            "tipo": tipo,
            "objetivos": {
                "general": objGeneral,
                "especificos": objEspecificos
            },
            "presupuesto": {
                "asignado": parseInt(presupAsig),
                "ejecutado": parseInt(presupEjec)
            },
            "fecha_inicial": fechaInicio,
            "fecha_final": fechaFin,
            "estado": estado,
            "fase": fase

        }

        console.log(project)
    }

    return(
        <div>
            <h2> Nuevo Proyecto </h2>
            <hr />
            <form id="form"
                className="row g-3"
                onSubmit={ e => {
                    e.preventDefault();
                    setProjectValues();
                    // window.location.href = "/create-project";
                }}
            >
                <div className="col-md-6">
                    <label htmlFor="inputNombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="inputNombre" placeholder="Nombre del proyecto" required/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputTipo" className="form-label">Tipo</label>
                    <input type="text" className="form-control" id="inputTipo" placeholder="Por ej: Ingeniería Aeroespacial"  />
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputPeriodo" className="form-label">Periodo</label>
                    <input type="text" className="form-control" id="inputPeriodo" placeholder="Por ej: 2021-I" />
                </div>

                <div className="col-12">
                    <label htmlFor="inputDescripcion" className="form-label">Descripción</label>
                    <textarea className="form-control" rows="4" id="inputDescripcion" placeholder="Escriba la descripción del proyecto aquí" />
                </div>

                <div className="col-12">
                    <label htmlFor="inputObjetivo" className="form-label">Objetivo General</label>
                    <input type="text" className="form-control" id="inputObjetivo" placeholder="Objetivo general del proyecto" />
                </div>

                <div className="col-12" id="objetivosEsp">
                    <div className="row">
                        <div className="col-md-11">
                            <label htmlFor="inputObjetivosEsp" className="form-label">Objetivos Específicos</label>
                        </div>   
                        <div className="col-md-1">
                            <button
                                type="button"
                                className="btn btn-success btn-sm" 
                                style={{ borderRadius: "100%" }}
                                onClick={ newObjetivoEsp }
                            > +
                            </button>
                            <button
                                type="button"
                                id="btnDeleteInput"
                                className="btn btn-danger btn-sm" 
                                style={{ borderRadius: "100%" }}
                                onClick={ deleteObjetivoEsp }
                            > -
                            </button>
                        </div>
                    </div>
                    <input type="text" className="form-control" id="inputObjetivosEsp" name="objetivoEspecifico" placeholder="Objetivo específico 1" />
                </div>

                <div className="col-md-3">
                    <label htmlFor="inputPresupAsig" className="form-label">Presupuesto asignado</label>
                    <input type="number" className="form-control" id="inputPresupAsig" defaultValue="0"/>
                </div>
                <div className="col-md-3">
                    <label htmlFor="inputPresupEjec" className="form-label">Presupuesto ejecutado</label>
                    <input type="number" className="form-control" id="inputPresupEjec" defaultValue="0" />
                </div>
                <div className="col-md-3">
                    <label htmlFor="inputInicio" className="form-label">Fecha Inicio</label>
                    <input type="date" className="form-control" id="inputInicio"/>
                </div>
                <div className="col-md-3">
                    <label htmlFor="inputFin" className="form-label">Fecha Fin</label>
                    <input type="date" className="form-control" id="inputFin" />
                </div>

                
                <div className="col-md-3">
                    <label htmlFor="inputEstado" className="form-label">Estado del proyecto</label>
                    <select id="inputEstado" className="form-select">
                        <option defaultValue disabled>Choose...</option>
                        <option value="Inicio">Inicio</option>
                        <option value="Ejecución">Ejecución</option>
                        <option value="Cierre">Cierre</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label htmlFor="inputFase" className="form-label">Fase del proyecto</label>
                    <select id="inputFase" className="form-select">
                        <option defaultValue disabled>Choose...</option>
                        <option value="Inicio">Inicio</option>
                        <option value="Desarrollo">Desarrollo</option>
                        <option value="Documentación">Documentación</option>
                        <option value="Entrega">Entrega</option>
                        <option value="Finalización">Finalización</option>
                    </select>
                </div>

                <div className="col-12">
                    <button className="btn btn-primary">Guardar</button>
                </div>
            </form>
        </div>
        
    )
}

export default CreateProject