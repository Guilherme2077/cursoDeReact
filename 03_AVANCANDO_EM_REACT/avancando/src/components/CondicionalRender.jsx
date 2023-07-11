import { useState } from "react"

const CondicionalRender = () => {

  const [x] = useState(false)
  const [name, setName] = useState("Pedro")

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Se x for false, vai aparecer isto!</p>}
      {name === "João" ? (
        <div>
          <p>O nome é João</p>
        </div>
      ) : (
        <div>
          <p>O nome é {name}, mas não João. </p>
        </div>
      )}
      <button onClick={() => setName("João")}>Mudar para João</button>
      <br />
      <button onClick={() => setName("Pedro")}>Mudar para Pedro</button>
      <br />
      <button onClick={() => setName("Robson")}>Mudar para Robson</button>
    </div>
  )
}

export default CondicionalRender