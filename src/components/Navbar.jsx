import { Link } from 'react-router-dom'

export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                        <li className="nav-item ms-4 me-4">
                            <Link className="nav-link" to="/projects">Proyectos</Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link className="nav-link" to="/users">Usuarios</Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link className="nav-link" to="/users">Directores</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

