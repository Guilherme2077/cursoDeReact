import { useState } from "react"

const Joguin = () => {

    const [sortear, setSortear] = useState(Math.random())

  return (
    <>
    <h2>Tente achar o número correto!</h2>
    <button onClick={() => setSortear(Math.random())}>Sortear</button>
    </>
  )
}

export default Joguin