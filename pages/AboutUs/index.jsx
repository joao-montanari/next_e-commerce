import Link from 'next/link';
import Head from 'next/head';

import Container from '../../components/aboutUs/Container';
import Box from '../../components/aboutUs/Box';
import Project from '../../components/aboutUs/Project';

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
            {/* <Project />
            <h1>Tecnologias usadas</h1>
            <Box /> */}
        </>
    )
}