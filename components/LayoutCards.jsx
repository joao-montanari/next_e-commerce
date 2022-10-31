import Styles from '../styles/Card.module.css';
import Link from 'next/link';
import Card from './Card';

export default function LayoutCards(){
    return(
        <div className={Styles.container}>
            <div className={Styles.child}>
                <Card nome="Bicicleta" />
                <Card />
                <Card />
                <Card />
            </div>
            <div className={Styles.child}>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <button><Link href= '/products' > <a> mais produtos </a> </Link></button>
        </div>
    )
}