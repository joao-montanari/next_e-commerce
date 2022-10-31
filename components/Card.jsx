import Styles from '../styles/Card.module.css'

export default function Card(props){
    return(
        <div className={Styles.card}>
            <div className={Styles.demonstrativo}>

            </div>
            <div className={Styles.descricao}>
                <ul>
                    <li>{props.nome}</li>
                </ul>
            </div>
        </div>
    )
}