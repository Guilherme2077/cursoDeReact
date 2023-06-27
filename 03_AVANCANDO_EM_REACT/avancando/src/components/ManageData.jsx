import {useState} from 'react'

const ManageData = () => {

    let someData = 10

    const [number, setNumber] = useState(15)

  return (
    <>    
    <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(number + 7)}>+7</button>
        <button onClick={() => setNumber(number * 3)}>*3</button>
        <button onClick={() => setNumber(number / 2)}>/2</button>
        <button onClick={() => setNumber(number == 0)}>zerar</button>
    </div>
    </>
  )
}

export default ManageData