import Styles from '../../styles/aboutUs/Box.module.css';

import Image from 'next/image';

export default function Box(){
    return(
        <div className={Styles.container}>
            <Image
                src="/img/icons/canva.png"
                width={100}
                height={100}
            />
            <Image
                src="/img/icons/css.png"
                width={100}
                height={100}
            />
            <Image
                src="/img/icons/next.png"
                width={100}
                height={100}
            />
            <Image
                src="/img/icons/vercel.png"
                width={100}
                height={100}
            />
        </div>
    )
}