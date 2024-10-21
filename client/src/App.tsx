import Login from "./components/Login"
import Register from "./components/Register"
import TableComponent from "./components/TableComponent"
import { data } from "./data"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  const appRoutes = [
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/",
      element: <TableComponent data={data} />
    }
  ]

  return (
    <div className="h-screen w-screen">
      {
        <Router>
          <Routes>
            {
              appRoutes.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
              ))
            }
          </Routes>
        </Router>
      }
    </div>
  )
}

export default App
