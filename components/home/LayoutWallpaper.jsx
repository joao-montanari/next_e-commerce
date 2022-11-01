import Styles from '../../styles/home/LayoutWallpaper.module.css';
import Image from 'next/image';

export default function LayoutWallpaper(){
    return(
        <div className={Styles.container}>
            <div className={Styles.child}>
                <Image
                    className={Styles.imagem}
                    src="/img/wallpaper/tablets.png"
                    width={700}
                    height={350}
                />
            </div>
            <div className={Styles.child}>
                <Image
                    className={Styles.imagem}
                    src="/img/wallpaper/celulares.png"
                    width={700}
                    height={350}
                />
            </div>
        </div>
    )
}