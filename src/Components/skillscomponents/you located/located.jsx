import React from 'react'
import internationallocal from '../../../public/internationallocal.svg'
const Located = ({ skill, setData }) => {
    return (
        <div class="row">
            <div class="col-md-6 m-auto d-flex flex-column">
                <div class="img_profile">
                    <img class="img-fluid w-25" src={internationallocal} alt="" />
                </div>

                <div class="skill">
                    <p class="fs-3"><b>Where are you located?</b></p>
                    <p>Please use your real address as this will be used for identity verification. Only your city and country will be shown publicly.</p>
                    {/* <!---------------------------input--------------------------------------> */}
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label w-100">Address
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="e.g Data scientist"
                                name="Address"
                                //  value={skill.Address}
                                onChange={(event) => setData({ ...skill, Address: event.target.value })}
                            />
                        </label>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Located
