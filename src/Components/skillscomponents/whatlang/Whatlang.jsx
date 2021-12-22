import React from 'react'
import language from '../../../public/language.svg'

const Whatlang = ({ skill, setData }) => {
    return (
        <div class="row">
            <div class="col-md-6 m-auto d-flex flex-column">
                <div class="img_profile">
                    <img class="img-fluid" src={language} />
                </div>

                <div class="skill">
                    <p class="fs-3"><b>What languages do you speak?</b></p>
                    <p>We will use this to help match you with employers who are fluent in these languages.</p>
                    {/* <!---------------------------input--------------------------------------> */}
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label w-100">
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="e.g Data scientist"
                                name="DataS"
                                // value={skill.DataS}
                                onChange={(event) => setData({ ...skill, DataS: event.target.value })}
                            />
                        </label>
                    </div>
                    {/* <!---------------------------textarea --------------------------------------> */}
                    <div class="mb-3">
                        <p class="fs-3"><b>When were you born?</b></p>
                        <p>You need to be at least 16 years old to use the website. This information will be used for verification and will be kept confidential.</p>
                        <label for="exampleFormControlTextarea1" class="form-label fs-3 w-100">
                            <input type="date" class="form-control" id="exampleFormControlInput1"
                                name="birht"
                                //  value={skill.birht}
                                onChange={(event) => setData({ ...skill, birht: event.target.value })}
                            />
                        </label>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Whatlang
