import React from "react";
import Header from "../../Components/header/Header";
import SingleFreelancer from "./../../Components/Single Freelancer/SingleFreelancer";
import SingleProject from "./../../Components/Single Project/SingleProject";
import SingleContests from "./../../Components/SingleContests/SingleContests";
import "./DisplayProject.css";
import { Context } from "../../context/Context";
import { useContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Nav2 from "./../projectinfo/Nav2";
import Footer from "../../Components/Footer";
import { Link, useParams } from "react-router-dom";

const DisplayProject = () => {
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
      console.log(response.data);
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

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/users/all");
      setUser(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className="DisplayProject">
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
                <h1>Browers</h1>
                <form className="d-flex ">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={(e) => searchItems(e.target.value)}
                  />
                </form>
                <nav>
                  <div
                    className="nav nav-tabs mt-3"
                    id="nav-tab"
                    role="tablist"
                  >
                    <button
                      className="nav-link col-2  active text-white"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      Freelancer
                    </button>

                    <button
                      className="nav-link col-2   text-white"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      {" "}
                      Project{" "}
                    </button>
                  </div>
                </nav>
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
          <div className="container">
            <div className="row">
              <div className="col-md-3 filter-freelancer">
                <h2>Filter</h2>
                <label for="customRange2" className="form-label">
                  Hourly rate
                </label>
                <input type="range" className="form-range" id="customRange2" />

                <div className="container">
                  <p> $0 – 80 USD+ </p>
                </div>
                <div className="row">
                  <div className="col-1"></div>
                  <div className=" mb-3 col-md-4">
                    <div className="row">
                      <span className="input-group-text w-25">$</span>
                      <input
                        type="text"
                        className="form-control w-75"
                        aria-label="Amount (to the nearest dollar)"
                      />
                    </div>
                  </div>
                  <div className="col-md-2 to-max">to</div>
                  <div className=" mb-3 col-md-4">
                    <div className="row">
                      <span className="input-group-text w-25">$</span>
                      <input
                        type="text"
                        className="form-control w-75"
                        aria-label="Amount (to the nearest dollar)"
                      />
                    </div>
                  </div>
                </div>
                <h5 className="text-left mt-3">Skills</h5>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Skills"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Mobile App Development
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Data Entry
                  </label>
                </div>
                <h5 className="text-left mt-3">Client's country</h5>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search country"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <h5 className="text-left mt-3">Client's country</h5>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search country"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <h5 className="text-left mt-3">Online</h5>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    for="flexSwitchCheckDefault"
                  >
                    Default switch checkbox input
                  </label>
                </div>
                <h5 className="text-left mt-3">Rating</h5>
                <div className="ratings">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>
                <h4 for="customRange2" className="form-label">
                  Reviews
                </h4>
                <input
                  type="range"
                  className="form-range"
                  min="0"
                  max="100"
                  id="customRange2"
                />
                <p> 0 – 500+ reviews</p>

                <h5 className="text-left mt-3">Exams </h5>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Skills"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    US English - Level 1
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Adobe Photoshop CS5 - Level 1
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Data Entry
                  </label>
                </div>
              </div>
              <div className="col-md-9">
                <div className="card text-dark mt-3">
                  <div className="card-header">
                    Top results
                    <span>Showing 1-20 of 1989256 results</span>
                  </div>
                  {users.map((users) => (
                    <SingleFreelancer users={users} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="tab-pane fade p-3"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          <div className="mt-5">
            <div className="container">
              <div className="container">
                <div className="row">
                  <div className="col-md-3 filter-project">
                    <h2>Filter</h2>
                    <h4>Project type</h4>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Fixed Price
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Hourly Rate
                      </label>
                    </div>
                    <label>min</label>
                    <div className="input-group mb-3">
                      <span className="input-group-text">$</span>
                      <input
                        type="text"
                        className="form-control"
                        value={min_value}
                        type="text"
                        onChange={(e) => setMinValue(e.target.value)}
                        aria-label="Amount (to the nearest dollar)"
                      />
                      <span className="input-group-text">USD</span>
                    </div>
                    <label>max</label>
                    <div className="input-group mb-3">
                      <span className="input-group-text">$</span>
                      <input
                        value={max_value}
                        type="text"
                        onChange={(e) => setMaxValue(e.target.value)}
                        className="form-control"
                        aria-label="Amount (to the nearest dollar)"
                      />
                      <span className="input-group-text">USD</span>
                    </div>
                    <h5 className="text-left mt-3">Hourly rate</h5>
                    <label>min</label>
                    <div className="input-group mb-3">
                      <span className="input-group-text">$</span>
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Amount (to the nearest dollar)"
                      />
                      <span className="input-group-text">USD</span>
                    </div>
                    <label>max</label>
                    <div className="input-group mb-3">
                      <span className="input-group-text">$</span>
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Amount (to the nearest dollar)"
                      />
                      <span className="input-group-text">USD</span>
                    </div>
                    <h5>Skills</h5>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-search"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Skills"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Website Design
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Website Design
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Website Design
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Website Design
                      </label>
                    </div>
                    <h4 className="mt-3">Listing type</h4>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Website Design
                      </label>
                    </div>{" "}
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Website Design
                      </label>
                    </div>{" "}
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Website Design
                      </label>
                    </div>{" "}
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Website Design
                      </label>
                    </div>
                    <h5>Project location</h5>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                      <span className="input-group-text" id="basic-addon1">
                        <i className="far fa-dot-circle"></i>
                      </span>
                    </div>
                    <h5 className="text-left mt-3">Countries</h5>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-search"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Countries"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <h5 className="text-left mt-3">Languages</h5>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-search"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Countries"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        English
                      </label>
                    </div>
                  </div>
                  <div className="col-md-9">
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
                    <Nav2 project={project} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <Footer />
      </div>
    </div>
  );
};

export default DisplayProject;
