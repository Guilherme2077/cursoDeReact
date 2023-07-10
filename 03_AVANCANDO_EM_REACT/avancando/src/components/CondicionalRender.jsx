import { useState } from "react"

const CondicionalRender = () => {

  const [x] = useState(false)

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Se x for false, vai aparecer isto!</p>}
    </div>
  )
}

export default CondicionalRender