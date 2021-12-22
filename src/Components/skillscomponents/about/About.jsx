import React from 'react'
import aboutme from '../../../public/aboutme.svg'
const About = ({ skill, setData }) => {
    return (
        <div class="row">
            <div class="col-md-6 m-auto d-flex flex-column">
                <div class="img_profile">
                    <img class="img-fluid" src={aboutme} />
                </div>

                <div class="skill">
                    <p class="fs-3"><b>Tell us a bit about yourself</b></p>
                    <p>Fill out your profile for clients to batter understand your services.</p>
                    <p class="fs-3"><b>what do you do?</b></p>
                    {/* <!---------------------------input--------------------------------------> */}
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label w-100">write a one line description about yourself.
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="e.g Data scientist"
                                name="description"
                                //   value={skill.description}
                                onChange={(event) => setData({ ...skill, description: event.target.value })}
                            />
                        </label>
                    </div>
                    {/* <!---------------------------textarea --------------------------------------> */}
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label fs-3 w-100"><b>Describe yourself</b>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Describe your top skills, strengths,and experience,provide more detail on the service you offer, things you're interested in working on, and what you like to do "
                                name="DescribeU"
                                // value={skill.DescribeU}
                                onChange={(event) => setData({ ...skill, DescribeU: event.target.value })}
                            ></textarea>
                        </label>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
