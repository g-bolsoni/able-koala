/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import Link from 'next/link';

import styles from './details.module.scss';

import works from '../../../openJobs.config.json';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { sendContactMail } from '../../services/sendMail';
import toast from 'react-hot-toast';
import { storage } from '../../services/firebaseConection';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

export default function index() {
  // const [modalOpen, setmodalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let router = useRouter();
  const jobId = router.query.job_id;

  async function generateLink()
  {
    const file_new = file;
    const storageRef = ref(storage, `resumes/${name} - ${file_new.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file_new);
    let urlFile = "";
  
    await new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        null,
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            urlFile = url;
            resolve(urlFile);
          });
        }
      );
    });
  
    return urlFile;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if(!email.trim() || !name.trim() || !number.trim() ) {
      toast.error('Preencha todos os campos', {style: {
        background: '#ff5555',
        color: '#fff'
      }});
      return;
    }
    setLoading(true);

    try {
      const resumeLink = await generateLink();

      if (resumeLink) {
        let message = 'Olá, gostaria de declarar meu interesse na vaga';
        await sendContactMail(name, email, number, resumeLink, message);
        toast.success("Currículo enviado com sucesso");
        setName('');
        setEmail('');
        setNumber('');
        setFile(null);
      }else{
        toast.error("Ocorreu um erro ao enviar o email");
      }

    } catch (error) {
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
      <div className="container">
        <Link href="/carrers" passHref>
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
              <input type="file" accept="application/pdf" onChange={(e) => {
                setFile(e.target.files[0])
              }} /> 
             
              <span className={styles.text}>Your CV</span>
              <span className={styles.line}></span>
            </div>
          </div>

          <button 
            type="submit" 
            className={`${styles.submit_button}`} 
            disabled={loading}
          >
            Send
          </button>
        </form>

      </div>
    </>
  )
}
