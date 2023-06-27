import MyComponent from "./MyComponent";

const FirstComponent = () => { // Olha, comentar assim é extremamente útil

    /* Comentar assim é muito útil também,
    porque você pode comentar por várias linhas diferentes,
    entendeu? */

    return (
        <div>
            <h1>Meu primeiro componente {/*Esse outro comentário é dentro do JSX, só funciona assim.
            Funciona entre linhas também*/}</h1>
            <p>Coisa boa! Meu primeiro componente foi criado!</p>

            <MyComponent/>
        </div>
    )
}

export default FirstComponent;