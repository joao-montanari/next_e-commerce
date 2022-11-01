import Styles from '../../styles/aboutUs/Container.module.css';

import Link from 'next/link';

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
                    <h4>João Montanari</h4>
                    <ul>
                        <li>Idade: 19</li>
                        <li>Cidade: Campinas</li>
                        <li>Curso: Ciência da Computação</li>
                    </ul>
                </div>
                <div className={Styles.card}>
                    <h4>Eric Britto</h4>
                    <ul>
                        <li>Idade: 18</li>
                        <li>Cidade: Campinas</li>
                        <li>Curso: Ciência da computação</li>
                    </ul>
                </div>
                <div className={Styles.card}>
                    <h4>Kauan Costa</h4>
                    <ul>
                        <li>Idade: 19</li>
                        <li>Cidade: Campinas</li>
                        <li>Curso: Tecnólogo DS</li>
                    </ul>
                </div>
                <div className={Styles.card}>
                    <h4>Wandell Santos</h4>
                    <ul>
                        <li>Idade: 19</li>
                        <li>Cidade: Campinas</li>
                        <li>Curso: Tecnólogo DS</li>
                    </ul>
                </div>
            </div>
            <Link className={Styles.link} href="https://github.com/joao-montanari/next_e-commerce">Repositório do projeto</Link>
        </div>
    )
}