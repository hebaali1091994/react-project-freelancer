import React from "react";
import Header from "../../Components/header/Header";
import SingleFreelancer from "./../../Components/Single Freelancer/SingleFreelancer";
import SingleProject from "./../../Components/Single Project/SingleProject";
import SingleContests from "./../../Components/SingleContests/SingleContests";
import "./Browse_Jobs.css";
import { Context } from "../../context/Context";
import { useContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Nav2 from "./../projectinfo/Nav2";
import Footer from "../../Components/Footer";
import { Link, useParams } from "react-router-dom";

const Browse_Jobs = () => {
  const history = useParams();
  const { user } = useContext(Context);
  const [users, setUser] = useState([]);
  const [project, setProject] = useState([]);
  const [ProjectName, setProjectName] = useState("");
  // Search
  const [APIData, setAPIData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    axios.get(`http://localhost:5000/Project/all`).then((response) => {
      setAPIData(response.data);
    });
  }, []);

  const [filteredRes, setFilteredRes] = useState(APIData);
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
  };

  const filteredResults = APIData.filter((item) => {
    return item.ChooseName.match(new RegExp(searchInput, "gi"));
  });

  //Filter
  const [min_value, setMinValue] = useState();
  const [max_value, setMaxValue] = useState();
  const [typeProject, settypeProject] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:5000/Project/hour");
      settypeProject(res, typeProject)
    }

  }, [])



  return (
    <div className="rowse_Jobs">
      <Header />
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <div className="bg-dark text-white col-12 ">
              <div className="container ">
                <p className="fs-4 mt-2">Browse Jobs</p>
                <form className="d-flex ">
                  <input
                    className="form-control mb-5"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={(e) => searchItems(e.target.value)}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active p-3"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
        </div >

        <div>
          <div className="">
            <div className="container">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="card text-dark mt-3">
                      <div className="card-header">
                        <span>Top results</span>
                        <span>Showing 1-20 of 1989256 results</span>
                      </div>
                    </div>
                    {/* Searched Area */}
                    {!Boolean(filteredResults.length) ? (
                      <div>No results found</div>
                    ) : (
                      filteredResults.map((item, idx) => (
                        <SingleProject key={idx} project={item} />
                      ))
                    )}
                    <Nav2 className="Nav-project" project={project} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
      <div className="mt-3">
        <Footer />
      </div>
    </div >
  );
};

export default Browse_Jobs;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======


>>>>>>> 815f43b6753904028adb717373fec050635123fd
>>>>>>> 07b51c942c5e927bd60ab3a5beac9fa8dac4dd65
