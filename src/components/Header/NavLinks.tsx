import React from 'react'
import { motion } from 'framer-motion';

export function NavLinks(props) {
  const animateFrom = {opacity: 0, x: -100};
  const animateTo   = {opacity: 1, x: 0};


  return (
      <ul>
          <a href="/"> 
            <motion.li initial={animateFrom} animate={animateTo} transition={{delay:0.1}} onClick={() => props.isMobile && props.closeMobileMenu()} >
              Home
            </motion.li>
          </a>

          <a href="/">
            <motion.li initial={animateFrom} animate={animateTo} transition={{delay:0.2}} onClick={() => props.isMobile && props.closeMobileMenu()} >
                About Us
            </motion.li>
          </a>
            
          <a href="/">
            <motion.li initial={animateFrom} animate={animateTo} transition={{delay:0.3}} onClick={() => props.isMobile && props.closeMobileMenu()} >
              Services
            </motion.li>
          </a>
            
          <a href="/">
            <motion.li initial={animateFrom} animate={animateTo} transition={{delay:0.4}} onClick={() => props.isMobile && props.closeMobileMenu()} >
              Carres
            </motion.li>
          </a>
            
          <a href="/">
            <motion.li initial={animateFrom} animate={animateTo} transition={{delay:0.5}} onClick={() => props.isMobile && props.closeMobileMenu()} >
              Contact Us
            </motion.li>
          </a>
      </ul>
  )
}
