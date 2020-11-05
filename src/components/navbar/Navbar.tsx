import styles from './navbar.module.css'
import Image from 'next/image'

type NavbarProps = {
    
}

export const Navbar = (props: NavbarProps) => {
return (<>
    <nav className={styles.navbar}>
    <Image src="/praetera_logo.png" width="162" height="47" alt="Profile Picture"></Image>
    </nav>
</>)
}