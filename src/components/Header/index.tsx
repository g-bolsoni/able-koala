import { BrowserView, MobileView } from 'react-device-detect';
import styles from './style.module.scss';
import { useState } from 'react';
import { NavLinks } from './NavLinks';
import { BiMenuAltLeft, BiX } from "react-icons/bi";
import Image from 'next/image'
import { motion } from 'framer-motion';

export default function Header() {
    const [open, setOpen] = useState<boolean>(false);
    const rotateFrom = {opacity: 0, x: -100};
    const rotateTo   = {opacity: 1, x: 0};

    const    hamburguerIcon =   <motion.button className={styles.hamburgue} initial={rotateFrom} animate={rotateTo} transition={{delay:0.1}} onClick={() => setOpen(!open)  }>
                                    <BiMenuAltLeft size={30} color="#FFF"  />
                                </motion.button>;
    const   closeIcon       =   <motion.button className={styles.hamburgue} initial={rotateFrom} animate={rotateTo} transition={{delay:0.1}} onClick={() => setOpen(!open)  }>
                                    <BiX size={30} color="#FFF"  />
                                </motion.button>;

    const closeMobileMenu = () => setOpen(false);


  return (    
    <>
        <MobileView className={styles.header_mobile}>
                <div className={styles.categories_mobile}>
                    {!open ? hamburguerIcon : closeIcon}
                    <nav>
                        {open &&  <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} /> }
                    </nav>
                   
                </div>
                <div className={styles.logo}>
                    <Image
                        src="/logos/logo.png" 
                        alt="logo" 
                        width={140} 
                        height={80} 
                    />
                </div>
        </MobileView>
            
        <BrowserView>   
            <div className={styles.container_grid}>        
                <div className="logo">
                    <Image
                        src="/logos/logo.png" 
                        alt="logo" 
                        width={190} 
                        height={100} 
                    />
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
            </div>
        </BrowserView>
    </>
        
    
  )
}
