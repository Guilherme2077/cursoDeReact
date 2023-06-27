import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Sejam todos bem vindos ao Hello-World-2</h1>
      <h2>Conheça o fantástico mundo da programação!</h2>
      <p><strong>node_modules</strong>: Onde as dependências do projeto ficam;<br /><strong>public</strong>: Assets estáticos e HTML de inicialização;<br /><strong>src</strong>: Onde vamos programar as nossas apps;<br /><strong>src/index.js</strong>: Arquivo de inicialização do React;<br /><strong>src/App.js</strong>: Componente principal da aplicação.</p>
      
    </>
  )
}

export default App
