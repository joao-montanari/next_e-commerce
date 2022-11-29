import Link from 'next/link';

import Styles from '../../styles/login/CardLogin.module.css';

export default function CardLogin(){
    return(
        <div className={Styles.container}>
            <h3>Para poder entrar na sua conta basta preencher os dados abaixo. Caso não tenha uma conta clique em criar conta</h3>
            <div className={Styles.child}>
                <label>Digite o seu Email:</label>
                <input id="email" type="email" placeholder="E-mail"/>
            </div>
            <div className={Styles.child}>
                <label>Digite a sua senha:</label>
                <input id="password" type="password" placeholder="Senha"/>
            </div>
            <Link href="/"><button type="submit" >Continuar</button></Link>
            <Link href="/Cadastro" className={Styles.cadastro} >Criar conta</Link>
        </div>
    )
}