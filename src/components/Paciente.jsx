export function Paciente({ paciente, setPaciente,deletePaciente }) {
  const { nombre, propietario, email, alta, sintomas } = paciente;

  return (
    <div className="text-start font-bold bg-white mx-3 mb-3 px-5 py-5 rounded-xl">
      <p className="mb-2 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="mb-2 text-gray-700 uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="mb-2 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="mb-2 text-gray-700 uppercase">
        Alta: <span className="font-normal normal-case">{alta}</span>
      </p>
      <p className="mb-2 text-gray-700 uppercase">
        Síntomas: <span className="font-normal normal-case">{sintomas}</span>
      </p>
      {/* BOTONES */}
      <div className="flex justify-between mt-5">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setPaciente(paciente);
          }}
        >
          Editar
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => deletePaciente(paciente)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
