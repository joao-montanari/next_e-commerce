import Image from 'next/image';

import Styles from '../../styles/products/Prod.module.css';

export default function Card(){
    return(
        <div className={Styles.container}>
            <div className={Styles.exibicao}>
            </div>
            <div className={Styles.descritivo}>
                <h3>Bicicleta South Stark 2021 Aro 29 Alumínio Freio A Disco 24 Marchas Câmbio Importado</h3>
                <p>
                    Distribuído por: Southbike Bicicleta South Stark 2021 - Aro 29 - 24 Marchas - 
                    Freios a Disco - Suspensão Dianteira Informações Técnicas: Modelo: Stark 
                    Gênero: Unissex Quadro Stark 29" em Alumínio Aro Aero 29 Alumínio (parede dupla).
                </p>
                <h4>Ficha técnica</h4>
                <ul>
                    <li>Código: 3151857984</li>
                    <li>Código de barra: 7898907756839</li>
                    <li>Cor: Cinza</li>
                    <li>Gênero: Unissex</li>
                </ul>
                <h4>Avaliação</h4>
                <ul>
                    <li>
                        <Image
                            src="/img/icons/estrela-preenchida.ico" width={20} height={20}
                        />
                        <Image
                            src="/img/icons/estrela-preenchida.ico" width={20} height={20}
                        />
                        <Image
                            src="/img/icons/estrela-preenchida.ico" width={20} height={20}
                        />
                        <Image
                            src="/img/icons/estrela-preenchida.ico" width={20} height={20}
                        />
                        <Image
                            src="/img/icons/estrela-vazia.ico" width={20} height={20}
                        />
                    </li>
                </ul>
            </div>
            <div className={Styles.compra}>
                <h4>R$: 1049.99</h4>
                <p>Em 5x sem juros</p>
                <div className={Styles.local}>
                    <input type="text" placeholder="digite o CEP" />
                    <button>Ok</button>
                </div>
                <button style={Styles.comprar}>Compra</button>
            </div>
        </div>
    )
}