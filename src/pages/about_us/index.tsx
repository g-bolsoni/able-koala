import Head from 'next/head';
import styles from './about_us.module.scss';

export default function aboutUs() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.ablekoala.com.au/about_us" />
      </Head>
      <main  className="container">
          <div className={styles.about_us}>
            <div className={styles.title}>What is Able Koala ?</div>
            <div className={styles.text}>
              <p>ABLE KOALA‘s focus is on the quality of life and well-being of those with disabilities and/or aging. Our main objective is to provide harmony and peace mentally, physically and spiritually. </p>
              <p>The purpose of our work is to understand the needs of each individual. To support with empathy and understanding while minimizing anxiety and discomfort.</p> 
              <p>Changes cause apprehension, adapting to change is finding balance in times of turbulence. </p>
              <p>Our challenge is to assist family/caregivers to understand how to face a disability or the processes of aging. With a focus on acceptance, new skills can enhance connections.</p> 
              <p>Our client’s caregivers knowledge will guide us, when we reveal to them and their loved ones, new ways to perform simple tasks that have become difficult. </p>
              <p>We share our expertise by implementing new ways of caring.</p> 
              <p>Mental Health: meditation, creative exercise and relaxing massage. </p>
              <p>Physical Health: changes based on the teachings of Ayurveda - the idea of balance in bodily systems using diet, herbal treatment, and yogic breathing.</p>
              <p>Spiritual Health: Yoga, Reiki, ThetaHealing and Access Bar.</p>
            </div>
          </div>
          <div className={styles.our_values}>
            <div className={styles.our_vision}>
              <h2 className={styles.title}>OUR PURPOSE</h2>
              <div className={styles.text}>PersonaliSed service focusing on each client and their caregivers if they have them, and their specific needs.  </div>
            </div>
            <div className={styles.our_mission}>
              <div className={styles.text}>To link the client with an ABLE KOALA‘coworker that most identifies with their personality and need, to deliver care with empathy and enthusiasm. We will provide support to overcome obstacles with understanding. Life is a path of learning and everything has a meaning, when we understand, we learn to cope and life begins to make sense. We are not here to heal, but we may be able to teach some concepts to learn to live with more balance in both the short and long term. </div>
              <h2 className={styles.title}>OUR OBJECTIVE</h2>
            </div>
          </div>

          <div className={styles.section_care}>
            <h2 className={styles.title}>How We Care</h2>

            <p className={styles.texts}>
              We provide quality non-medical services supporting people to live as independently as they can in their own homes. You and/or your advocate have the right to: 
            </p>
            <ul className={styles.list}>
              <li>Be treated with respect and courtesy </li>
              <li>Be provided with quality care services </li>
              <li>Be kept informed and consulted about the care services being provided </li>
              <li>Express your views and change service’s as required </li>
              <li>Privacy, confidentiality, and access to all information kept by us about you </li>
              <li>Use of an advocate if you wish, and to make a complaint if necessary </li>
            </ul>
          </div>
    
      </main>
    </>
  )
}

