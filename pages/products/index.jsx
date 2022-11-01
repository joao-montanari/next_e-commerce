import Link from 'next/link';

import Cartao from '../../components/products/Cartao';

export default function Products(){
    return(
        <>
            <h1>Página de produtos</h1>
            <Cartao
                url=""
                nome=""
                preco=""
            />
        </>
    )
}