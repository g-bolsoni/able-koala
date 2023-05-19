import Image from "next/image";
import React from "react";
import Carousel from "../components/Carousel"
import Tarja from "../../public/banners/tarja_.png"

import InfoImage from "../../public/banners/p1_1.jpg"
import Testimonial from "../components/Testimonial";

export default function Home() {
  return (
    <>
      <main>
        <Carousel />
        <div>
          <Image
            src={Tarja}
            width={1920}
            height={100}
            layout="responsive"
            alt="Able Koala"
          />
        </div>
        <div className="module info">
          <div className="info-text">
            <h3 className="info-text-title">About Able Koala</h3>
            <p>
              ABLE KOALA‘s focus is on the quality of life and well-being of those with disabilities and/or aging. Our main objective is to provide harmony and peace mentally, physically and spiritually.
            </p>
            <p>
              The purpose of our work is to understand the needs of each individual. To support with empathy and understanding while minimizing anxiety and discomfort.
            </p>
            <p>
              Changes cause apprehension, adapting to change is finding balance in times of turbulence.
            </p>
            <p>
              Our challenge is to assist family/caregivers to understand how to face a disability or the processes of aging. With a focus on acceptance, new skills can enhance connections.
            </p>
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
    </>
  )
}