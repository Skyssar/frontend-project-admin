import UserForm from "./UserForm"

function UpdateUser({ match }){

    return(
        <div>
            <h2> Editar Usuario </h2>
            <hr />
            <UserForm userId={ match.params.id }/>
        </div>
    )
}

export default UpdateUser;