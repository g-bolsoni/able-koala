/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import Link from 'next/link';

import styles from './details.module.scss';

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';

import works from '../../../openJobs.config.json';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { sendContactMail } from '../../services/sendMail';
import toast from 'react-hot-toast';

export default function index() {
  // const [modalOpen, setmodalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  // const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let router = useRouter();
  const jobId = router.query.job_id;

  async function handleSubmit(e: FormEvent) {
      e.preventDefault();
      if(loading) return;

      if(!email.trim() || !name.trim() || !number.trim()) {
        toast.error('Preencha todos os campos', {style: {
          background: '#ff5555',
          color: '#fff'
        }});
        return;
      }
      
      try {
        setLoading(true);
        await sendContactMail(name, email, number)
        setName('');
        setEmail('');
        setNumber('');
        // setFile(null);

        toast.success('Currículo enviado com sucesso');
      } catch (error) {
        console.log(error);
        toast.error('Ocorreu um erro ao enviar seu contato, tente mais tarde', {style: {
          background: '#ff5555',
          color: '#fff'
        }});

        return;

      } finally{
        setLoading(false);
      }
  }

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
        {works.works.map(work => {
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
        })}

        {/* <button onClick={() => setmodalOpen(true)} className={styles.button}>I WANT APPLY </button> */}
        
        <form className={styles.jobs_form}  onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div>
              <input type="text" name="name" required value={name} onChange={(e) => setName(e.target.value)}/>
              <span className={styles.text} >Full Name</span>
              <span className={styles.line}></span>
            </div>
            <div>
              <input type="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
              <span className={styles.text}>Your E-mail</span>
              <span className={styles.line}></span>
            </div>
          </div>
          <div className={styles.row}>
            <div>
              <input type="number" name="number" required value={number}  onChange={(e) => setNumber(e.target.value)}/>
              <span className={styles.text}>Cellphone Number</span>
              <span className={styles.line}></span>
            </div>
            <div>
              {/* <input type="file" accept="application/pdf"onChange={(e) => {
                console.log(e.target.files[0]);
                setFile(e.target.files[0])
              }} /> */}
              <span className={styles.text}>Your CV</span>
              <span className={styles.line}></span>
            </div>
          </div>

          <button type="submit" className={styles.submit_button} onClick={(e)=>{handleSubmit(e)}}  >Send </button>
        </form>

        
      </div>
      <Footer />
    </>
  )
}
