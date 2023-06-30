import {useState} from 'react'

const ListRender = () => {

    const [lista] = useState(["Matheus", "Pedro", "Josias", "Maria"])
    // Quando tem um [] significa que aí será uma lista

  return (
    <div>
        <ul>
            {lista.map((item, i) => (
                <li key={i}>{item}</li>
                // Aqui há uma captação dos elementos da lista gerada como variável
            ))}
        </ul>
    </div>
  )
}

export default ListRender