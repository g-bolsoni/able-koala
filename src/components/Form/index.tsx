import style from './style.module.scss'; 
export default function Form() {
    
    return (
        <>
        <form action="/send-data-here" method="post">
            <div className="mb-3">
                <h6 className={style.title}> Send us a message</h6>
            </div>
            <div className="mb-3">
                <input type="text" name="name" id="input_name" className={style.formControl} placeholder="Name" />
            </div>
            <div className="mb-3">
                <input type="email" name="email" id="input_email" autoComplete='off' className={style.formControl} placeholder="E-mail"/>
            </div>
            <div className="mb-3">
                <input type="tel" name="phone" id="input_phone" className={style.formControl} placeholder="Phone"/>
            </div>
            <div className="mb-3">
                <select name="how_can_we_help" id="select_how_can_we_help" className={style.formControl}>
                    <option value="0">How can we help?</option>
                </select>
            </div>
            <div className="mb-3">
                <select name="where_did_you_hear_about_us" id="where_did_you_hear_about_us" className={style.formControl}>
                    <option value="0">How did yout header about us?</option>
                </select>
            </div>

            <div className="mb-3">
                <textarea name="resume" id="inputResume" placeholder='Tell us a little more about the care that yout need.' className={style.formControl} rows={5}></textarea>
            </div>

            <button type="submit">Submit</button>
        </form>
        </>
        )
    }