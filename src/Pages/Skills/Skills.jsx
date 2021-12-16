import React from 'react'
import './Skills.css'
const Skills = () => {
    return (
        <div className='Skills'>
                <div class="container">
        <div class="row">
            <div class="sv">
                <img src="./Skills.svg" alt="" />
            </div>
            <h2>Tell us your top skills</h2>
            <div class="req">This helps us recommend jobs for you.</div>
            <div class="search">
                <span><i class="fas fa-search"></i></span>
                <input type="search" placeholder="Search a skill" class="form-control" />
            </div>
            <hr/>
            <div class="category">
                <div class="category-item">
                    <div class="item col">
                        <h3>Select a category</h3>
                        <hr/>
                    </div>
                    <div class="item col">
                        <h3>No category selected</h3>
                        <hr/>
                    </div>
                    <div class="item col">
                        <h3>1 out of 20 skills selected</h3>
                        <hr/>
                    </div>
                </div>
                <button>Next</button>
            </div>
        </div>
    </div>
        </div>
    )
}

export default Skills
