import Layout from "../components/Layouts"

import Image from "next/image"

interface Post {
    id : number
    title : String
    body : String
}

interface BlogProps {
    dataBlog : Post[]
}

export default function blog(props : BlogProps){
    const {dataBlog} = props;

    return (
        <Layout titlePage={'BLOG'}>
            <p className='title'>BLOG</p>
            {/* <div style={{width:'200px', height:'180px'}}> */}
                <Image src="/dio.jpg" alt="img1" width={200} height={180} />
            {/* </div> */}
            <br/>
            {dataBlog.map((data) => (
                <>
                <div key={data.id}>
                    <div><strong>Title</strong> : {data.title}</div>
                    <div><strong>Desc</strong> : {data.body}</div>
                </div>
                <hr/>
                </>
            ))}
        </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts'); 
    const dataBlog = await res.json(); 
    return { 
        props: {dataBlog}
    }
};