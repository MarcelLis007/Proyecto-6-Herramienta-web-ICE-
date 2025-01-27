import { useState } from "react";
import "./App.css";

function App() {
  const [selectedEmprendedor, setSelectedEmprendedor] = useState(null);

  const handleRedirect = (nombre) => {
    setSelectedEmprendedor(nombre);
    // Aquí puedes agregar la lógica para redirigir a otro apartado, por ejemplo:
    alert(`Redirigiendo a la sección de: ${nombre}`);
  };

  // Datos de ejemplo para los emprendedores
  const emprendedores = [
    {
      fechaRegistro: "2024-03-09",
      nombre: "Yoongi Min",
      detalles: {
        edad: "28 años",
        nivelEstudio: "Universitario",
        sueldo: "1000-1500",
        empleadosHombres: 7,
        empleadosMujeres: 5,
      },
    },
    {
      fechaRegistro: "2024-04-12",
      nombre: "Seok Seok",
      detalles: {
        edad: "32 años",
        nivelEstudio: "Maestría",
        sueldo: "1200-1700",
        empleadosHombres: 4,
        empleadosMujeres: 3,
      },
    },
    {
      fechaRegistro: "2024-01-22",
      nombre: "Gaby Castillo",
      detalles: {
        edad: "25 años",
        nivelEstudio: "Universitario",
        sueldo: "1000-1300",
        empleadosHombres: 2,
        empleadosMujeres: 3,
      },
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">CENTRO DE EMPRENDIMIENTOS UNIANDES</h1>
      </header>

      <div className="App-body">
        <aside className="App-sidebar">
          <button className="sidebar-button">Histórico Emprendedores</button>
          <button className="sidebar-button">Nuevo Registro</button>
          <button className="sidebar-button">Encuesta</button>
        </aside>

        <main className="App-main">
          <h1 className="App-main">HISTÓRICO DE EMPRENDIMIENTOS</h1>
          <table className="App-table">
            <thead>
              <tr>
                <th>Fecha Registro</th>
                <th>Nombre Emprendedor</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {emprendedores.map((emprendedor, index) => (
                <tr key={index}>
                  <td>{emprendedor.fechaRegistro}</td>
                  <td>{emprendedor.nombre}</td>
                  <td>
                    <button
                      className="action-button"
                      onClick={() => handleRedirect(emprendedor.nombre)}
                    >
                      Ver Detalles
                    </button>
                    <button
                      className="action-buttonRep"
                      onClick={() => handleRedirect("Reporte General")}
                    >
                      Ver Reporte General
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className="action-buttonEmp"
            onClick={() => handleRedirect("Añadir Emprendedor")}
          >
            Añadir Emprendedor
          </button>
          {selectedEmprendedor && (
            <div className="selected-emprendedor">
              <h3>Detalles de: {selectedEmprendedor}</h3>
              {/* Mostrar detalles del emprendedor seleccionado */}
              {emprendedores
                .filter(
                  (emprendedor) => emprendedor.nombre === selectedEmprendedor
                )
                .map((emprendedor) => (
                  <table key={emprendedor.nombre} className="details-table">
                    <thead>
                      <tr>
                        <th>Edad</th>
                        <th>Nivel de Estudio</th>
                        <th>Rango de Sueldo</th>
                        <th>Empleados Hombres</th>
                        <th>Empleados Mujeres</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{emprendedor.detalles.edad}</td>
                        <td>{emprendedor.detalles.nivelEstudio}</td>
                        <td>{emprendedor.detalles.sueldo}</td>
                        <td>{emprendedor.detalles.empleadosHombres}</td>
                        <td>{emprendedor.detalles.empleadosMujeres}</td>
                      </tr>
                    </tbody>
                  </table>
                ))}
            </div>
          )}
        </main>
      </div>

      <footer className="App-footer">
        <p>&copy; 2025 GAMARSIS</p>
      </footer>
    </div>
  );
}

export default App;
