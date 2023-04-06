import style from "./style.module.scss";
import { useState } from "react";
import useAppData from "../../data/hook/useAppData";
import { contactUsSendToJson } from "../../models/contact_us_send";
import ReactInputMask from "react-input-mask-next"

export default function Form() {

    const { postContactUs } = useAppData();

    const [ndisName, setNdisName] = useState("");
    const [ndisEmail, setNdisEmail] = useState("");
    const [ndisPhone, setNdisPhone] = useState("");
    const [numberBedrooms, setNumberBedrooms] = useState(0);
    const [specific_requirements, setSpecific_requirements] = useState("");
    const [vouchers, setVouchers] = useState(0);
    const [isOtherPerson, setIsOtherPerson] = useState("no");
    const [caregiverPersonName, setCaregiverPersonName] = useState("");
    const [subscriptionServicePerson, setSubscriptionServicePerson] = useState("");
    const [accomodation, setAccomodation] = useState("");
    const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");
    const [planManaged, setPlanManaged] = useState("0");
    const [managerEmail, setManagerEmail] = useState("");
    const [isSupportCoordinator, setIsSupportCoordinator] = useState("no");
    const [coordinatorName, setCoordinatorName] = useState("");
    const [coordinatorEmail, setCoordinatorEmail] = useState("");
    const [coordinatorPhone, setCoordinatorPhone] = useState("");

    const setPostContactUs = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        await postContactUs!(contactUsSendToJson({
            NDIS_name: ndisName,
            email: ndisEmail,
            phone: ndisPhone,
            bedrooms: numberBedrooms,
            specific_room: specific_requirements,
            vouchers: vouchers,
            support_coodinator: isSupportCoordinator,
            coodinator_name: coordinatorName,
            coodinator_email: coordinatorEmail,
            coodinator_phone: coordinatorPhone,
            family_member: isOtherPerson,
            contact_person1: caregiverPersonName,
            contact_person2: subscriptionServicePerson,
            STA_accomodation: accomodation,
            STA_check_in_date: checkInDate,
            STA_check_out_date: checkOutDate,
            NDIS_plan: planManaged,
            manager_email: managerEmail
        }));
    }

    return (
        <form method="post" onSubmit={setPostContactUs} className={style.containerFlex}>            
            <section className={style.groupForm}>

                <div className={style.input_group}>
                    <label htmlFor="ndisName">NDIS Name</label>
                    <input type="text" required={true} name="ndisName" value={ndisName} id="ndisName" onChange={(e) => setNdisName(e.target.value)} />
                </div>

                <div className={style.input_group}>
                    <label htmlFor="ndisEmail">Email</label>
                    <input type="email" required={true} name="ndisEmail" value={ndisEmail} id="ndisEmail" onChange={(e) => setNdisEmail(e.target.value)} />
                </div>

                <div className={style.input_group}>
                    <label htmlFor="ndisName">Phone</label>
                    <ReactInputMask mask={'+99 (99) 99999-9999'} type="text" required={true} name="ndisName" value={ndisPhone} id="ndisName" onChange={(e) => setNdisPhone(e.target.value)} />
                </div>


                <div className={style.input_group}>
                    <label htmlFor="numberBedrooms">Number of bedrooms (depending on if your carer or support worker is attending the STA with you) </label>
                    <input type="number" min={0} name="numberBedrooms" value={numberBedrooms} id="numberBedrooms" onChange={(e) => setNumberBedrooms(Number(e.target.value))} />
                </div>

                <div className={style.input_group}>
                    <label htmlFor="specific_requirements">Please, specific room requirements</label>
                    <input type="text" name="specific_requirements" value={specific_requirements} id="specific_requirements" onChange={(e) => setSpecific_requirements(e.target.value)} />
                </div>

                <div className={style.input_group}>
                    <label htmlFor="vouchers">Amt per day in STA prepaid vouchers for you (and your carer if attending) for meals & activities</label>
                    <div className={style.alignDiv}>
                        <input type="number" min={0} name="vouchers" value={vouchers} id="vouchers" onChange={(e) => setVouchers(Number(e.target.value))} />
                        <span>AUD</span>
                    </div>


                </div>

                <div className={style.input_group}>
                    <label htmlFor="isSupportCoordinator">Do you have a support coordinator?</label>
                    <select name="isSupportCoordinator" value={isSupportCoordinator} id="isSupportCoordinator" onChange={(e) => setIsSupportCoordinator(e.target.value)} >
                        <option value="no" selected >No</option>
                        <option value="yes">Yes</option>
                    </select>
                </div>

                {isSupportCoordinator == "yes" ? (
                    <>
                        <div className={style.input_group}>
                            <label htmlFor="coordinatorName">Support coordinator name</label>
                            <input type="text" name="coordinatorName" value={coordinatorName} id="coordinatorName" onChange={(e) => setCoordinatorName(e.target.value)} />
                        </div>

                        <div className={style.input_group}>
                            <label htmlFor="coordinatorEmail">Support coordinator email</label>
                            <input type="email" name="coordinatorEmail" value={coordinatorEmail} id="coordinatorEmail" onChange={(e) => setCoordinatorEmail(e.target.value)} />
                        </div>

                        <div className={style.input_group}>
                            <label htmlFor="coordinatorPhone">Support coordinator phone</label>
                            <input type="text" name="coordinatorPhone" value={coordinatorPhone} id="coordinatorPhone" onChange={(e) => setCoordinatorPhone(e.target.value)} />
                        </div>
                    </>
                ) : ""}


            </section>

            <section className={style.groupForm}>
                <div className={style.input_group}>
                    <label htmlFor="isOtherPerson">Are you a Family member, carer, support worker or friend completing this form?</label>
                    <select name="isOtherPerson" value={isOtherPerson} id="isOtherPerson" onChange={(e) => setIsOtherPerson(e.target.value)}>
                        <option value="no" selected>No</option>
                        <option value="yes">Yes</option>
                    </select>
                </div>

                {isOtherPerson == "yes" ? (
                    <>
                        <div className={style.input_group}>
                            <label htmlFor="caregiverPersonName">Name of contact person to discuss building your STA </label>
                            <input type="text" name="caregiverPersonName" value={caregiverPersonName} id="caregiverPersonName" onChange={(e) => setCaregiverPersonName(e.target.value)} />
                        </div>

                        <div className={style.input_group}>
                            <label htmlFor="subscriptionServicePerson">Name of person responsible for signing STA service contract</label>
                            <input type="text" name="subscriptionServicePerson" value={subscriptionServicePerson} id="subscriptionServicePerson" onChange={(e) => setSubscriptionServicePerson(e.target.value)} />
                        </div>
                    </>
                ) : ""}


                {/* back after */}
                <div className={style.input_group}>
                    <label htmlFor="accomodation">Please list the Name of STA Accommodation you would like to stay in from our website.</label>
                    <input type="text" name="accomodation" value={accomodation} id="accomodation" onChange={(e) => setAccomodation(e.target.value)} />
                    {/* <select name="accomodation" value={accomodation} id="accomodation" onChange={(e) => setAccomodation(e.target.value)}>
                        <option value="no" selected >No</option>
                        <option value="yes">Yes</option>
                    </select> */}
                </div>
                {/* back after */}

                <div className={style.input_group}>
                    <label htmlFor="checkInDate">STA Respite Check in date.</label>
                    <input type="date" required={true} name="checkInDate" id="checkInDate" value={checkInDate} onChange={e => setCheckInDate(e.target.value)} />
                </div>

                <div className={style.input_group}>
                    <label htmlFor="checkOutDate">STA Respite Check out date *</label>
                    <input type="date" required={true} name="checkOutDate" id="checkOutDate" value={checkOutDate} onChange={e => setCheckOutDate(e.target.value)} />
                </div>


                <div className={style.input_group}>
                    <label htmlFor="planManaged">How is your NDIS Plan managed? *</label>
                    <select name="planManaged" value={planManaged} id="planManaged" onChange={(e) => setPlanManaged(e.target.value)}>
                        <option value="0" selected ></option>
                        <option value="1">Plan Managed (Please enter Plan Managers email in the next section if you have)</option>
                        <option value="2">Self Managed</option>
                        <option value="3">NDIS Managed (Habitability does not currently offer STA for NDIA managed participants)</option>
                    </select>
                </div>


                <div className={style.input_group}>
                    <label htmlFor="managerEmail">Plan Manager email</label>
                    <input type="email" name="managerEmail" value={managerEmail} id="managerEmail" onChange={(e) => setManagerEmail(e.target.value)} />
                </div>



            </section>

            <button className={style.sendForm} type="submit"  > Send</button>
        </form>
    )
}