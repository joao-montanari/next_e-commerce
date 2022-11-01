import Styles from '../../styles/aboutUs/Project.module.css';

export default function Project(){
    return(
        <div className={Styles.container}>
            <h2>Sobre o Projeto</h2>
            <hr />
            <div className={Styles.child}>
                <div className={Styles.content}>
                    <p>
                        O projeto se trata de um e-commerce, o site se baseia na ideia de se assemelhar com 
                        sites como o Mercado Livre, Submarino entre outros. Assim se tratando de um centro 
                        comercial que vende uma diversidade muito grande de produtos, não se limitando a uma 
                        tecnologia ou categoria específica.
                    </p>
                    <p>
                        Para o desenvolvimento do mesmo foi utilizado o Next, um framework baseado na bibliotaca 
                        React do JavaScript. Escolhemos esta tecnologia pois o Next vem demonstrado grandes atualizações 
                        que seguem os requisitos do mercado para a atualidade, atualmente o mesmo se encontra na versão 13.0 
                        apresentando ferramentas poderosas. Outra plataforma utilizada foi o Canva, para o dimensionamento e 
                        modelamento de imagens e estilização do site, desta forma, criando um conteudo criativo e atrativo para 
                        o público. Tudo isso integrado com o CSS das páginas para entregar um site dinámico e interessante.
                    </p>
                </div>
                <div className={Styles.con}>
                    <div className={Styles.card}>
                        <label><b>Vercel Δ</b></label>
                    </div>
                    <div className={Styles.card}>
                        <label><b>Next Js</b></label>
                    </div>
                </div>
            </div>
        </div>
    )
}