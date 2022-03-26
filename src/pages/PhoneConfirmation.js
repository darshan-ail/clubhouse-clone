import React, { useState } from "react";
import style from '../style/phoneConfirmation.module.css';
import PhoneInput from "react-phone-number-input";
import { Link } from "react-router-dom";

const PhoneConfirmation = (props) => {
    const [value, setValue] = useState();
    return (
        <div className={style.phoneConfirmation}>
            <Link exact to='/' className={style.backBtn}>
                <img src="/images/arrow.png" alt="" />
            </Link>
            <h1>Enter your phone</h1>
            <PhoneInput international defaultCountry="IN" value={value} onChange={setValue} />
            <p>By entering your number, you are agreeing to our terms {""}<span>
                Terms of Service and Privacy Policy. </span>
                Thanks!
            </p>
            <Link exact to='/code_confirm' className="primaryBtn d-flex align-items-center">
                Next <img src="/images/nextArrowIcon.svg" className="m1-1" alt="" />
            </Link>
        </div>
    )
}

export default PhoneConfirmation;