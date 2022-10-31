import Link from 'next/link';

export default function Products(){
    return(
        <>
            <h1>Página de produtos</h1>
            <ul>
                <li> <Link href='pants'> <a>Calças</a> </Link> </li>
                <li> <Link href='shirt'> <a>Camisas</a> </Link> </li>
            </ul>
        </>
    )
}