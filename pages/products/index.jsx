import Link from 'next/link';
import axios from 'axios';

import Cartao from '../../components/home/Card';
import { useState, useEffect } from 'react';
import Card from '../../components/home/Card';

export default function Products(){
    const [produtos, setProdutos] = useState([]);

    useEffect(() =>{
        (async () => {
            const list = [];
            const response = await fetch('https://api-trabalho-unimetro.herokuapp.com/produtos', {
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json()
            
            data.forEach((doc) => {
                list.push({ id: doc.id, nome: doc.nome, img: doc.img, preco: doc.preco, descricao: doc.descricao })
            })
            setProdutos(list)

        })()
    }, []);

    return(
        <>
            <h1>Página de produtos</h1>
            {produtos.map(produto => (
                <Card
                    nome = {produto.nome}
                    url = {produto.img}
                    preco = {produto.preco}
                    descricao = {produto.descricao}
                />
            ))}
        </>
    )
}