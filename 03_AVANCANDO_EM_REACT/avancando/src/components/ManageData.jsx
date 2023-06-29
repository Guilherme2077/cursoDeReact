import {useState} from "react"

const ManageData = () => {

  const [numero, setNumero] = useState(10)

  return (

    <div>
      <p>Força vital de Kakaroto: {numero} pontos</p>
      <button onClick={() => setNumero(3 + numero)}>Treinar</button>
      <button onClick={() => setNumero(numero - 300)}>Lutar com um chefe</button>
      <button onClick={() => setNumero(numero * 5)}>Comer a comida da Bulma</button>
    </div>
  )
}

export default ManageData