import React, { useState, useEffect, useRef } from 'react';
import styles from './style.module.scss';
import { BiMenuAltLeft } from "react-icons/bi";


export default function Header() {
    const [ismobile, setIsmobile] = useState(false);

    useEffect(() => {
        if(window.screen.width <= 765){
            setIsmobile(true);
        }
    }, [1000]);

  return (

    <div className={styles.container_grid}>

        {ismobile ?
            <>
                <h1>true</h1>
                <div className="logo">
                    <img src="./logos/logo.png" alt="logo" width={190} height={100} />
                </div>
                <div className={styles.informations}>
                    <button className={styles.btn_mail} value="info@ablekoala.com.au">info@ablekoala.com.au</button>
                    <ul className={styles.categories}>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Carres</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </>
         :
            <>
                <h1>false</h1>
                <div className={styles.informations}>
                    <div className="hamburguer">
                        <BiMenuAltLeft size={20} color="#FFF"  />
                    </div>
                    <ul className={styles.categories}>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Carres</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="logo">
                    <img src="./logos/logo.png" alt="logo" width={190} height={100} />
                </div>
            </>
        }
    </div>
  )
}
