import React from "react"
import "bootswatch/dist/flatly/bootstrap.min.css"

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


import ProjectCreate from './components/ProjectCreate'
import UsersList from './components/UsersList'

import ProjectsList from './templates/ProjectsList'
import CreateProject from './templates/CreateProject'
import Usuarios from './templates/Usuarios'
import CreateUser from './templates/CreateUser'
import UpdateUser from './templates/UpdateUser'
import Proyectos from "./templates/Proyectos"

import { Navbar } from './components/Navbar'



function App() {
  return (
    <Router>
      <Navbar/>
      <div className="container mt-3">

        <Switch>

          <Route exact path="/" component={ Proyectos }/>
          <Route exact path="/new-project" component={ CreateProject }/>
          <Route exact path="/users" component={ Usuarios }/>
          <Route exact path="/users/:id" component={ UpdateUser }/>
          <Route exact path="/projects" component={ Proyectos}/>
          <Route exact path="/create-project" component={ CreateProject }/>
          <Route exact path="/userslist" component={ Usuarios }/>
          <Route exact path="/new-user" component={ CreateUser }/>

        </Switch>
      </div>
      
    </Router>
    
  );
}

export default App;
