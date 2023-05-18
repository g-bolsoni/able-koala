import styles from './styles.module.scss';
import { useState } from "react";
import ReactInputMask from "react-input-mask-next";

export default function ContactUs (){

    const [ndisName, setNdisName]                                         = useState("");
    const [ndisEmail, setNdisEmail]                                       = useState("");
    const [ndisPhone, setNdisPhone]                                       = useState("");
    const [caregiverPersonName, setCaregiverPersonName]                   = useState("");
    const [subscriptionServicePerson, setSubscriptionServicePerson]       = useState("");
    const [managerEmail, setManagerEmail]                                 = useState("");
    const [coordinatorEmail, setCoordinatorEmail]                         = useState("");
    const [coordinatorName, setCoordinatorName]                           = useState("");
    const [coordinatorPhone, setCoordinatorPhone]                         = useState("");
    const [loading, setLoading]                                           = useState(false);
    const [isOtherPerson, setIsOtherPerson]                               = useState("no");
    const [planManaged, setPlanManaged]                                   = useState("0");
    const [isSupportCoordinator, setIsSupportCoordinator]                 = useState("no");

    return (
        <div className="container">
            <h1 className={styles.title} >Contact Us</h1>

            <form method="post"  className={styles.containerFlex}>            
                <section className={styles.groupForm}>

                    <div className={styles.input_group}>
                        <label htmlFor="ndisName">NDIS participante Name </label>
                        <input type="text" required={true} name="ndisName" value={ndisName} id="ndisName" onChange={(e) => setNdisName(e.target.value)} />
                    </div>

                    <div className={styles.input_group}>
                        <label htmlFor="ndisEmail">Email</label>
                        <input type="email" required={true} name="ndisEmail" value={ndisEmail} id="ndisEmail" onChange={(e) => setNdisEmail(e.target.value)} />
                    </div>

                    <div className={styles.input_group}>
                        <label htmlFor="ndisPhone">Phone</label>
                        <ReactInputMask mask={'999 999 999'} type="text" required={true} name="ndisPhone" value={ndisPhone} id="ndisPhone" onChange={(e) => setNdisPhone(e.target.value)} />
                    </div>

                    <div className={styles.input_group}>
                        <label htmlFor="isSupportCoordinator">Do you have a support coordinator?</label>
                        <select name="isSupportCoordinator"  defaultValue={isSupportCoordinator} id="isSupportCoordinator" onChange={(e) => setIsSupportCoordinator(e.target.value)} >
                            <option value="no" selected >No</option>
                            <option value="yes">Yes</option>
                        </select>
                    </div>

                    {isSupportCoordinator == "yes" && (
                        <>
                            <div className={styles.input_group}>
                                <label htmlFor="coordinatorName">Support coordinator name</label>
                                <input type="text" name="coordinatorName" value={coordinatorName} id="coordinatorName" onChange={(e) => setCoordinatorName(e.target.value)} />
                            </div>

                            <div className={styles.input_group}>
                                <label htmlFor="coordinatorEmail">Support coordinator email</label>
                                <input type="email" name="coordinatorEmail" value={coordinatorEmail} id="coordinatorEmail" onChange={(e) => setCoordinatorEmail(e.target.value)} />
                            </div>

                            <div className={styles.input_group}>
                                <label htmlFor="coordinatorPhone">Support coordinator phone</label>
                                <ReactInputMask mask={'999 999 999'} type="text" name="coordinatorPhone" value={coordinatorPhone} id="coordinatorPhone" onChange={(e) => setCoordinatorPhone(e.target.value)} />
                            </div>
                        </>
                    )}  


                </section>

                <section className={styles.groupForm}>
                    <div className={styles.input_group}>
                        <label htmlFor="isOtherPerson">Are you a Family member, carer, support worker or friend completing this form?</label>
                        <select name="isOtherPerson" defaultValue={isOtherPerson} id="isOtherPerson" onChange={(e) => setIsOtherPerson(e.target.value)}>
                            <option value="no" selected>No</option>
                            <option value="yes">Yes</option>
                        </select>
                    </div>

                    {isOtherPerson == "yes" && (
                        <>
                            <div className={styles.input_group}>
                                <label htmlFor="caregiverPersonName">Name of contact person to discuss building your STA </label>
                                <input type="text" name="caregiverPersonName" value={caregiverPersonName} id="caregiverPersonName" onChange={(e) => setCaregiverPersonName(e.target.value)} />
                            </div>

                            <div className={styles.input_group}>
                                <label htmlFor="subscriptionServicePerson">Name of person responsible for signing STA service contract</label>
                                <input type="text" name="subscriptionServicePerson" value={subscriptionServicePerson} id="subscriptionServicePerson" onChange={(e) => setSubscriptionServicePerson(e.target.value)} />
                            </div>
                        </>
                    )}

                    <div className={styles.input_group}>
                        <label htmlFor="planManaged">How is your NDIS Plan managed? *</label>
                        <select name="planManaged" defaultValue={planManaged} id="planManaged" onChange={(e) => setPlanManaged(e.target.value)}>
                            <option value="0" selected ></option>
                            <option value="1">Plan Managed (Please enter Plan Managers email in the next section if you have)</option>
                            <option value="2">Self Managed</option>
                            <option value="3">NDIS Managed (Habitability does not currently offer STA for NDIA managed participants)</option>
                        </select>
                    </div>


                    <div className={styles.input_group}>
                        <label htmlFor="managerEmail">Plan Manager email</label>
                        <input type="email" name="managerEmail" value={managerEmail} id="managerEmail" onChange={(e) => setManagerEmail(e.target.value)} />
                    </div>



                </section>

                <button className={styles.sendForm} type="submit" > Send</button>
            </form>
        </div>
    );
}