import Styles from '../../styles/Cadastro/Form.module.css';

export default function Form(){
    return(
        <form className={Styles.container}>
            <h1>Cadastre-se no nosso site</h1>
            <div className={Styles.child}>
                <h3>Nome Completo</h3>
                <input type="text" placeholder='Ex: Joao Paulo'/>
            </div>
            <div className={Styles.child}>
                <h3>Data de nascimento</h3>
                <input type="date" />
            </div>
            <div className={Styles.child}>
                <h3>CPF</h3>
                <input type="number" placeholder='___.___.___-__'/>
            </div>
            <div className={Styles.child}>
                <h3>Telefone</h3>
                <input type="number" placeholder='( __ ) _____-____'/>
            </div>
            <div className={Styles.child}>
                <h3>E-mail</h3>
                <input type="email" placeholder='Ex: joao@gmail.com'/>
            </div>
            <div className={Styles.child}>
                <h3>Senha</h3>
                <input type="password" placeholder='Senha'/>
            </div>
            <div className={Styles.child}>
                <h3>Gênero</h3>
                <div className={Styles.generos}>                    
                    <input type="radio" id='feminino' name='genero'/>
                    <input type="radio" id='masculino' name='genero'/>
                    <input type="radio" id='indefinido' name='genero'/>
                </div>
                <div className={Styles.generos}>
                    <p>Feminino</p>
                    <p>Masculino</p>
                    <p>indefinido</p>
                </div>
            </div>
            <button type='submit'>Cadastrar</button>
        </form>
    )
}