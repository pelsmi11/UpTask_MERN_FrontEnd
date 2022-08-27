import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const RutaProtegida = () => {
  const { auth, cargando } = useAuth();

  // if (cargando) return "";
  return (
    <>
      {cargando ? (
        <p>Cargando...</p>
      ) : auth?._id ? (
        <div className="bg-gray-100">
          <Header />
          <div className="md:flex md:min-h-screen">
            <SideBar />
            <main className="p-10 flex-1 ">
              <Outlet />
            </main>
          </div>
        </div>
      ) : (
        <Navigate to={"/"} replace={true} />
      )}
    </>
  );
};

export default RutaProtegida;
