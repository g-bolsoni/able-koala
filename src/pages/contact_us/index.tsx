import Form from '../../components/Form';
import styles from './style.module.scss';

export default function contactUs (){
    return (

        <section className={`${styles.contact_us} container`}>
            <article className={styles.sideInfo}>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis hic nisi accusamus magnam ab doloremque et provident necessitatibus, praesentium, ex, eaque assumenda iure consequatur veritatis architecto quae at vitae error!
                </p>
            </article>
            <article className={styles.mainInfo}>
                <div className={styles.formContent}>
                    <Form/>
                </div>
            </article>
        </section>


    );
}