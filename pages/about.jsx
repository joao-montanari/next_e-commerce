import Link from 'next/link';
import Head from 'next/head';

import Container from '../components/aboutUs/Container';

export default function About(){
    return(
        <>
            <Head>
                <title>Sobre nós</title>
                <meta name="keyworkds" content="História, criadores, proposta"></meta>
                <meta name="description" content="Conhecimentos referentes a criação do site de forma geral"></meta>
            </Head>
            <h1>About Us</h1>
            <Container />
        </>
    )
}