import Styles from '../../styles/aboutUs/Container.module.css';

import Link from 'next/link';
import Image from 'next/image';

export default function Container(){
    return(
        <div className={Styles.container}>
            <h1>Equipe de Desenvolvedores</h1>
            <p>
                A equipe é composta por um grupo de 4 pessoas na onde cada um assumiu uma função perante as requisitos
                pedidos. Dividindo as tarefas em design visual, desenvolvimento em Next e produção criativa para o 
                site. Todos ficaram focados no Front-End, uma vez que a intenção é de desenvolver o Back-End em uma 
                próxima fase do e-commerce.
            </p>
            <div className={Styles.child}>
                <div className={Styles.card}>
                    <Image
                        src="/img/devs/joao-montanari.png"
                        width={230}
                        height={115}
                    />
                    <h4>João Montanari</h4>
                    <ul>
                        <li>Idade: 19</li>
                        <li>Cidade: Campinas</li>
                        <li>Curso: Ciência da Computação</li>
                    </ul>
                </div>
                <div className={Styles.card}>
                    <Image
                        src="/img/devs/eric-britto.png"
                        width={230}
                        height={115}
                    />
                    <h4>Eric Britto</h4>
                    <ul>
                        <li>Idade: 18</li>
                        <li>Cidade: Campinas</li>
                        <li>Curso: Ciência da computação</li>
                    </ul>
                </div>
                <div className={Styles.card}>
                    <Image
                        src="/img/devs/kauan-costa.png"
                        width={230}
                        height={115}
                    />
                    <h4>Kauan Costa</h4>
                    <ul>
                        <li>Idade: 19</li>
                        <li>Cidade: Campinas</li>
                        <li>Curso: Tecnólogo DS</li>
                    </ul>
                </div>
                <div className={Styles.card}>
                    <Image
                        src="/img/devs/wandell-santos.png"
                        width={230}
                        height={115}
                    />
                    <h4>Wendell Santos</h4>
                    <ul>
                        <li>Idade: 19</li>
                        <li>Cidade: Campinas</li>
                        <li>Curso: Tecnólogo DS</li>
                    </ul>
                </div>
            </div>
            <button><Link className={Styles.link} href="https://github.com/joao-montanari/next_e-commerce">Repositório do projeto</Link></button>
        </div>
    )
}