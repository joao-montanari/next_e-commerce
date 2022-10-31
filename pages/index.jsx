import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Home.module.css';
import CardPag from '../components/CardPag';
import Card from '../components/Card';
import LayoutCards from '../components/LayoutCards';

export default function Home() {
  return (
    <>
      <Head>
        <title>Página Inicial</title>
        <meta name="keyworkds" content="Roupas, Eletroeletrônciso, acessórios"></meta>
        <meta name="description" content="Encontre o que você quer comprar"></meta>
      </Head>
      <div className={styles.container}>
        <h1>Parte para as imagens</h1>
      </div>
      <CardPag />
      <LayoutCards />
    </>
  )
}
