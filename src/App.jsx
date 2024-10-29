import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Componente from './Components/Componente'
import Propiedades from './Components/Propiedades'
import RenderizadoCondicional from './Components/RenderizadoCondicional'
import ContadorHooks from './Components/COntadorHooks'
import ScrollHooks from './Components/ScrollHooks'
import RelojHooks from './Components/RelojHooks'
import AjaxHooks from './Components/AjaxHooks'
import HooksPersonalizados from './Components/HooksPersonalizados'
import Referencias from './Components/Referencias'
import Formularios from './Components/formularios'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <section>
        <Componente></Componente>
        <Propiedades cadena="esto es una propiedad como cadena de texto" numero={19} booleano={true}/>
        <RenderizadoCondicional></RenderizadoCondicional>
        <ContadorHooks/>
        <ScrollHooks/>
        <RelojHooks/>
        <AjaxHooks/>
        <HooksPersonalizados/>
        <Referencias/>
        <Formularios/>
      </section>
      <section>

      </section>
    </>
  )
}

export default App
