import { Navigate, Outlet } from 'react-router-dom';
import { HeaderPub } from './HeaderPub';
import useAuth from '../../../hooks/useAuth';

const { auth } = useAuth();
export const PublicLayout = () => {
  return (
    <>
      {/* Menú de Navegación Principal */}
      <HeaderPub />
      {/* Contenido Principal */}
      <section className='layout__content'>
        { !auth._id ? 
          <Outlet />
          : 
          <Navigate to="/rsocial"/>
        }
      </section>
    </>
  )
}