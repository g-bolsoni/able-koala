import React from "react"
import Link from 'next/link'
import Image from 'next/image'
import styles from './style.module.sass'
import logo from './images/logos/2.png'

export default function Footer() {
  return (
    <>
        <nav className={styles.header}>
            <div className={styles.logo}>
                <Image
                    src={logo}
                    alt="Picture of the author"
                    width={200}
                    height={200}
                    className={styles.logo_img}
                />
            </div>

            <div className={styles.menu}>
                <ul className={styles.links}>
                    <li className={styles.link}><Link href="/home">Home</Link></li>
                    <li className={styles.link}><Link href="/about-us">About Us</Link></li>
                    <li className={styles.link}><Link href="/services">Services</Link></li>
                    <li className={styles.link}><Link href="/carrers">Carrers</Link></li>
                    <li className={styles.link}><Link href="/contact-us">Contact Us</Link></li>
                </ul>
            </div>
            <div className={styles.contact}>
                <Link href="mailto:info@ablekoala.com.au" className={styles.email_link}>
                    e info@ablekoala.com.au
                </Link>
            </div>
            
        </nav>
    </>
  )
}
