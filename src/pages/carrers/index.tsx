import styles from './carrers.module.scss';

import Link from 'next/link'

import works from '../../../openJobs.config.json';

export default function carrers() {

  return (
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
                        <span className={styles.location}>{work.location}</span>
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
  )
}
