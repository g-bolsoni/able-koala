import Image from "next/image";
import React from "react";
import Carousel from "../components/Carousel"
import Layout from "../components/Layout";
import Tarja from "../../public/banners/tarja_.png"

import InfoImage from "../../public/banners/p1_1.png"
import Testimonial from "../components/Testimonial";

export default function Home() {
  return (
    <>
      <Layout>
        <main>
          <Carousel />
          <div>
            <Image
              src={Tarja}
              width={1920}
              height={132}
              layout="responsive"
              alt="Able Koala"
            />
          </div>
          <div className="module info">
            <div className="info-text">
              <h3 className="info-text-title">About Able Koala</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolores eaque ullam quos aperiam aliquam officiis sed. Sequi voluptatum assumenda vitae, illo in deleniti odit ipsam, nam ab error maxime.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolores eaque ullam quos aperiam aliquam officiis sed. Sequi voluptatum assumenda vitae, illo in deleniti odit ipsam, nam ab error maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aut similique ut optio deserunt earum ipsam accusamus sequi nemo saepe assumenda aliquam eum fugiat officia nostrum, voluptate voluptates facilis neque?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolores eaque ullam quos aperiam aliquam officiis sed. Sequi voluptatum assumenda vitae, illo in deleniti odit ipsam, nam ab error maxime.</p>
            </div>
            <div className="info-image">
              <Image 
                src={InfoImage}
                width={800}
                height={400}
                layout="responsive"
                alt="Able Koala"
              />
            </div>
          </div>
          <Testimonial />
        </main>
      </Layout>
    </>
  )
}