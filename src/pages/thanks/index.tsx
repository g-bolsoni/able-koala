import React from 'react';
import styles from './thanks.module.scss';

const thanks: React.FC = () => {
  return (
    <div className="container ">
      <div className={styles.thanks}>
        <span className={styles.person}> Dear [Client name], </span>

        <div className={styles.box_text}>
          <span className={styles.text}>
            We would like to express our sincere gratitude for choosing our services!
          </span>

          <span className={styles.text}>
            Your recent service request has been successfully received, and we are thrilled at the opportunity to assist you. At Able Koala, we understand the importance of the services we provide, and we are committed to delivering excellence.
          </span>

          <span className={styles.text}>
            Our dedicated team of professionals is already hard at work, reviewing the details of your request. You can expect to hear from one of our friendly team members shortly. They will be in touch to discuss the specific requirements of your project, ensuring that we tailor our services to meet and exceed your expectations.
          </span>
          <span className={styles.text}>
            In the meantime, we invite you to explore more about our company and the range of services we offer. Our goal is not just to meet your needs but to provide a seamless and enjoyable experience throughout our collaboration.
          </span>

          <span className={styles.text}>
            Should you have any immediate questions, additional details to share, or if there´s anything specific you´d like to discuss further, please don´t hesitate to contact us directly. We are here to make this process as smooth as possible for you.
          </span>

          <span className={styles.text}>
            Once again, thank you for entrusting us with your service needs. We look forward to the opportunity to serve you and to contribute to the success of your project.
          </span>
        </div>
      </div>
    </div>
  )
}

export default thanks;