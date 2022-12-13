import styles from './about_us.module.scss';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import Image from 'next/image';

import about_us from '../../../public/banners/wheelchair_user.png';


export default function aboutUs() {
  return (
    <>
      <Header />
      <section className={styles.banner}>
        <h2 className={styles.title}>About us</h2>
        <Image
          alt="wheelchair_user"
          src={about_us}
          width={1440}
          height={588}
          sizes="100vw"
        >
        </Image>
      </section>
      <main>
        <div className="container">
          <div className={styles.about_us}>
            <div className={styles.title}>What is Able Koala ?</div>
            <div className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat consectetur libero laborum. Minus tenetur odio commodi tempora sunt perferendis quam dicta soluta, adipisci est dignissimos similique possimus optio blanditiis tempore?</div>
          </div>
        </div>
        <div className="container">
          <div className={styles.our_values}>
            <div className={styles.our_vision}>
              <h2 className={styles.title}>OUR VISION</h2>
              <div className={styles.text}>E contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. Richard McClintock, um professor de latim do Hampden-Sydney College na Virginia, pesquisou uma </div>
            </div>
            <div className={styles.our_mission}>
              <div className={styles.text}>E contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. Richard McClintock, um professor de latim do Hampden-Sydney College na Virginia, pesquisou uma </div>
              <h2 className={styles.title}>OUR MISSION</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className={styles.section_care}>
            <h2 className={styles.title}>How We Care</h2>
            <p className={styles.texts}>Able Koala offers a variety of youth support, home and community support as well as accommodation services for people with disability, mental health and NDIS.</p>
            <p className={styles.texts}>We are committed to upholding the rights of people with disabilities. We advocate dignity, autonomy and seek equality of access to all parts of society for people with disabilities.</p>
            <p className={styles.texts}>We ensure our staff provide professional comprehensive support for people to meet the individual needs and desires recognizing their core strengths and abilities as well as presenting opportunities to address more complex needs.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
