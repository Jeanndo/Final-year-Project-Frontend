import React from "react"
import { Route, Switch } from "react-router-dom"
import FileUpload from "../Pages/FileUpload"
import Home from "../Pages/Home"
import Layout from "../Components/Layout"
import Landing from "../Components/Landing/Landing"

class Routes extends React.Component {
  render() {
    return (
      <Layout>
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
        </Switch>
      </Layout>
    )
  }
}
export default Routes
