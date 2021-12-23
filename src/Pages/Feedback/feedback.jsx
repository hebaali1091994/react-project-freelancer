import React from 'react'
import Header from '../../Components/header/Header'
import Navbar from './../../Components/Navbar'
import SingleContract from './../../Components/SingleContract/SingleContract';
import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Context } from "../../context/Context";
export default function Feedback() {
  const { user } = useContext(Context)

  useEffect(() => {
    const getDataProject = async () => {
      const UpdataDataUser = {
        freelanceId: user._id
      }
      const userdata = await axios.get("/Project/oneproject/", UpdataDataUser);
      console.log(userdata.data);

    }



    getDataProject()
  }, []);
  return (
    <div>
      <Header />
      <Navbar />
      <div className="feedback">
        <div className="container">
          <h1 className="mt-5">Project Awaiting Feedback</h1>
          <div className="alert alert-secondary text-center mt-4" role="alert">
            You have no projects awaiting feedback

          </div>
          <SingleContract />
        </div>

      </div>
    </div>
  )
}
