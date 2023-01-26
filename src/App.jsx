import './App.css';

import Navbar from "../src/components/Navbar"

//Outlet = Serve para reaproveitar a estrutura, para não ter que repetir o código;
//Onde o Outlet for colocado, vai ser onde o conteúdo do router vai ser colocado. Cada página do router será inserida ali;
import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>React Router</h1>
      <Outlet />
      <p>footer</p>
    </div>
  );
}

export default App;
