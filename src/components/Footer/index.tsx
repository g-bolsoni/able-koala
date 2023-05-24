import Image from "next/image";
import React from "react";
import { NavLinks } from "../NavLinks";
import style from './style.module.sass';
import footer_logo from "../../../public/logos/3_cut.png"
import { BsFacebook } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <footer className={style.footer}>
        <section className={style.main}>
          <div className={style.footer_logo}>
            <Image
              src={footer_logo}
              alt="Able Koala"
            />
          </div>
          <div>
            <NavLinks />
          </div>
          <div className={style.contact_detail}>
              <p className={style.footer_title}>Contact Details</p>
              <ul>
                <li><a href={`mailto: ${process.env.NEXT_PUBLIC_EMAIL}`}>{`e ${process.env.NEXT_PUBLIC_EMAIL}`}</a></li>
              </ul>
          </div>
          <div className={style.social_detail}>
              <p className={style.footer_title}>Connect with us</p>
              <ul>
                <li><a href="https://www.facebook.com/able.koala"><BsFacebook size="48px"/></a></li>
              </ul>
          </div>
        </section>
        <aside className={style.aside}>©2022 AbleKoala Care. All Rights Reserved | Privacy Policy| Terms of Use</aside>
      </footer>
    </>
  )
}
