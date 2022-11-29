import { useState } from 'react';
import Styles from '../../styles/Cadastro/Form.module.css';

export default function Form(){

    const [nome, setNome] = useState();
    const [nascimento, setNascimento] = useState();
    const [cpf, setCpf] = useState();
    const [telefone, setTelefone] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const sexo = 'indefinido';

    function Post(url, body){
        let request = new XMLHttpRequest()
        request.open('POST', url, true)
        request.setRequestHeader('Content-type', 'application/json')
        request.send(JSON.stringify(body))
        alert(`Usuário ${nome} cadastrado com sucesso!`)
    }

    function cadastrarUsuario(e){
        e.preventDefault()
        let url = 'https://api-trabalho-unimetro.herokuapp.com/api/cadastro';
        let body = {
            "nome" : nome,
            "data_nascimento" : nascimento,
            "cpf" : cpf,
            "telefone" : telefone,
            "email" : email,
            "senha" : senha,
            "genero" : sexo
        }
        Post(url, body)
    }

    return(
        <>
        <form className={Styles.container} onSubmit={cadastrarUsuario}>
            <h1>Cadastre-se no nosso site</h1>
            <div className={Styles.child}>
                <h3>Nome Completo</h3>
                <input
                    type="text"
                    placeholder='Ex: Joao Paulo'
                    onChange={(e) => setNome(e.target.value)}
                />
            </div>
            <div className={Styles.child}>
                <h3>Data de nascimento</h3>
                <input
                    type="date"
                    onChange={(e) => setNascimento(e.target.value)}
                />
            </div>
            <div className={Styles.child}>
                <h3>CPF</h3>
                <input
                    type="number"
                    placeholder='___.___.___-__'
                    onChange={(e) => setCpf(e.target.value)}
                />
            </div>
            <div className={Styles.child}>
                <h3>Telefone</h3>
                <input
                    type="number"
                    placeholder='( __ ) _____-____'
                    onChange={(e) => setTelefone(e.target.value)}
                />
            </div>
            <div className={Styles.child}>
                <h3>E-mail</h3>
                <input
                    type="email"
                    placeholder='Ex: joao@gmail.com'
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className={Styles.child}>
                <h3>Senha</h3>
                <input
                    type="password"
                    placeholder='Senha'
                    onChange={(e) => setSenha(e.target.value)}
                />
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
        </>
    )
}