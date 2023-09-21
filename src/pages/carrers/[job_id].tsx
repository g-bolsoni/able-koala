/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import Link from 'next/link';

import styles from './details.module.scss';

import works from '../../../openJobs.config.json';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { sendResume } from '../../services/sendMail';
import toast from 'react-hot-toast';
import { storage } from '../../services/firebaseConection';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import LoadingButton from '../../components/Loading';

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

  async function handleSubmit() {

    if(!email.trim() || !name.trim() || !number.trim() ) {
      toast.error('Fill in all the fields', {style: {
        background: '#ff5555',
        color: '#fff'
      }});
      return;
    }
    setLoading(true);

    try {
      const resumeLink = await generateLink();

      if (resumeLink) {

        await sendResume(name, email, number, resumeLink, 'resume');
        toast.success("Resume sent successfully!");
        // setName('');
        // setEmail('');
        // setNumber('');
        // setFile(null);
      }else{
        toast.error("There was an error sending the email");
      }

    } catch (error) {
      toast.error('There was an error sending your contact, try again later.', {style: {
        background: '#ff5555',
        color: '#fff'
      }});

      return;

    } finally{
      setLoading(false);
    }
  }

  return (
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
                {/* Descrição da vaga */}
                <section className={styles.section_description}> 
                  <h2 className={styles.description_title}>
                    Job Description
                  </h2>
                  
                  <p>{work.description}</p>
                  <p className={styles.subtitle}>
                    {work.description_list_title ? work.description_list_title : `What will be needed ?`} 
                  </p>
                  <ul className={styles.description_list}>
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
                {/* Descrição da vaga */}
                {/* Tipo da vaga */}
                <section className={styles.section_description}> 
                  <h2 className={styles.description_title}>
                    Type Of Employment
                  </h2>
                  <p>{work.type_of_employment}</p>
                </section>
                {/* Tipo da vaga */}
                {/* Chefe */}
                {work.report_to ?
                  <section className={styles.section_description}> 
                    <h2 className={styles.description_title}>
                      Report To
                    </h2>
                    <p>{work.report_to}</p>
                  </section>
                  : ''
                }
                {/* Chefe */}
                {/* Localização */}
                {work.location ?
                  <section className={styles.section_description}> 
                    <h2 className={styles.description_title}>
                      Location
                    </h2>
                    <p>{work.location}</p>
                  </section>
                  : ''
                }
                {/* Localização */}
                {/* Responsabilidades */}
                <section className={styles.section_description}> 
                  <h2 className={styles.description_title}>
                    Main Duties / Responsibilities
                  </h2>
                  <p>{work.main_responsibilities_text ?? work.main_responsibilities_text}</p>
                  <div className={styles.content}>
                    {work.main_responsibilities.map(responsability => (
                      <div key={responsability.id}>
                        <p><b>{responsability.name}</b></p>
                        <ul className='responsibilities_list'>
                          {responsability.responsibilities.map(responsibilities => (
                            <li key={responsibilities.id}>
                              {responsibilities.responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>
                {/* Responsabilidades */}
                {/* Qualifications/ Requirements */}
                <section className={styles.section_description}> 
                  <h2 className={styles.description_title}>
                    Qualifications/ Requirements
                  </h2>
                  <p>{work.requirements_title ?? work.requirements_title}</p>
                  <ul className='responsibilities_list'>
                    {work.requirements.map(requirement =>(
                      <li key={requirement.id}>
                        {requirement.requirement}
                      </li>
                    ))}
                  </ul>
                </section>
                {/* Qualifications/ Requirements */}
                {/* Sills */}
                <section className={styles.section_description}> 
                  <h2 className={styles.description_title}>
                    Skills
                  </h2>
                  <p>{work.requirements_title ?? work.requirements_title}</p>
                  <ul className='responsibilities_list'>
                    {work.skills.map(skill =>(
                      <li key={skill.id}>
                        {skill.requirement}
                      </li>
                    ))}
                  </ul>
                </section>
                {/* Skills */}
              </main>
            )
          }
      })}
      
      <form className={styles.jobs_form}>
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
        <LoadingButton onClick={handleSubmit} loading={loading} text="Send" />
      </form>
    </div>
  )
}
