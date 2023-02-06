import { useState, useEffect } from "react";
import { Alerta } from "./Alerta";
import uuid from "react-uuid";

export function Formulario({
  pacientes,
  setPacientes,
  paciente,
  setPaciente,
  alerta,
  setAlerta,
}) {
  const [nombre, setNombre] = useState("");
  const [propietario, setpropietario] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setpropietario(paciente.propietario);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  function vaciarPacienteEditable() {
    setPaciente({});
    resetForm();
  }

  function generarId() {
    return uuid();
  }

  function resetForm() {
    setNombre("");
    setpropietario("");
    setEmail("");
    setAlta("");
    setSintomas("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if ([nombre, propietario, email, alta, sintomas].includes("")) {
      setAlerta([0, "Hay campos vacíos"]);
      return;
    } else {
      setAlerta([1, "Paciente agregado"]);

      const objetoPaciente = {
        nombre,
        propietario,
        email,
        alta,
        sintomas,
      };

      if (paciente.id) {
        //Editando
        objetoPaciente.id = paciente.id;
        const pacientesActualizados = pacientes.map((pacienteMap) =>
          pacienteMap.id === paciente.id ? objetoPaciente : pacienteMap
        );
        setPacientes(pacientesActualizados);
        localStorage.setItem(
          "pacientes",
          JSON.stringify(pacientesActualizados)
        );
        vaciarPacienteEditable();
      } else {
        objetoPaciente.id = generarId();
        const pacientesActualizados = [...pacientes, objetoPaciente];
        setPacientes(pacientesActualizados);
        localStorage.setItem(
          "pacientes",
          JSON.stringify(pacientesActualizados)
        );
      }

      resetForm();
    }
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 border max-h-screen">
      <h2 className="mt-5 text-3xl mb-10 font-bold">
        Seguimiento de Pacientes
      </h2>
      <form
        onSubmit={handleSubmit}
        className="text-start rounded-md shadow-md bg-white p-5 mb-10"
      >
        {/* ERROR */}
        {alerta && <Alerta tipo={alerta[0]} texto={alerta[1]} />}
        {/* CAMPOS */}
        <div>
          <label
            htmlFor="mascota"
            className="block text-gray-700 font-bold uppercase mt-5"
          >
            Nombre Mascota
          </label>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            //onChange={(e) => handleFields(0, e.target.value)}
            id="mascota"
            type="text"
            placeholder="Introduce el nombre"
            className=" p-2 mt-2 border-2 rounded-md w-full focus:border-blue-400"
          ></input>
        </div>
        <div>
          <label
            htmlFor="propietario"
            className="block text-gray-700 font-bold uppercase mt-5"
          >
            Nombre propietario
          </label>
          <input
            value={propietario}
            onChange={(e) => setpropietario(e.target.value)}
            id="propietario"
            type="text"
            placeholder="Introduce el nombre del propietario"
            className=" p-2 mt-2 border-2 rounded-md w-full focus:border-blue-400"
          ></input>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 font-bold uppercase mt-5"
          >
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="text"
            placeholder="Introduce el email"
            className=" p-2 mt-2 border-2 rounded-md w-full focus:border-blue-400"
          ></input>
        </div>
        <div>
          <label
            htmlFor="alta"
            className="block text-gray-700 font-bold uppercase mt-5"
          >
            alta
          </label>
          <input
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
            id="alta"
            type="date"
            placeholder="Introduce la fecha de alta"
            className=" p-2 mt-2 border-2 rounded-md w-full focus:border-blue-400"
          ></input>
        </div>
        <div>
          <label
            htmlFor="sintomas"
            className="block text-gray-700 font-bold uppercase mt-5"
          >
            sintomas
          </label>
          <textarea
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            id="sintomas"
            type="date"
            placeholder="Introduce los sintomas"
            className=" p-2 mt-2 border-2 rounded-md w-full focus:border-blue-400"
          ></textarea>
        </div>
        <div className="flex">
          {" "}
          <input
            type="submit"
            value={paciente.id ? "Editando paciente" : "Agregar paciente"}
            className="mt-5 rounded-md uppercase bg-indigo-500 text-white font-bold p-2 w-full hover:cursor-pointer hover:bg-indigo-700 transition-colors"
          />
          {paciente.id ? (
            <button type="button" className="mt-5 bg-red-400 p-2 ml-2 rounded hover:bg-red-600" onClick={()=>vaciarPacienteEditable()}>
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
}
