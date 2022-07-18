import Link from 'next/link'
import styles from './Header.module.css'

export default function detail(){
    return (
        <header className={styles['header']}>  
        <ul>
          <li><Link href="/"><a>Home</a></Link></li> 
          <li><Link href="/blog"><a>Blog</a></Link></li>
          <li><Link href="/user/detail"><a>Detail</a></Link></li>
          <li><Link href="/user"><a>User</a></Link></li>
        </ul> 
        <div className={styles['title']}>ini header</div>
      </header>
    )
}