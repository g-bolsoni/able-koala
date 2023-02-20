import Form from '../../components/Form';
import styles from './style.module.scss';
import Image from 'next/image';
import about_us from '../../../public/banners/wheelchair_user.png';

export default function contactUs (){
    return (
        <>
        
            <Image
                alt="wheelchair_user"
                src={about_us}
                width={1440}
                height={588}
                sizes="100vw"
            ></Image>
            <section className={`${styles.contact_us} container`}>
                <h2 className={styles.title}>Contact us</h2>
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
        </>

    );
}