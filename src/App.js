import MyRoutes from "./routes"
import { BrowserRouter } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <MyRoutes />
    </BrowserRouter>
  )
}

export default App
