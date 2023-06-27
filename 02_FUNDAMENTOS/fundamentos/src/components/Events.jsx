const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);
        console.log("Ativou o evento!");
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
                {/* Uma coisa interessante de se notar, é que o "handleMyEvent" acima, pode ser escrito também com um "()", ficando "handleMyEvent()", porém, escrito dessa forma, o evento seria ativado quando essa linha de código fosse lida, e não ao clicar no botão, que é o que queremos, por isso escrevemos o "handleMyEvent" assim mesmo, sem os parêntesis */}
            </div>
            <div>
                <button onClick={() => console.log("Clicou!")}>Clique aqui também!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou em sim!")}>Sim</button>
                <button onClick={() => console.log("Clicou em não!")}>Não</button>
            </div>
        </div>
    )
}

export default Events