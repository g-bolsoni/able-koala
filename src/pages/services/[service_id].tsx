/* eslint-disable react-hooks/rules-of-hooks */
import services from '../../../services.config.json';
import { useRouter } from 'next/router';
import styles from './service.module.scss';
import Link from 'next/link';



export default function index() {
  let router = useRouter();
  const serviceId = router.query.service_id;

  return (
    <div className={`${styles.mainContainer}`}>
      <section className={styles.content}>
        {
          services.services.map(service => {
              if(`${service.id}` == serviceId){
                return(
                  <section key={service.id} >
                    <h1 className={styles.title}>What is {service?.title}? </h1>
                    <p className={styles.text} >{service?.description}</p>
                    <p className={styles.text}> {service?.title_topics}</p>
                    <ul>
                      {
                        service.topics?.map(topic => (
                          <li key={topic} className={styles.itensList} >{topic}</li>
                        ))
                      }
                    </ul>

                    <h2 className={styles.subtitle}>{service?.helper_title}</h2>
                    <p className={styles.text} >
                      {service?.helper_text}
                      <br />
                      <br />
                      {service?.helper_tex_2}
                    </p>
                  </section >

                );

              }
          })
        }
      </section>
      <aside className={styles.aside} >
        <div className={styles.float}>
          <h2 className={styles.title_services}>
            Our services
          </h2>
          {
            services.services.map(service => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
              >
                {service.title}
              </Link>
            ))
          }
        </div>
      </aside>
    </div>
    );
}
 