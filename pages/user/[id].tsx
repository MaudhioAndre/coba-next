import Layout from "../../components/Layouts"

import { useRouter } from "next/router"

interface user {
    id : number
    name : String
    email : String
    phone : String
}

interface UserDetailProps {
    user : user;
}

export default function UserDetail(props : UserDetailProps ){
    const router = useRouter();
    // const {id} = router.query;
    const {user} = props;

    return (
        <Layout titlePage={`Hallo!`}>
            {/* <p className='title'>Hallo! {id}</p> */}
            <p className='title'>email : {user.email}</p>
            <p className='title'>phone :  {user.phone}</p>
        </Layout>
    )
}


export async function getStaticPaths(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users'); 
    const dataUsers = await res.json(); 

    const paths = dataUsers.map((user : user) => ({
        params : {
            id : `${user.id}`
        }
    }));

    return {
        paths,
        fallback : false
    }
}


interface GetStaticProps {
    params : {
        id : String
    }
}

export async function getStaticProps(context : GetStaticProps){
    const {id} = context.params;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id ); 
    const user = await res.json(); 

    return {
        props : {
            user
        }
    }
}