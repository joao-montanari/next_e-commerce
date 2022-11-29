import Styles from '../../styles/products/Produtos.module.css';

export default function Cartao(props){
    return(
        <div className={Styles.container}>
            <h2>{props.nome}</h2>
        </div>
    )
}