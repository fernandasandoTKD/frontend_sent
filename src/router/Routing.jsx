import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PublicLayout } from "../components/layouts/public/PublicLayout"
import { Login } from "../components/user/Login"
import { Register } from "../components/user/Register"
import { PrivateLayout } from "../components/layouts/private/PrivateLayout"
import { Feed } from "../components/publications/Feed"
import { Error404 } from "../components/layouts/Error404"
import { AuthProvider } from "../context/AuthProvider"
import { Config } from "../components/user/Config"
import { People } from "../components/user/People"
import { Logout } from "../components/user/Logout"
import { Following } from "../components/follow/Following"
import { Followers } from "../components/follow/Followers"



export const Routing = () => {
  return (
    <BrowserRouter>
    <AuthProvider>
    <Routes>
            {/* Cargar componentes de la ruta publica */}
            <Route path="/" element={<PublicLayout/>}>
            {/* Por acada ruta hija hago un route con path */}
                <Route index element={<Login/>}></Route>
                <Route path="login" element={<Login/>}></Route>
                <Route path="registro" element={<Register/>}></Route>
            </Route>
            {/* Cargar componentes para la parte privada */}
            <Route path="/rsocial" element={<PrivateLayout />}>
            <Route index element={<Feed />} />
            <Route path='feed' element={<Feed />} />
            <Route path='gente' element={<People />} />
            <Route path='ajustes' element={<Config />} />
            <Route path='logout' element={<Logout />} />
            <Route path='siguiendo/:userId' element={<Following />} />
            <Route path='seguidores/:userId' element={<Followers />} />
          </Route>
            {/* Configurar ruta página error */}
            <Route path="*" element={<Error404/>}></Route>
        </Routes>
    </AuthProvider>
    </BrowserRouter>
  )
}
