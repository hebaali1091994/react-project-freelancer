import react from "react";
import { Link } from "react-router-dom";
export default function Profile(){
    return(
        <div class="container">
        <div class="row">
        <div className="show">

            <aside id="asideright" class="col-md-12 shadow-lg p-3 mb-5 bg-body rounded">
                <div class="container">
                    <form class="row g-3 d-flex flex-column">
                        <p class="fs-1"><b>Profile Details</b></p>
                       
                        <hr/>
                        <p class="fs-5"><b>Name </b></p>
                        <div class="row" style={{margin:"0px 0px 20px 0px"}} >
                        <div class="col-md-6">
                            <label for="text1" class="form-label"><b>First Name*</b></label>
                            <input type="text" class="form-control" id="text1"/>
                        </div>
                        <div class="col-md-6">
                            <label for="text2" class="form-label"><b>Last Name*</b></label>
                            <input type="text" class="form-control" id="text2"/>
                        </div>
                      </div>
                        <hr></hr>



                        <p class="fs-5"><b>Address </b></p>
                        <div class="row" >
                        <div class="col-md-15">
                            <label for="address" class="form-label"> <b>Address*</b></label>
                            <input type="text" class="form-control" id="address"  style={{margin:"0px 0px 25px 0px"}}/>
                            <input type="text" class="form-control" id="address"/>
                        </div>


                        <div class="col-15" style={{margin:"15px 0px 0px 0px"}}>
                        <label for="address" class="form-label"> <b>City*</b></label>
                            <input type="text" class="form-control" id="address"  />
                        </div>


                        <div class="row" style={{margin:"15px 0px 0px 0px"}} >
                        <div class="col-md-6">
                            <label for="text1" class="form-label"><b>Zip/Post Code*</b></label>
                            <input type="text" class="form-control" id="text1"/>
                        </div>
                        <div class="col-md-6">
                   
                        <label for="text2" class="form-label">
                            <b>State/Province*</b></label>
<input type="text" class="form-control" id="text2"/>
</div>
                        </div>
              
                      




                      

                      <form>
  <fieldset disabled>
                     <label for="disabledTextInput" class="form-label"> <b>City*</b></label>    
<div class="input-group flex-nowrap">
<input type="text" class="form-control"id="disabledTextInput"/>
  <span class="input-group-text" id="addon-wrapping">

  <svg xmlns="http://www.w3.org/2000/svg" 
width="30px" height="25px"
// viewBox="0 0 24 24"
style={{ fill:"#757575"}}>   
<path d="M 12 1 C 8.6761905 1 6 3.6761905 6 7 L 6 8 C 4.9069372 8 4 8.9069372 4 10 L 4 20 C 4 
21.093063 4.9069372 22 6 22 L 18 22 C 19.093063 22 20 21.093063 20 20 L 20 10 C 20
 8.9069372 19.093063 8 18 8 L 18 7 C 18 3.6761905 15.32381 1 12 1 z M 12 3 C 14.27619 
 3 16 4.7238095 16 7 L 16 8 L 8 8 L 8 7 C 8 4.7238095 9.7238095 3 12 3 z M 
 6 10 L 18 10 L 18 20 L 6 20 L 6 10 z M 12 13 C 10.9 13 10 13.9 10 15 C 10 
 16.1 10.9 17 12 17 C 13.1 17 14 16.1 14 15 C 14 13.9 13.1 13 12 13 z"></path>
 </svg>

  </span>
</div>

</fieldset>
</form>
<div class="col-15"style={{margin:"15px 0px 0px 0px"}}>
                        <label for="address" class="form-label"> <b>Company</b></label>
                            <input type="text" class="form-control" id="address"  />
                       
                        </div>


                        <div class="row" >
                        <div class="row" style={{margin:"15px 0px 23px 0px"}} >
                        <div class="col-md-6">
                <label for="text1" class="form-label"><b>Time Zone</b></label>
               < select class="form-select" id="inputGroupSelect02"> </select>
                        </div>

                        <div class=" col-6" >
                                             
                        <label for="text2" class="form-label">
                            <b>State/Province*</b></label>
<input type="text" class="form-control" id="text2"/>

</div>




  </div> 


</div>

                    
                        </div>
                        <hr></hr>

                        <p class="fs-5"><b>Language Settings </b></p>
                        <div class="col-md-6">
                <label for="text1" class="form-label"><b>I want to browse the website in:</b></label>
               < select class="form-select" id="inputGroupSelect02"> </select>
                        </div>
                        <div>
                        <div class="col-md-6"  style={{margin:"0px 0px 25px 0px"}} >
                <label for="text1" class="form-label"><b>
I want to browse projects in the following languages:</b></label>
               < select class="form-select" id="inputGroupSelect02"></select>
                        </div>
                        <hr></hr> 
                        {/* 800px change to 100 */}
          <div style={{ backgroundColor: "#f7f7f7", width: "100%", minHeight:"100px"}}>
                          
<div >
<button type="save" class="btn btn-primary" >Save Setting</button>

    </div>
</div>
<hr></hr>
          </div>
          <p class="fs-5"><b>Security Phone Number </b></p>
<p>Provide a phone number and country to use as </p>
    <p>verification of your account</p>

  <span>
<button type="save"class=" col-3"style={{ backgroundColor: "#f7f7f7", Color:"black",fontWeight:"bold",fontSize:"13px",height:"30px", width:"200px"}} >Set Up Security Number</button>
      </span>  


  
                    </form>
                </div>
            </aside>
        </div>
        
        </div>
    </div>
    )

}


























