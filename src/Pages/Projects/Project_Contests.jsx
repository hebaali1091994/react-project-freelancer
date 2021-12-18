import React from 'react'
import Header from '../../Components/header/Header'
import Navbar from './../../Components/Navbar'
const Project_Contests = () => {
    return (
        <div>
                <div className="Project-contests">
                      <Header/>
          <Navbar/>
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="mr-auto p-2">
            <h1 className="mt-5">Project And Contests</h1>
          </div>
          <div className="ml-auto p-2 mt-5">
            <button type="button" className="btn btn-primary">As a Client</button>
            <button type="button" className="btn btn-secondary">
              As A Freelancer
            </button>
          </div>
        </div>
      </div>
    </div>
        <div className="status-project">
      <div className="container">
        <div className="row">
          <div className="d-flex mt-5 Project-btn">
            <button type="button" className="btn">Open Project</button>
            <button type="button" className="btn">Work in Progress</button>
            <button type="button" className="btn">Past Projects</button>
            <button type="button" className="btn">Open Contects</button>
            <button type="button" className="btn">Pending Prizes</button>
            <button type="button" className="btn">Prizes Relesed</button>
          </div>
        </div>
      </div>
    </div>
    <div className="search-box">
      <form className="container">
        <div className="row">
          <div className="col-7">
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                  />
                </svg>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search User & Project"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div className="col-2">
            <div className="row">
              <div className="d-flex align-items-center">
                <p className="col-3">Show:</p>
                <select className="col-6 form-select">
                  <option selected>10</option>
                  <option value="1">20</option>
                  <option value="2">30</option>
                  <option value="3">40</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-2 views">
            <div className="row">
              <div className="d-flex justify-content-start">
                <p className="col-3">Views:</p>
                <select className="col-6 form-select">
                  <option selected>10</option>
                  <option value="1">20</option>
                  <option value="2">30</option>
                  <option value="3">40</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div className="create-new-project">
      <div className="container">
        <div className="bg-white mt-5">
          <div className="project-box pt-5">
            <p className="text-center">Create a New Project</p>
            <p className="text-center">
              Millions of talented freelancers are ready to help you do amazing
              things
            </p>
                <button type="button" className="d-block mx-auto btn btn-warning">
                  Post A Project
                </button>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Project_Contests
