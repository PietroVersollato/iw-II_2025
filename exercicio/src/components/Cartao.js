function Cartao(props){
    return(
        <div>
            <h2>{props.nomecompleto}</h2>
            <p>{props.profissao}</p>
            <p>Olá meu nome é {props.nome}, tenho 16 anos e estudo na ETEC Maria Cristina Medeiros</p>
        </div>
    )
}

export default Cartao