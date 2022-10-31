import Styles from '../styles/Cabecalho.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Cabecalho(){
    return(
        <div className={Styles.container}>
            <Image src='/img/logo.png' width={60} height={60} alt='Logo' />
            <ul>
                <li> <Link href= '/products' > <a> Produtos </a> </Link> </li>
                <li> <Link href= '/'> <a> Home </a> </Link> </li>
                <li> <Link href= '/about'> <a> Sobre Nós </a> </Link> </li>
                <li> <Link href='/login'> <a> Login </a> </Link> </li>
            </ul>
        </div>
    )
}