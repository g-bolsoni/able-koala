import Form from '../../components/Form';
import styles from './style.module.scss';

export default function contactUs (){
    return (
        <section className={`${styles.contact_us} container`}>
            <article className={styles.mainInfo}>
                <div className={styles.formContent}>
                    <Form/>
                </div>
            </article>
        </section>
    );
}