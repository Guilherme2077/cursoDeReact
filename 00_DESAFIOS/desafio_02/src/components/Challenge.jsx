const Challenge = () => {

    const v1 = 23
    const v2 = 44
    const so = v1 + v2

    return (
        <div>
            <h2>Valor 1: {v1} + Valor 2: {v2}</h2>
            <button onClick={() => console.log(`A soma dos dois valores é: ${so}`)}>Somar valores</button>
        </div>
    )
}

export default Challenge