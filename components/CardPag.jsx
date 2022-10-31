import Styles from '../styles/CardPag.module.css'
import Image from 'next/image'

export default function CardPag(){
    return(
        <div className={Styles.container}>
            <label>Pagamento Rápido e seguro</label>
            <Image id='cartao' src='/img/icons/cartao.ico' width={40} height={40} />
            <label>Até 10 vezes sem juros</label>
            <Image src='/img/icons/pagamento.ico' width={40} height={40} />
            <label>Parcelamento sem cartão</label>
            <Image src='/img/icons/celular.ico' width={40} height={40}/>
            <label>Via Pix</label>
        </div>
    )
}