import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PublicLayout } from "../components/layouts/public/PublicLayaout"
import { Login } from "../components/user/Login"
import { Register } from "../components/user/Register"
import { PrivateLayout } from "../components/layouts/private/PrivateLayout"
import { Feed } from "../components/publications/Feed"



export const Routing = () => {
  return (
    <BrowserRouter>
        <Routes>
            {/* Cargar componentes de la ruta publica */}
            <Route path="/" element={<PublicLayout/>}>
            {/* Por acada ruta hija hago un route con path */}
                <Route index element={<Login/>}></Route>
                <Route path="login" element={<Login/>}></Route>
                <Route path="registro" element={<Register/>}></Route>
            </Route>
            {/* Cargar componentes para la parte privada */}
            <Route path="/rsocial" element={<PrivateLayout/>}>
            <Route index element={<Feed/>}></Route>
            <Route path="feed" element={<Feed/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
