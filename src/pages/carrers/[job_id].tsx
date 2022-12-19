/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';

import styles from './details.module.scss';

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import Modal from '../../components/Modal';

import works from '../../../openJobs.config.json';
import { AiOutlineArrowLeft } from 'react-icons/ai'

interface Modal {
  isOpen: boolean,
  setIsOpen: boolean,
}

export default function index() {
  const [modalOpen, setmodalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [file, setFile] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let router = useRouter();
  const jobId = router.query.job_id;



  return (
    

    <>
     <Header />

      <div className="container">
        <Link href="/carrers">
          <span className={styles.back}>
            <AiOutlineArrowLeft/>
            Back
          </span>
        </Link>
        { 
          works.works.map(work => {
            if( `${work.id}` == jobId ) {
              return (
                <main key={work.id} className={styles.work_container}>
                  <h1>{work.title}</h1>
                  <section> 
                    <h2 className={styles.description_title}>
                      Description
                    </h2>
                    <p>{work.description}</p>
                  </section>
                  <section className={styles.requirements}>
                    <h2 className={styles.requirements_title}>What will be needed ?</h2>
                    <ul>
                      {
                        work.requirements.map(requirement => {
                          return(
                          <li key={requirement.id} className={styles.list_requirement}>
                            {requirement.requirement}
                          </li>
                          )
                        })
                      }
                    </ul>
                  </section>
                </main>
              )
            }
          })
        }


        <Modal isOpen={modalOpen} setIsOpen={setmodalOpen} closeButton={false}>
          <form className={styles.jobs_form}  action="" method="post" acceptCharset="utf-8" encType="multipart/form-data">
            <label htmlFor="formName">Name:</label>
            <input type="text" name="name" id='formName' value={name} onChange={(e) => setName(e.target.value)}/>
            <label htmlFor="formMail">Email:</label>
            <input type="text" name="email"  id='formMail'  value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="formNumber">Number:</label>
            <input type="text" name="number" id='formNumber'  value={number}  onChange={(e) => setNumber(e.target.value)}/>
            <label htmlFor="formFile">Your CV:</label>
            <input type="file"  id='formFile' onChange={(e) => setFile(e.target.value)}/>
            {name}, {email}, {number}, {file}
          </form>
        </Modal>
        <button onClick={() => setmodalOpen(true)} className={styles.button}>I WANT APPLY </button>
      </div>
      <Footer />
    </>
  )
}
