export function Alerta({ tipo, texto }) {
  if (tipo === 0) {
    return (
      <div role="alert">
        <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
          Error
        </div>
        <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
          <p>{texto}</p>
        </div>
      </div>
    );
  } else {
    if (tipo === 1) {
      return (
        <div role="alert">
          <div className="bg-green-500 text-white font-bold rounded-t px-4 py-2">
            Enviado
          </div>
          <div className="border border-t-0 border-green-400 rounded-b bg-green-100 px-4 py-3 text-green-700">
            <p>{texto}</p>
          </div>
        </div>
      );
    }
  }
}
