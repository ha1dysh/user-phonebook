import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { isLoggedIn } from "../redux/authSlice"

export default function PublicRoute({ children }) {
  const isLogged = useSelector(isLoggedIn)

  return <>{isLogged ? <Navigate to="/" /> : children}</>
}
