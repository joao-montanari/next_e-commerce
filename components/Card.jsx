import Styles from '../styles/Card.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Card(props){
    return(
        <div className={Styles.card}>
            <div className={Styles.demonstrativo}>
                <Image src={props.url} width={200} height={100} />
            </div>
            <div className={Styles.descricao}>
                <ul>
                    <li> <b> {props.nome} </b> </li>
                    <li className={Styles.preco}>R$: {props.preco}</li>
                    <li>{props.descricao}</li>
                    <li>.<label><b>{props.frete}</b></label></li>
                </ul>
                <button><Link href= "/products" > <a> Detalhes </a> </Link></button>
            </div>
        </div>
    )
}