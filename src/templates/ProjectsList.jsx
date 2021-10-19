import OptionsButtons from "../atoms/OptionsButtons"

function ProjectsList({ projects }){

    if (projects.length !== 0) return(
        <table className="table table-striped table-sm text-center">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Period</th>
                    <th scope="col">Type</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Fase</th>
                    <th scope="col">Options</th>
                </tr>
            </thead>
            <tbody>
                {
                    projects.map( ({ id, nombre, periodo, tipo, estado, fase }) =>(
                        <tr key={ id }>
                            <td>{ id }</td>
                            <td>{ nombre }</td>
                            <td>{ periodo}</td>
                            <td>{ tipo }</td>
                            <td>{ estado }</td>
                            <td>{ fase }</td>
                            <td>
                                <OptionsButtons />
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
    return(
        <div>
            <h1>There is no data in db</h1>
        </div>
    )
}

export default ProjectsList