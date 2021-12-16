import React from 'react'
import checkemail from '../../../public/checkemail.svg'
const Verification = () => {
    return (
        <div class="row">
        <div class="col-md-6 m-auto d-flex flex-column">
            <div class="img_profile text-center">
                <img class="img-fluid" src={checkemail} alt=""/>
            </div>
            <div class="skill text-center">
                <p class="fs-3"><b>Thanks Name</b></p>
                <p><b>Your email is verified.</b></p>
                <p>email@gmail.com</p>
            </div>
        </div>
    </div>
    )
}

export default Verification
