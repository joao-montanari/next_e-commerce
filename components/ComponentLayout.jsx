import Cabecalho from './Cabecalho';
import Footer from './Footer';

export default function ComponentLayout({children}){
    return(
        <>
            <Cabecalho />
            <div>{children}</div>
            <Footer />
        </>
    )
}