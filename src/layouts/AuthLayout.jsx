import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AuthLayout = () => {
  const { auth, cargando } = useAuth();

  // if (cargando) return "";

  // if (auth?._id) return;
  return (
    <>
      {cargando ? (
        <p>Cargando...</p>
      ) : auth?._id ? (
        <Navigate to={"/proyectos"} replace={true} />
      ) : (
        <main className="container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center">
          <div className="md:w-2/3 lg:w-2/5">
            <Outlet />
          </div>
        </main>
      )}
    </>
  );
};

export default AuthLayout;
