import styles from './carrers.module.scss';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';

import Image from 'next/image';
import Link from 'next/link'

import about_us from '../../../public/banners/p1_1.png';
import works from '../../../openJobs.config.json';

export default function carrers() {

  return (
    <>
        <Header />
        <section className={styles.banner}>
            <h2 className={styles.title}>Services</h2>
            <Image
                alt="wheelchair_user"
                src={about_us}
                width={1440}
                height={588}
                sizes="100vw"
            >
            </Image>
        </section>
        <main className='container'>
            <div className={styles.section_title}>
                <h1 className={styles.title}>Avaible Jobs</h1>
            </div>
            <div className={styles.disponibility_works}>
            {
                  works.works.map(work => (
                    <div className={styles.work_list} key={work.id} >
                        <div className={styles.work}>
                            <h2 className={styles.work_title}>{work.title}</h2>
                            <span className={styles.location}>{work.location}</span>
                        </div>
                        <Link href={`/carrers/${work.id}`} >
                            <div className={styles.read_more}>
                                Read More
                            </div>
                        </Link>
                    </div>
                  ))
                }
            </div>
        </main>
        <Footer />
    </>
  )
}
