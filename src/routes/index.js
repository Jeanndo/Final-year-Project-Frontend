import React from "react"
import { Route, Switch } from "react-router-dom"
import FileUpload from "../Pages/FileUpload"
import Home from "../Pages/Home"
import Landing from "../Components/Landing/Landing"
import Dashboard from "../Components/dashboard/dashboard"

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/batchprocessing">
          <FileUpload />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    )
  }
}
export default Routes
