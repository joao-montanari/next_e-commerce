import Styles from '../../styles/home/LayoutWallpaper.module.css';
import Image from 'next/image';

export default function LayoutWallpaper(){
    return(
        <div className={Styles.container}>
            <div className={Styles.child}>
                <Image
                    className={Styles.imagem}
                    src="/img/wallpaper/tablets.png"
                    width={500}
                    height={250}
                    alt="image"
                />
            </div>
            <div className={Styles.child}>
                <Image
                    className={Styles.imagem}
                    src="/img/wallpaper/celulares.png"
                    width={500}
                    height={250}
                    alt="image"
                />
            </div>
        </div>
    )
}