import React from 'react'

const Mylist = () => {
    return ( 
        <div>
      
    <div className="container">
         
      <div className="topic ">My Lists</div>
      <div className="content">
        <input type="radio" name="slider" checked id="home"/>
        <input type="radio" name="slider" id="blog"/>
        <input type="radio" name="slider" id="help"/>
        <input type="radio" name="slider" id="code"/>
        <input type="radio" name="slider" id="about"/>
        <div className="list col-3 shadow ">
          <label for="home" className="home">
          <img src="./h.svg" alt=""/>
          <span className="title">Favorite</span>
        </label>
        <label for="blog" className="blog">
          <span className="icon"><img src="./b.svg" alt=""/></span>
          <span className="title">My Hires</span>
        </label>
        <div className="slider"></div>
      </div>
        <div className="text-content col-9">
          <div className="home text">
            <div className="card fav-card">
              <div className="card-header">Favorite</div>
              <div className="card-body">
                <img src="./i.svg" alt=""/>
                <h3 className="text-center">This list is empty</h3>
                <p className="text-center">Add freelancers to your list for the most convenient way to access them later.</p>
                <button className="btn-bro">Browse Freelancers</button>
              </div>
            </div>
          </div>
          <div className="blog text">
            <div className="card hir-card">
              <div className="card-header">My Hires
                <p>Here you can find all freelancers who you've worked with in the past.</p>
              </div>
              <div className="card-body">
                <img src="./i.svg" alt=""/>
                <h3 className="text-center">This list is empty</h3>
                <p className="text-center">Add freelancers to your list for the most convenient way to access them later.</p>
                <button className="btn-bro">Browse Freelancers</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
    );
};

export default Mylist;

