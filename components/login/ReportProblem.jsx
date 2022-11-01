import Styles from '../../styles/login/ReportProblem.module.css';

import Image from 'next/image';

export default function ReportProblem(){
    return(
        <div className={Styles.container}>
            <h4>Reportar Problema</h4>
            <div className={Styles.child}>
                <Image
                    id='celular'
                    src='/img/icons/celular.ico'
                    width={30}
                    height={30}
                />
                <label htmlFor="celular">Roubo ou perda de telefone</label>
            </div>
            <div className={Styles.child}>
                <Image
                    id='pessoa'
                    src='/img/icons/pessoa.ico'
                    width={30}
                    height={30}
                />
                <label htmlFor="pessoa">Roubo de conta</label>
            </div>
        </div>
    )
}