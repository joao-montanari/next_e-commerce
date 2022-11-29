import Styles from '../styles/Cabecalho.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Cabecalho(){
    return(
        <div className={Styles.container}>
            <Image className={Styles.logo} src='/img/logo.png' width={60} height={60} alt='Logo' />
            <ul>
                <li> <Link href= '/products' > Produtos </Link> </li>
                <li> <Link href= '/'> Home </Link> </li>
                <li> <Link href= '/AboutUs'> Sobre Nós </Link> </li>
                <li> <Link href='/Login'> Login </Link> </li>
            </ul>
        </div>
    )
}