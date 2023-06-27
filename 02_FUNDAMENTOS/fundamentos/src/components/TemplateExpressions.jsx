const TemplateExpressions = () => {

    const nome = "Guilherme" // Aqui vai um breve exemplo de uso de JavaScript
    const beneficio = 500
    const salariob = 1380
    const data = {
        age: 12,
        job: "Programador",
        salary: beneficio + salariob
    }

    return (
        <div>
            <h2>Olá, {nome}, tudo bem?</h2>
            <p>Você atua como: {data.job}<br/>Sua idade é: {data.age}<br/>Seu salário é: R${data.salary}</p>
        </div>
    )
}

export default TemplateExpressions