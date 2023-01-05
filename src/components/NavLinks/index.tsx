import React from "react"
import Link from "next/link"
import styles from './style.module.sass'

export const NavLinks = () => (
    <ul className={styles.links}>
        <li className={styles.link}><Link href="/">Home</Link></li>
        <li className={styles.link}><Link href="/about_us">About Us</Link></li>
        <li className={styles.link}><Link href="/services">Services</Link></li>
        <li className={styles.link}><Link href="/carrers">Carrers</Link></li>
        <li className={styles.link}><Link href="/contact_us">Contact Us</Link></li>
    </ul>
)