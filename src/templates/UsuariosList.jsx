import OptionsButtons from "../atoms/OptionsButtons"

function UsuariosList({ users }){


    if (users.length !== 0) return(
        <table className="table table-striped table-sm text-center">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Lastnames</th>

                    <th scope="col">Status</th>
                    <th scope="col">Options</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map( ({ id, identificacion, nombres, apellidos, status }) =>(
                        <tr key={ id }>
                            <td>{ identificacion }</td>
                            <td>{ nombres }</td>
                            <td>{ apellidos }</td>

                            <td>{ status }</td>
                            <td>
                                <OptionsButtons id={ id } link="/users/"  />
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

export default UsuariosList
