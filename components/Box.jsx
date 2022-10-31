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
                <div className={Styles.content}>
                    <label> <b> FRETE GRÁTIS </b> </label>
                    <p>Para alguns estados</p>
                </div>
            </div>
            <div className={Styles.child}>
                <Image
                    src="/img/icons/seguro.ico"
                    width={60}
                    height={60}
                />
                <div className={Styles.content}>
                    <label htmlFor='desc'> <b> SITE SEGURO </b> </label>
                    <p>Compre segurança</p>
                </div>
            </div>
            <div className={Styles.child}>
                <Image
                    src="/img/icons/conversa.ico"
                    width={60}
                    height={60}
                />
                <div className={Styles.content}>
                    <label> <b> ATENDIMENTO </b> </label>
                    <p>Via WhatsApp</p>
                </div>
            </div>
            <div className={Styles.child}>
                <Image
                    src="/img/icons/moedas.ico"
                    width={60}
                    height={60}
                />
                <div className={Styles.content}>
                    <label> <b> VANTAGENS </b> </label>
                    <p>Ganhe pontos e troque por produtos</p>
                </div>
            </div>
            <div className={Styles.child}>
                <Image
                    src="/img/icons/cartao.ico"
                    width={60}
                    height={60}
                />
                <div className={Styles.content}>
                    <label> <b> PARCELAS </b> </label>
                    <p>Em até 10 vezes sem juros</p>
                </div>
            </div>
        </div>
    )
}