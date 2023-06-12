import React from "react"
import Link from 'next/link'
import Image from 'next/image'
import styles from './style.module.sass'
import logo from './images/logos/2.png'
import { HiMenu } from "react-icons/hi";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { NavLinks } from "../NavLinks"

export default function Header() {

    const [isActive, setActive] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (screen.width < 992) {
            setIsMobile(true);
        }
    }, [isMobile]);

    const toggleClassMenuBtn = () => {
        setActive(!isActive);
    };
  
  return (
    <nav className={styles.header_container}>
        <div className={`${styles.header} container`}>
            <div className={styles.logo}>
                <Link
                    href='/' 
                    passHref
                >
                    <Image
                        src={logo}
                        alt="Picture of the author"
                        className={styles.logo_img}
                    />
                </Link>
            </div>
            

            <div className={styles.header_section}>
                <div className={styles.menu}>
                    {
                        isMobile && 
                        <button className={styles.btn_menu} onClick={toggleClassMenuBtn}>
                            {isActive ? <AiOutlineClose /> : <HiMenu/>}   
                        </button> 
                    }
                    
                    <div className={isActive ? styles.active : styles.nav_links}>   
                        <NavLinks  onClick={toggleClassMenuBtn} />
                    </div>
                </div>
                <div className={styles.contact}>
                    <Link href={`mailto: ${process.env.NEXT_PUBLIC_EMAIL}`} passHref className={styles.email_link}>
                        {isMobile ? '' : `e ${process.env.NEXT_PUBLIC_EMAIL}`}
                    </Link>
                </div>
    
            </div>
        </div>
    </nav>

  )
}
