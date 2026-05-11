//props(App.jsx1)
// Definimos el componente Saludo que recibe props(hijo)
function Saludo(props) {
  return <h1>¡Hola {props.nombre}!</h1>;
}

// Ahora lo usamos en otra parte (componente padre)
function App() {
  return (
    <div>
      <Saludo nombre="Ana" />
      <Saludo nombre="Juan" />
      <Saludo nombre="Carlos" />
    </div>
  );
}

//props desestructuradas ---- (App.jsx2)

// Definimos el componente Tarjeta que recibe props(componente hijo)
function Tarjeta({ titulo, descripcion, puntuacion }) {
  return (
    <div className="tarjeta">
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
      <p> {puntuacion}</p>
    </div>
  );
}

// Ahora lo usamos en otra parte (componente padre)
function App() {
  return (
    <div>
      <Tarjeta titulo="Película 1" />
      <Tarjeta descripcion="Romance" />
      <Tarjeta puntuacion="4.5" />
    </div>
  );
}
export default App;
