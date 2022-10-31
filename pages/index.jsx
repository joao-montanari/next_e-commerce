import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Styles from '../styles/Home.module.css';

import Box from '../components/Box';
import CardPag from '../components/CardPag';
import LayoutCards from '../components/LayoutCards';
import LayoutWallpaper from '../components/LayoutWallpaper';

export default function Home() {
  return (
    <div className={Styles.container}>
      <Head>
        <title>Página Inicial</title>
        <meta name="keyworkds" content="Roupas, Eletroeletrônciso, acessórios"></meta>
        <meta name="description" content="Encontre o que você quer comprar"></meta>
      </Head>
      <h1>Carrosel</h1>
      <Box />
      <LayoutWallpaper />
      <CardPag />
      <h1 className={Styles.destaque}>Em Destaque</h1>
      <hr />
      <LayoutCards />
    </div>
  )
}
