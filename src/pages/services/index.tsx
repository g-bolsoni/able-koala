import styles from './style.module.scss';
import services from '../../../services.config.json';
import Link from 'next/link'

export default function contactUs (){
    return (
        <div className='container'>
            <div>
                <h1 className={styles.title}>Us Service</h1>
                <p>We provide a range of services to help you with your day-to-day activities, as well as around your home.</p>
            </div>
            <div className={styles.cards} >
                {
                    services.services.map(service => (
                        <Link key={service.id} href={`/services/${service.id}`} >
                            <div className={styles.cardService} key={service.id}>
                                <div className={styles.image}>
                                    <img src={service.backgroundImage} alt="Image" />
                                </div>
                                <div className={styles.cardContent}>
                                    <h2 className={styles.cardTitle}>{service.title}</h2>
                                    <p className={styles.cardDescription}>{service.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))

                }
            </div>
        </div>
    );
}