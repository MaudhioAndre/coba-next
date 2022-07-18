import Layout from "../components/Layouts"

import { useEffect } from "react"
import { useRouter } from "next/router"

export default function NotFound(){
    const router = useRouter();

    useEffect(()=> {
        setTimeout(()=> {
            router.push("/")
        }, 2000);
    }, []);

    return (
        <Layout titlePage={'404 NOT FOUND'}>
            <p className='title'>Halaman Tidak ditemukan</p>
        </Layout>
    )
}