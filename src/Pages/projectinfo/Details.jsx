
import React from 'react'
// import fixedpriceproject from "../../../../src/public/imgPostproject/fixedpriceproject.svg";
// import contestIcon from "../../../../src/public/imgPostproject/contestIcon.svg";
// import './Stepfive.css'
import Footer from '../../Components/Footer'
import Nav2 from './Nav2';
const ContestOne = ({ Data, setData }) => {


    const submit = (e) => {
        if (e === 1) {
          //   setData({ ...Data, type_of_project: "Standard project" });
          document.getElementById("post").style.border = "thick solid #139ff0 ";
          document.getElementById("start").style.border = "";
        } else if (e === 2) {
          //   setData({ ...Data, type_of_project: "Recruiter project" });
          document.getElementById("start").style.border = "thick solid #139ff0 ";
          document.getElementById("post").style.border = "";
        }
      };
      const onCheck1=()=>{
        const  GUARANTEED=document.getElementById("GUARANTEED").checked;
        console.log(GUARANTEED)
        if(GUARANTEED===true){
          setData({ ...Data, GUARANTEED: "GUARANTEED" });
        }else{
          setData({ ...Data, GUARANTEED:""});
        }
      }
      const onCheck2=()=>{
        const  FEATURED=document.getElementById("FEATURED").checked;
        if(FEATURED===true){
          setData({ ...Data, FEATURED: "FEATURED" });
        }else{
          setData({ ...Data, FEATURED: "" });
        }
      }
      const onCheck3=()=>{
        const CONTEST=document.getElementById("TOP_CONTEST").checked;
        if(CONTEST===true){
          setData({ ...Data, TOP_CONTEST: "TOP CONTEST" });
        }else{
          setData({ ...Data, TOP_CONTEST: "" });
        }
      }
      const onCheck4=()=>{
        const HIGHLIGHT=document.getElementById("HIGHLIGHT").checked;
        if(HIGHLIGHT===true){
          setData({ ...Data, HIGHLIGHT: "HIGHLIGHT" });
        }else{
          setData({ ...Data, HIGHLIGHT: "" });
        }
      }
      const onCheck5=()=>{
        const  SEALED=document.getElementById("SEALED").checked;
        if(SEALED===true){
          setData({ ...Data, SEALED: "SEALED" });
        }else{
          setData({ ...Data, SEALED: "" });
        }
      }
      const onCheck6=()=>{
        const  NDA=document.getElementById("NDA").checked;
        
        if(NDA===true){
          setData({ ...Data, NDA: "NDA" });
        }else{
          setData({ ...Data, NDA: "" })
        }
      }
      const onCheck7=()=>{
        const  PRIVATE=document.getElementById("PRIVATE").checked;
        if(PRIVATE===true){
          setData({ ...Data, PRIVATE: "PRIVATE" });
        }else{
          setData({ ...Data, PRIVATE: "" });
    
        }
      }
      


    return (
        <>
         <div className="parent ">
          <Nav2/>
        <div className="container">
      
  {/* --------------------------------------------------------1-------------------------------------------------*/}
          <div className="col-ms-5 col-md-12 mt-5">
              <div className="row">
                  <div className="col-ms-5 col-md-12">
                      <div className="row">
                          <div className="col-md-4">
                          <div class="form-check">
                          <label class="form-check-label" for="flexCheckDefault">
                         <input class="form-check-input " type="checkbox" 
                         id="GUARANTEED"
                         name="GUARANTEED"
                        onChange={onCheck1}
                         />
                          <p><b>FREE</b></p>
                              </label>
                           </div>
                          </div>
                          <div className="col-ms-12 col-md-4 mx-auto">
                          <span class="badge bg-success px-3" style={{width: "100%"}}>GUARANTEED</span>
                          </div>
                          <div className="col-ms-5 col-md-4">
                              <p>
                              Guarantee freelancers that a winner will be chosen and awarded the prize.
                               This will attract better entries from more freelancers.
                               Moneyback guarantee is not applicable if a contest has a guaranteed upgrade.
                              </p>
                          </div>
                      </div>
                  </div>
                  <hr/>
  {/* --------------------------------------------------------2-------------------------------------------------*/}

                  <div className="col-md-12">
                  <div className="row">
                          <div className="col-sm-12 col-md-4">
                          <div class="form-check">
                          <label class="form-check-label" for="flexCheckDefault">
                         <input class="form-check-input" type="checkbox"
                         name="FEATURED"
                         onChange={onCheck2}
                           id="FEATURED"/>
                         <p><b>1,500.00</b></p> 
                              </label>
                           </div>
                          </div>
                          <div className="col-sm-12 col-md-4 mx-auto">
                          <span class="badge bg-danger px-4" style={{width: "100%"}}>FEATURED</span>
                          </div>
                          <div className="col-sm-12 col-md-4">
                              <p>
                              Attract more freelancers with a prominent placement in our 'Featured Jobs and Contests' page
                              </p>
                          </div>
                      </div>
                  </div>
                  <hr/>
  {/* --------------------------------------------------------3-------------------------------------------------*/}
                  <div className="col-md-12">
                  <div className="row">
                          <div className="col-md-4">
                          <div class="form-check">
                          <label class="form-check-label" for="flexCheckDefault">
                         <input class="form-check-input" type="checkbox" name="TOP_CONTEST"
                         onChange={onCheck3} 
                         id="TOP_CONTEST"/>
                         <p><b>1,500.00</b></p> 
                              </label>
                           </div>
                          </div>
                          <div className="col-sm-12 col-md-4 mx-auto">
                          <span class="badge bg-secondary px-3" style={{width: "100%"}}>TOP CONTEST</span>
                          </div>
                          <div className="col-md-4">
                              <p>
                              We will contact our top freelancers to join your contest.
                              </p>
                          </div>
                      </div>
                  </div>
                  <hr/>
  {/* --------------------------------------------------------4-------------------------------------------------*/}
                  <div className="col-md-12">
                  <div className="row">
                          <div className="col-md-4">
                          <div class="form-check">
                          <label class="form-check-label" for="flexCheckDefault">
                         <input class="form-check-input" type="checkbox" 
                         name="HIGHLIGHT"
                         onChange={onCheck4}
                          id="HIGHLIGHT"/>
                         <p><b>750.00</b></p> 
                              </label>
                           </div>
                          </div>
                          <div className="col-md-4 mx-auto">
                          <span class="badge bg-info text-dark px-4" style={{width: "100%"}}>HIGHLIGHT</span>
                          </div>
                          <div className="col-md-4">
                              <p>
                              Make your contest more visible in our main job search pages.   
                              </p>
                          </div>
                      </div>
                  </div>
                  <hr/>
  {/* --------------------------------------------------------5-------------------------------------------------*/}
                  <div className="col-md-12">
                  <div className="row">
                          <div className="col-md-4">
                          <div class="form-check">
                          <label class="form-check-label" for="flexCheckDefault">
                         <input class="form-check-input" type="checkbox" 
                         name="SEALED"
                         onChange={onCheck5}
                          id="SEALED"/>
                         <p><b>1,500.00</b></p> 
                              </label>
                           </div>
                          </div>
                          <div className="col-md-4 mx-auto">
                          <span class="badge text-light px-4" style={{backgroundColor:"#29b2fe",width: "100%"}} > SEALED </span>
                          </div>
                          <div className="col-md-4">
                          Only you can see individual entries, ensuring you get unique ideas.
                          </div>
                      </div>
                  </div>
                  <hr/>
  {/* --------------------------------------------------------6-------------------------------------------------*/}
                  <div className="col-md-12">
                  <div className="row">
                          <div className="col-md-4">
                          <div class="form-check">
                          <label class="form-check-label" for="flexCheckDefault">
                         <input class="form-check-input" type="checkbox" 
                          name="NDA"
                          onChange={onCheck6}
                          id="NDA"/>
                         <p><b>1,000.00</b></p> 
                              </label>
                           </div>
                          </div>
                          <div className="col-md-4 mx-auto">
                          <span class="badge bg-primary" style={{width: "100%"}}>NDA</span>
                          </div>
                          <div className="col-md-4">
                              <p>Freelancers must sign a Non-Disclosure Agreement to see your contest details.</p>
                          </div>
                      </div>
                  </div>
                  <hr/>
  {/* --------------------------------------------------------7-------------------------------------------------*/}
                  <div className=" col-md-12">
                  <div className="row">
                          <div className="col-md-4">
                          <div class="form-check">
                          <label class="form-check-label" for="flexCheckDefault">
                         <input class="form-check-input" type="checkbox" 
                         name="PRIVATE"
                         onChange={onCheck7}
                          id="PRIVATE"/>
                         <p><b>1,000.00 </b></p> 
                              </label>
                           </div>
                          </div>
                          <div className="col-md-4 mx-auto">
                          <span class="badge bg-warning text-dark" style={{width: "100%"}}>PRIVATE</span>
                          </div>
                          <div className="col-md-4">
                              <p >Hide project details from search engines and users that are not logged in, 
                                  for projects that you need to keep confidential.</p>
                          </div>
                          {/* class="text-wrap " style={{width: "20rem"}} */}
                      </div>
                  </div>

              </div>
          </div>
        </div>
        <Footer/>
        </div>
        
      </>
    )
}

export default ContestOne
