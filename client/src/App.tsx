import Login from "./components/Login"
import Register from "./components/Register"
import TableComponent from "./components/TableComponent"
import { data } from "./data"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useAuth } from "./store/AuthProvider"

function App() {

  const { isLoggedIn } = useAuth();

  const appRoutes = [
    {
      path: "/register",
      element: isLoggedIn ? <TableComponent data={data} /> : <Register />
    },
    {
      path: "/login",
      element: isLoggedIn ? <TableComponent data={data} /> : <Login />
    },
    {
      path: "/",
      element: isLoggedIn ? <TableComponent data={data} /> : <Login />
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
