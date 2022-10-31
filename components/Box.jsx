import Styles from '../styles/Box.module.css';
import Image from 'next/image';

export default function Box(){
    return(
        <div className={Styles.container}>
            <div className={Styles.child}>
                <Image
                    id="caminhao"
                    src="/img/icons/caminhao.ico"
                    width={60}
                    height={60}
                />
                <label> <b> FRETE GRÁTIS </b> </label>
                <p>Em até 10 vezes sem juror</p>
            </div>
            <div className={Styles.child}>
                <Image
                    src="/img/icons/seguro.ico"
                    width={60}
                    height={60}
                />
                <label htmlFor='desc'> <b> SITE SEGURO </b> </label>
            </div>
            <Image
                src="/img/icons/conversa.ico"
                width={60}
                height={60}
            />
            <label> <b> ATENDIMENTO </b> </label>
            <Image
                src="/img/icons/moedas.ico"
                width={60}
                height={60}
            />
            <label> <b> CLUBE DE VANTAGENS </b> </label>
            <Image
                src="/img/icons/cartao.ico"
                width={60}
                height={60}
            />
            <label> <b> PARCELAMENTO </b> </label>
        </div>
    )
}