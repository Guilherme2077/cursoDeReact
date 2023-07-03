import {useState} from 'react'

const ListRender = () => {

    const [lista] = useState(["Matheus", "Pedro", "Josias", "Maria"])
    // Quando tem um [] significa que aí será uma lista

    const [users, setUsers] = useState([
      {id: 1, name: "Luís Guilherme", age: 23},
      {id: 2, name: "Cláudio Ferraz", age: 44},
      {id: 3, name: "Márcio Serpa", age: 39}
    ])

    const deleteRandom = () => {
      const randomNumber = Math.floor(Math.random() * 4)

      setUsers((prevUsers) => {
        return prevUsers.filter((user) => randomNumber !== user.id)
      })
    }

  return (
    <div>
        <ul>
            {lista.map((item, i) => (
                <li key={i}>{item}</li>
                // Aqui há uma captação dos elementos da lista gerada como variável
            ))}
        </ul>

        {/* O mais indicado, porém, é fazer de outra forma, em que há IDs, assim: */}
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.age}
            </li>
          ))}
        </ul>
        {/* Aqui, vale a pena lembrar de Banco de Dados, em que o atributo chave (chave única), nesse caso, será o ID. Mas aqui estamos exibindo apenas o nome e a idade, apenas. */}
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender