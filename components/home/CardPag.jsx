import Styles from '../../styles/home/CardPag.module.css'
import Image from 'next/image'

export default function CardPag(){
    return(
        <div className={Styles.container}>
            <label>Pagamento Rápido e seguro</label>
            <Image
                className={Styles.img}
                id='cartao'
                src='/img/icons/cartao.ico'
                width={40}
                height={40}
                alt="cartao"
            />
            <label>Até 10 vezes sem juros</label>
            <Image
                className={Styles.img} 
                src='/img/icons/pagamento.ico'
                width={40}
                height={40}
                alt="pagamento"
            />
            <label>Parcelamento sem cartão</label>
            <Image
                className={Styles.img}
                src='/img/icons/celular.ico'
                width={40}
                height={40}
                alt="celular"
            />
            <label>Via Pix</label>
        </div>
    )
}