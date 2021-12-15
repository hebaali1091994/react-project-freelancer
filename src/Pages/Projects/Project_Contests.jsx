import React from 'react'
import Header from '../../Components/header/Header'
import Navbar from './../../Components/Navbar'
const Project_Contests = () => {
    return (
        <div>
                <div class="Project-contests">
                      <Header/>
          <Navbar/>
      <div class="container">
        <div class="d-flex justify-content-between">
          <div class="mr-auto p-2">
            <h1 class="mt-5">Project And Contests</h1>
          </div>
          <div class="ml-auto p-2 mt-5">
            <button type="button" class="btn btn-primary">As a Client</button>
            <button type="button" class="btn btn-secondary">
              As A Freelancer
            </button>
          </div>
        </div>
      </div>
    </div>
        <div class="status-project">
      <div class="container">
        <div class="row">
          <div class="d-flex mt-5 Project-btn">
            <button type="button" class="btn">Open Project</button>
            <button type="button" class="btn">Work in Progress</button>
            <button type="button" class="btn">Past Projects</button>
            <button type="button" class="btn">Open Contects</button>
            <button type="button" class="btn">Pending Prizes</button>
            <button type="button" class="btn">Prizes Relesed</button>
          </div>
        </div>
      </div>
    </div>
    <div class="search-box">
      <form class="container">
        <div class="row">
          <div class="col-7">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                  />
                </svg>
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Search User & Project"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div class="col-2">
            <div class="row">
              <div class="d-flex align-items-center">
                <p class="col-3">Show:</p>
                <select class="col-6 form-select">
                  <option selected>10</option>
                  <option value="1">20</option>
                  <option value="2">30</option>
                  <option value="3">40</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col-2 views">
            <div class="row">
              <div class="d-flex justify-content-start">
                <p class="col-3">Views:</p>
                <select class="col-6 form-select">
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
    <div class="create-new-project">
      <div class="container">
        <div class="bg-white mt-5">
          <div class="project-box pt-5">
            <p class="text-center">Create a New Project</p>
            <p class="text-center">
              Millions of talented freelancers are ready to help you do amazing
              things
            </p>
                <button type="button" class="d-block mx-auto btn btn-warning">
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
