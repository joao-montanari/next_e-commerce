import Styles from '../styles/Footer.module.css';

export default function Footer(){
    return(
        <div className={Styles.container}>
            <div className={Styles.child}>
                <div className={Styles.box}>
                    <h1>Light COM</h1>
                    <h3>Um lugar barato e fácil que cabe no seu bolso</h3>
                </div>
                <div className={Styles.box}>
                    <h2>Redes Sociais</h2>
                    <ul>
                        <li> <a href="https://instagram.com" target='__blank'>Instagram</a> </li>
                        <li> <a href="https://twitter.com" target='__blank'>Twitter</a> </li>
                        <li> <a href="https://facebook.com" target='__blank'>Facebook</a> </li>
                    </ul>
                    <h2>Contatos</h2>
                    <ul>
                        <li>Telefone: (19) 99422-1745</li>
                        <li>Email: 202203931415@alunos.unimetrocamp.edu.br</li>
                        <li>Local: Rua Astolfo Perreira, Vila Industrial</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}