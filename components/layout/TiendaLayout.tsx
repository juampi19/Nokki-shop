import Head from "next/head"
import { FC, ReactNode } from "react";
import { Navbar, SideMenu } from "../ui";

interface Props {
    titulo: string;
    descripcionPagina: string;
    urlImagen?: string;
    children?: ReactNode;
}


export const TiendaLayout:FC<Props> = ({ children ,titulo, descripcionPagina, urlImagen }) => {
  return (
    <>
        <Head>
            <title>{ titulo }</title>
            <meta name="description" content={ descripcionPagina }/>
            <meta name="og:title" content={titulo}/>
            <meta name="og:description" content={descripcionPagina}/>

            {
                urlImagen && (

                    <meta name="og:image" content={urlImagen}/>
                )
            }
        </Head>


        <nav>
            <Navbar />
        </nav>

        <SideMenu />


        <main style={{
            margin: '80px auto',
            maxWidth: '1440px',
            padding: '0px 30px'
        }}>
            { children }
        </main>

        <footer>
            { /**TODO: Custom Footer */ }
        </footer>
    
    </>
  )
}
