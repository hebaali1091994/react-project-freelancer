import React from 'react'
import unknown from "../../public/unknown.png";
import illustration from "../../public/illustration.svg";
import "./MyAccount.css"
const MyAccount = () => {
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-8 leftContainer me-auto">
              <div className="row">
                  <div className="col-md-12 DetelsProfile shadow-lg p-3 mb-5 bg-body rounded">
                      <div className="row">
                          <div className="col-md-3 imgProfile d-flex flex-column">
                            <img src={unknown} alt=""/>
                               <p className="position-relative"><span className="position-absolute top-0 end-70 translate-middle p-2 bg-success border border-light rounded-circle me-1">
                                        <span className="visually-hidden">New alerts</span>
                                         </span> I'm Online!</p>
                                         <p>Qena, Egypt</p>
                                         <p><i class="far fa-clock"></i>It's currently 12:56 PM here</p>
                          </div>
                          <div className="col-md-9 infoProfile">
                           <div className="d-flex justify-content-between">
                           <p>Beshoy F.</p>
                           <button type="button" className="btn btn-primary">Edit Profile</button>
                           </div>
                         <div className="col-md-12"><p>WebDeveloper(mearn)</p></div> 
                           <div className="dicribtion col-md-12">
                               <p>Hello, my name is beshoy fawzy. I'm web developer and WordPress Developer and am still in the process of gaining more experiences through more years
My educational background possesses a bachelor’s degree in management information system. take courses in web development and software engineering effective make me more skilled in this field to work in any circumstances.
I am strong in front-end coding. I like to play with codes and results the best output from my work. I have mastered in web languages like the PHP, HTML , CSS , bootstrap and js. I can too make website by wordpress ,I enjoy using wordpress.
I can solve problems analytically and can face any complex situation with a motive of fixing it with total vividness. Also, I handle customers with a friend-like manner keeping myself within professionalism.
So, I guarantee my enthusiasm in work and fulfilling my project with inexpressible efforts. Try me and you don’t have to regret.
Thank you.</p>
                           </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-12 ReviewsProfile mt-5 shadow-lg p-3 mb-5 bg-body rounded">
                      <div className="row">
                    <div className="col-md-12"><p>Reviews</p></div>
                     <hr/>
                    <div className="col-md-12 d-flex flex-column text-center">
                        <img className="img-fluid m-auto"  src={illustration} alt=""/>
                        <p>No reviews to see here!</p>
                    </div>
                     </div>
                  </div>
              </div>
            </div>
{/*--------------------------------------------------------------------------------------*/}
            <div className="col-md-3 RightContainer shadow-lg p-3 mb-5 bg-body rounded">
                <div className="row">
                    <div className="col-md-12 d-flex mb-2">
                      <p className="me-auto">Top Skills</p>
                      <button type="button" className="btn btn-primary">Edit Skills</button> 
                    </div>
                    <hr/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default MyAccount
