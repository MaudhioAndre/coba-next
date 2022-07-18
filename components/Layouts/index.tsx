import { ReactNode } from 'react'; 
import Header from '../Header'; 
import Head from 'next/head'

interface LayoutProps {
    children: ReactNode;
    titlePage : String;
}
export default function Layout(props: LayoutProps) {
    const { children, titlePage } = props; 

    return (
        <div>
            <Head>
                <title>Coba-NextJs | {titlePage}</title>
            </Head>
            <Header /> 
            <div>{children}</div>
        </div>
    )
}

