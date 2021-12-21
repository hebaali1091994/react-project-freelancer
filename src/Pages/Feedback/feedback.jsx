import React from 'react'
import Header from '../../Components/header/Header'
import Navbar from './../../Components/Navbar'

export default function Feedback() {
    return (
        <div>
              <Header/>
          <Navbar/>
                <div className="feedback">
      <div className="container">
        <h1 className="mt-5">Project Awaiting Feedback</h1>
        <div className="alert alert-secondary text-center mt-4" role="alert">
          You have no projects awaiting feedback
        </div>
      </div>
    </div>
        </div>
    )
}
