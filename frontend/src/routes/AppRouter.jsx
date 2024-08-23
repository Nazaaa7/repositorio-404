import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../views/login/Login";
import { Register } from "../views/register/Register";
import { Tareas } from "../views/tareas/Tareas";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import { NuevaTarea } from "../views/tareas/nueva-tarea/NuevaTarea";
import { EditarTarea } from "../views/tareas/editar-tarea/EditarTarea";
import { EliminarTarea } from "../views/tareas/eliminar-tarea/EliminarTarea";
import { Landing } from "../views/Landing/Landing";
import { Aboutus } from "../views/aboutus/Aboutus";
import { Locations } from "../views/locations/Locations";
import  {Donations} from "../views/donations/donations"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Landing/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/locations" element={<Locations/>}/>
        <Route path="/donations" element={<Donations/>}/>
        <Route element={<PublicRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route path="/tareas" element={<Tareas />} />
          <Route path="/tareas/nueva-tarea" element={<NuevaTarea />} />
          <Route path="/tareas/editar-tarea/:id" element={<EditarTarea />} />
          <Route
            path="/tareas/eliminar-tarea/:id"
            element={<EliminarTarea />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
