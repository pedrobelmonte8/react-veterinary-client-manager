import { Paciente } from "./Paciente";
import { useEffect, useState } from "react";

export function ListadoPacientes({
  pacientes,
  setPaciente,
  deletePaciente,
  setAlerta,
}) {
  return (
    <div className="md:w-1/2 lg:w-3/5 border">
      <h2 className="mt-5 text-3xl mb-10 font-bold">
        {" "}
        {pacientes.length ? "Listado de pacientes" : "No hay Pacientes"}{" "}
      </h2>
      <div className="md:overflow-y-auto max-h-[75vh]">
        {pacientes.map((paciente) => {
          return (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              deletePaciente={deletePaciente}
            />
          );
        })}
      </div>
    </div>
  );
}
