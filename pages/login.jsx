import Head from 'next/head';

import CardLogin from '../components/login/CardLogin';
import ReportProblem from '../components/login/ReportProblem';

export default function Login(){
    return(
        <>
            <Head>
                <title>Login</title>
                <meta name="keyworkds" content="Login, cadastro, esqueci minha senha"></meta>
                <meta name="description" content="Construa uma conta para poder aproveitar o máximo do site"></meta>
            </Head>
            <CardLogin />
            <ReportProblem />
        </>
    )
}