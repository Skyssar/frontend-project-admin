import React from "react"
import { Link } from "react-router-dom"

function OptionsButtons({ id, link }){
    return(
        <React.Fragment>
            <Link className="btn btn-success" to={ link + id  }>Edit</Link>
            <button className="btn btn-danger">Delete</button>
        </React.Fragment>
    )
}

export default OptionsButtons