import styles from './carrers.module.scss';

import Link from 'next/link'

import works from '../../../openJobs.config.json';
import Head from 'next/head';

export default function carrers() {

  return (
    <>
        <Head>
            <link rel="canonical" href="https://www.ablekoala.com.au/carrers" />
        </Head>
        <main className='container'>
            <div className={styles.section_title}>
                <h1 className={styles.title}>Available position</h1>
            </div>
            <div className={styles.disponibility_works}>
            {
                    works.works.map(work => (

                    <div className={styles.work_list} key={work.id} >
                        <div className={styles.work}>
                            <h2 className={styles.work_title}>{work.title}</h2>
                            {work.location ?? <span className={styles.location}>{work.location}</span> }
                        </div>
                        <Link href={`/carrers/${work.id}`} passHref >
                            <div className={styles.read_more}>
                                Read More
                            </div>
                        </Link>
                    </div>
                    
                    ))
                }
            </div>
        </main>
    </>
  )
}
