import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Styles from '../styles/Home.module.css';

import Box from '../components/home/Box';
import CardPag from '../components/home/CardPag';
import LayoutCards from '../components/home/LayoutCards';
import LayoutWallpaper from '../components/home/LayoutWallpaper';

export default function Home() {
  return (
    <div className={Styles.container}>
      <Head>
        <title>Página Inicial</title>
        <meta name="keyworkds" content="Roupas, Eletroeletrônciso, acessórios"></meta>
        <meta name="description" content="Encontre o que você quer comprar"></meta>
      </Head>
      <h1>LIGHT COM</h1>
      {/* <Box />
      <LayoutWallpaper />
      <CardPag />
      <h2 className={Styles.destaque}>Em Destaque</h2>
      <hr />
      <LayoutCards /> */}
    </div>
  )
}
