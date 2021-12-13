import React from 'react'
import './Images.css'
const   Image=()=> {
    return (
        <div>
            <section className="freelancer d-flex ">
        <div className="container-fluid">
            <div className="row">
                <div className="free-left col ">
                    <div className="content-left">
                        <h2>Freelancer API.</h2>
                        <h3>50 million professionals on demand</h3>
                        <p>Why hire people when you can simply integrate our talented cloud workforce instead?</p>
                        <button className="px-4 py-2">View Documentation</button>
                    </div>
                </div>
                <div className="free-right col">
                    <div className="content-right">
                        <h2>Freelancer Enterprise.</h2>
                        <h3>Company budget? Get more done for less</h3>
                        <p>Use our workforce of 50 million to help your integrate our business achieve more instead?</p>
                        <button className="px-4 py-2">Contact Us</button>
                    </div>

                </div>
            </div>
        </div>
    </section>

        </div>
    )
}

export default Image