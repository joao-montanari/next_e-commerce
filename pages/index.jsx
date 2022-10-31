import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Home.module.css';

import Box from '../components/Box';
import CardPag from '../components/CardPag';
import LayoutCards from '../components/LayoutCards';
import LayoutWallpaper from '../components/LayoutWallpaper';

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
      <Box />
      <LayoutWallpaper />
      <CardPag />
      <LayoutCards />
    </>
  )
}
