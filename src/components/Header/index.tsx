import React from "react"
import Link from 'next/link'
import Image from 'next/image'
import styles from './style.module.sass'
import logo from './images/logos/2.png'
import { HiMenu, HiOutlineMail } from "react-icons/hi";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {

    const [isActive, setActive] = useState(false);
    let isMobile = false

    if (screen.width < 992) {
        isMobile = true
    }

    const toggleClassMenuBtn = () => {
        setActive(!isActive);
    };
  

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
                <button className={styles.btn_menu} onClick={toggleClassMenuBtn}>
                    {isActive ? <AiOutlineClose /> : <HiMenu/>}   
                </button>
                <div className={isActive ? styles.active : null}>
                    <ul className={styles.links}>
                        <li className={styles.link}><Link href="/home">Home</Link></li>
                        <li className={styles.link}><Link href="/about-us">About Us</Link></li>
                        <li className={styles.link}><Link href="/services">Services</Link></li>
                        <li className={styles.link}><Link href="/carrers">Carrers</Link></li>
                        <li className={styles.link}><Link href="/contact-us">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
            <div className={styles.contact}>
                <Link href="mailto:info@ablekoala.com.au" className={styles.email_link}>
                    {isMobile ? <HiOutlineMail /> : 'e info@ablekoala.com.au'}
                </Link>
            </div>
            
        </nav>
    </>
  )
}
