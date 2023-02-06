import { useState, useEffect, Fragment } from "react";
import { Header } from "./components/Header";
import "./App.css";
import { ListadoPacientes } from "./components/ListadoPacientes";
import { Formulario } from "./components/Formulario";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});
  const [alerta, setAlerta] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setAlerta(false)
    },3000)
  },[alerta])

  useEffect(() => {
    if (localStorage.getItem("pacientes")) {
      setPacientes(JSON.parse(localStorage.getItem("pacientes")));
    }
  }, []);

  function deletePaciente(paciente) {
    if (confirm("¿Deseas eliminar este registro?")) {
      const arrayActualizado = pacientes.filter(
        (pacienteArray) => pacienteArray.id !== paciente.id
      );
      setPacientes(arrayActualizado);
      setAlerta([1,'Paciente eliminado'])
      localStorage.setItem("pacientes", JSON.stringify(arrayActualizado));
      setPaciente({});
    }
  }

  return (
    <Fragment>
      <Header />
      <div className="mt-4 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
          alerta={alerta}
          setAlerta={setAlerta}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          deletePaciente={deletePaciente}
        />
      </div>
      <div className="App"></div>
    </Fragment>
  );
}

export default App;
