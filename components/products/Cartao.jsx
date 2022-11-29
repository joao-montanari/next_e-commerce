import Image from 'next/image';

import Styles from '../../styles/products/Cartao.module.css';

export default function Cartao(props){
    return(
        <div className={Styles.container}>
            <div className={Styles.demonstrativo}>
                <Image
                    src={props.url}
                    width={140}
                    height={140}
                />
            </div>
            <div className={Styles.child}>
                <h2>{props.nome}</h2>
                <p>{props.descricao}</p>
                <h3>R$: {props.preco}</h3>
            </div>
        </div>
    )
}