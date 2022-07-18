import {useRouter} from 'next/router'

interface UsersProps {
    dataUsers : Array<any>;
}

export default function User(props : UsersProps){
    const {dataUsers} = props;
    const router = useRouter();
    console.log(dataUsers);

    return (
        <div>
            <p>User</p>
            <div style={{padding:'20px'}}>
            {dataUsers.map((data, index) => (
                <>
                <div key={index} onClick={()=> router.push(`/user/${data.id}`)} style={{cursor:'pointer'}}>
                    <div>{data.name}</div>
                    <div>{data.email}</div>
                </div>
                <hr/>
                </>
            ))}
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users'); 
    const dataUsers = await res.json(); 
    return { 
        props: {dataUsers}
    }};