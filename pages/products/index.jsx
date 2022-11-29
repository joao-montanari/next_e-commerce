import Link from 'next/link';
import axios from 'axios';

import Cartao from '../../components/products/Cartao';

export default function Products({ produtos }){
    return(
        <>
            <h1>Página de produtos</h1>
            {/* {produtos.map(produto => (
                <Cartao
                    url=""
                    nome={produto.nome}
                    preco=""
                />
            ))} */}
        </>
    )
}

// export async function getServerSideProps(){
//     const { data } = await axios.get('https://api-trabalho-unimetro.herokuapp.com/produtos')
//     console.log(data)

//     return{
//         props : {
//             produtos : data.results
//         }
//     }
// }