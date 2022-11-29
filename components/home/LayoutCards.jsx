import Styles from '../../styles/home/Card.module.css';
import Link from 'next/link';
import Card from './Card';

export default function LayoutCards(){
    return(
        <div className={Styles.container}>
            <div className={Styles.child}>
                <Card
                    nome="Bicicleta"
                    url="/img/produtos/bicicleta.png"
                    preco = {1049.99}
                    descricao="Bike PRO Cinza Novo"
                    frete="Frete Grátis"
                    link="/products/bicicleta"
                />
                <Card
                    nome="Computador"
                    url="/img/produtos/computador.png"
                    preco={1300.45}
                    descricao="Pc SSD 240gb Core I5"
                    link="/products"
                />
                <Card
                    nome="Geladeira"
                    url="/img/produtos/geladeira.png"
                    preco={2284.99}
                    descricao="Consul CRD37 branca"
                    frete="Frete Grátis"
                    link="/products"
                />
                <Card
                    nome="Headset"
                    url="/img/produtos/headset.png"
                    preco={248.99}
                    descricao="Over-ear gamer JBL"
                    link="/products"
                />
                <Card
                    nome="Smart Phone"
                    url="/img/produtos/smartPhone.png"
                    preco={1110.85}
                    descricao="Samsung Galaxy M13"
                    link="/products"
                />
            </div>
            <div className={Styles.child}>
                <Card
                    nome="MacBook Pro"
                    url="/img/produtos/MacBook_Pro.png"
                    preco={6540.05}
                    descricao="Apple Macbook Air"
                    frete="Frete Grátis"
                    link="/products"
                />
                <Card
                    nome="Maquina de Lavar"
                    url="/img/produtos/maquinaLavar.png"
                    preco={2199.26}
                    descricao="Electrolux Essential Care"
                    frete="Frete Grátis"
                    link="/products"
                />
                <Card
                    nome="Microondas"
                    url="/img/produtos/microondas.png"
                    preco={679.99}
                    descricao="Electrolux MEO44"
                    link="/products"
                />
                <Card
                    nome="Mouse"
                    url="/img/produtos/mouse.png"
                    preco={21.82}
                    descricao="sem fio Multilaser MO307"
                    link="/products"
                />
                <Card
                    nome="Sofa"
                    url="/img/produtos/sofa.png"
                    preco={779.99}
                    descricao="Lugares Inglaterra Suede"
                    link="/products"
                />
            </div>
            <button className={Styles.buttonMais}><Link href= '/Products' > mais produtos </Link></button>
        </div>
    )
}