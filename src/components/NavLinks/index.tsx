import React from "react"
import Link from "next/link"
import styles from './style.module.sass'

type NavlinksProps = {
    onClick?: () => void
}
  
export const NavLinks: React.FC<NavlinksProps> = ({ onClick }) => {
    const handleClick = () => {
        onClick();
    };

    return(
        <ul className={styles.links}>
            <li className={styles.link} onClick={handleClick}><Link href="/" passHref>Home</Link></li>
            <li className={styles.link} onClick={handleClick}><Link href="/about_us" passHref>About Us</Link></li>
            <li className={styles.link} onClick={handleClick}><Link href="/services" passHref>Services</Link></li>
            <li className={styles.link} onClick={handleClick}><Link href="/carrers" passHref >Carrers</Link></li>
            <li className={styles.link} onClick={handleClick}><Link href="/contact_us" passHref >Contact Us</Link></li>
        </ul>
    );
};