import {useState} from "react";



import { Link } from "react-router-dom";

export default function Email(){
    const [toggle,setToggle]=useState(false)
    const [toggl,setToggl]=useState(false)
    const [togg,setTogg]=useState(false)
    const [tog,setTog]=useState(false)
    const [to,setTo]=useState(false)
    const [change,setChange]=useState(false)
    const [chang,setChang]=useState(false)
    const [chan,setChan]=useState(false)
    const [cha,setCha]=useState(false)
    const [onchange,setOnchange]=useState(false)
    const [onchang,setOnchang]=useState(false)
    const [onchan,setOnchan]=useState(false)
    const [oncha,setOncha]=useState(false)
    const [onch,setOnch]=useState(false)
    const [onc,setOnc]=useState(false)
    const [on,setOn]=useState(false)
    const [click,setClick]=useState(false)
    const [clic,setClic]=useState(false)
    const [cli,setCli]=useState(false)
    const [cl,setCl]=useState(false)
    const [trye,setTrye]=useState(false)
    const [tr,setTr]=useState(false)

    return(
        <div class="container">
        <div class="row">
        <div className="show">

            <div id="" class="col-md-12 shadow-lg p-3 mb-5 bg-body rounded">
                <div class="container">
                    <form class="row g-3 d-flex flex-column">
                        <p class="fs-1"><b>Email & Notifications</b></p>
                        <hr/>
                        <p class="fs-5"><b>Email </b></p>
                        <div class="row" id="email">
                        <div class="col-md-6">
                            <label for="Password" class="form-label"><b>Email Address</b></label>
                            <input type="email" class="form-control" id="Password"/>
                        </div>
      
                        <div class="col-md-6">
                            <label for="Confirm"id="Confirm" class="form-label"><b>Enter Current Password (if changing email)</b></label>
                            <input type="password" class="form-control" id="Confirm"/>
                        </div>
                       </div>

                        <div class="col-12">
                            <button type="updata" class="btn btn" style={{backgroundColor:"#f2f2f2",Color:"black",fontWeight:"bold",fontSize:"13px",height:"30px", width:"200px",marginBottom:"30px"}}>Updata Email Address</button>
                        </div>
                        <hr></hr>
                        <p class="fs-5"><b>Email FormatEmail </b></p>
                        <div class="col-md-6">
                            <label for="Password" class="form-label"><b>Email format</b></label>
                            <select class="form-select" aria-label="Default select example">
                                    <option selected>Html</option>
                                    <option value="2">Plain Text</option>
                                    </select>
                                    </div>
                                    <hr></hr>
                                    <p class="fs-5"><b>Digest emails for your posted projects</b></p>
                                    <div class="form-check form-switch">
                                        {toggle ? (
                                            <p style={{color:"green"}}>Your settings have been successfully saved!</p>
                                        ):null}
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={()=> setToggle(!toggle)}/>
  <label class="form-check-label" for="flexSwitchCheckDefault"> When a bid is placed / updated / retracted on your project</label>
</div>
                                    { toggle ? (
                                        <div>
                                    <div class="col-md-6">

                            <label for="Password" class="form-label"><b>Email frequency for project related activity</b></label>
                            <select class="form-select" aria-label="Default select example">
                                    <option selected>Default</option>
                                    <option value="2">Instantly</option>
                                    <option value="2">Every hour</option>
                                    <option value="2">Every 3 hours</option>
                                    <option value="2">Every 6 hours</option>
                                    <option value="2">Every 12 hours</option>
                                    <option value="2">Daily</option>
                                    </select>
  </div>
  
  <p>Receive the first 3 notifications immediately. Then project activity summaries after 15, 30 and 45 minutes, then after 2 and 6 hours, and then daily.</p> </div>
                                    )  : null} 
  <hr></hr>
{/* Emails for latest projects posted */}
  <p class="fs-5"><b>Emails for latest projects posted</b></p>
  
                                    <div class="form-check form-switch">
                                    {toggl ? (
                                            <p style={{color:"green"}}>Your settings have been successfully saved!</p>
                                        ):null}  
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={()=> setToggl(!toggl)}/>
  <label class="form-check-label" for="flexSwitchCheckDefault">  When a project gets posted that matches my selected skills</label>
</div>
                                        { toggl ? (
                                        <div>
                                    <div class="col-md-6">
                            <label for="Password" class="form-label"><b>Email frequency</b></label>
                            <select class="form-select" aria-label="Default select example">
                                    <option selected>Daily</option>
                                    <option value="1">Every hour</option>
                                    <option value="2">Every 4 hours</option>
                                    <option value="3">Every 6 hours</option>
                                    <option value="4">Every 12 hours</option>
                                    </select>
                                    </div>
                                    </div>
                                    )  : null} 
                                 <hr></hr> 
                                  {/* Emails for latest local jobs */}
                                 <p class="fs-5"><b>Emails for latest local jobs</b></p> 
                                 <div class="form-check form-switch"> 
                                 {togg? (
                                            <p style={{color:"red"}}>You must have a verified phone number before changing this setting.</p>
                                        ):null}  
 <Link to="/Account"><input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={()=> setTogg(!togg)}/></Link>
  <label class="form-check-label" for="flexSwitchCheckDefault">   SMS notification when an employer is interested in hiring me</label>
</div>

<div class="form-check form-switch"> 
                                 {tog? (
                                          <p style={{color:"green"}}>Your settings have been successfully saved!</p>   
                                        ):null}  
<input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={()=> setTog(!tog)}/>
  <label class="form-check-label" for="flexSwitchCheckDefault"> When a local job in my area gets posted</label>
</div>
<hr></hr>
{/* Digest emails for messages */}


<p class="fs-5"><b>Digest emails for messages</b></p> 
                                 <div class="form-check form-switch"> 
                                 {to? (
                                            <p style={{color:"green"}}>Your settings have been successfully saved!</p>
                                        ):null}  
 <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={()=> setTo(!to)}/>
  <label class="form-check-label" for="flexSwitchCheckDefault"> When you receive a private message from a contact</label>
</div>

<div class="form-check form-switch"> 
   {change? (
     <p style={{color:"green"}}>Your settings have been successfully saved!</p>   
 ):null}  
<input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={()=> setChange(!change)}/>
  <label class="form-check-label" for="flexSwitchCheckDefault"> When a local job in my area gets posted</label>
</div>

<div class="form-check form-switch"> 
   {chang? (
     <p style={{color:"green"}}>Your settings have been successfully saved!</p>   
 ):null}  
<input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={()=> setChang(!chang)}/>
  <label class="form-check-label" for="flexSwitchCheckDefault">When you receive a message from Freelancer.com staff</label>
</div>
<hr></hr>
{/* Digest emails for groups */}
<p class="fs-5"><b>Digest emails for groups</b></p> 
<div class="form-check form-switch"> 
                                 {chan? (
                                            <p style={{color:"green"}}>Your settings have been successfully saved!</p>
                                        ):null}  
 <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={()=> setChan(!chan)}/>
  <label class="form-check-label" for="flexSwitchCheckDefault"> When a new post is posted in a group you are a member of</label>
</div>

<div class="form-check form-switch"> 
   {cha? (
     <p style={{color:"green"}}>Your settings have been successfully saved!</p>   
 ):null}  
<input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={()=> setCha(!chan)}/>
  <label class="form-check-label" for="flexSwitchCheckDefault">When a new comment is posted on a post you are following</label>
</div>

<div class="form-check form-switch"> 
   {onchange? (
     <p style={{color:"green"}}>Your settings have been successfully saved!</p>   
 ):null}  
<input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={()=> setOnchange(!onchange)}/>
  <label class="form-check-label" for="flexSwitchCheckDefault">

When you are mentioned in a new comment</label>
</div>
<hr></hr>
{/* Individual Emails */}

<p class="fs-5"><b>Individual Emails</b></p> 
<div class="form-check form-switch"> 
                                 {onchang? (
                                            <p style={{color:"green"}}>Your settings have been successfully saved!</p>
                                        ):null}  
 <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={()=> setOnchang(!onchang)}/>
  <label class="form-check-label" for="flexSwitchCheckDefault"> News and announcements from Freelancer.com</label>
</div>


<div class="form-check form-switch"> 
   {onchan? (
     <p style={{color:"green"}}>Your settings have been successfully saved!</p>   
 ):null}  
<input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={()=> setOnchan(!onchan)}/>
  <label class="form-check-label" for="flexSwitchCheckDefault">You are awarded a project</label>
</div>


<div class="form-check form-switch"> 
   {oncha? (
     <p style={{color:"green"}}>Your settings have been successfully saved!</p>   
 ):null}  
<input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={()=> setOncha(!oncha)}/>
  <label class="form-check-label" for="flexSwitchCheckDefault">

  A freelancer requests you to release a milestone payment</label>
</div>

<div class="form-check form-switch"> 
   {onch? (
     <p style={{color:"green"}}>Your settings have been successfully saved!</p>   
 ):null}  
<input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={()=> setOnch(!onch)}/>
  <label class="form-check-label" for="flexSwitchCheckDefault">

  We notify you of the top bidder for your project</label>
</div>

<div class="form-check form-switch"> 
   {onc? (
     <p style={{color:"green"}}>Your settings have been successfully saved!</p>   
 ):null}  
<input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={()=> setOnc(!onc)}/>
  <label class="form-check-label" for="flexSwitchCheckDefault">

  We notify you of the latest activity regarding Services.</label>
</div>

<div class="form-check form-switch"> 
   {on? (
     <p style={{color:"green"}}>Your settings have been successfully saved!</p>   
 ):null}  
<input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={()=> setOn(!on)}/>
  <label class="form-check-label" for="flexSwitchCheckDefault">
  We notify you of the latest activity regarding Freemarket.</label>
</div>

<div class="form-check form-switch"> 
   {click? (
     <p style={{color:"green"}}>Your settings have been successfully saved!</p>   
 ):null}  
<input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={()=> setClick(!click)}/>
  <label class="form-check-label" for="flexSwitchCheckDefault">A freelancer requests you as a contact</label>
</div>
<hr></hr>
{/* Other Emails */}
<p class="fs-5"><b>Other Emails</b></p> 
<div class="form-check form-switch"> 
   {clic? (
     <p style={{color:"green"}}>Your settings have been successfully saved!</p>   
 ):null}  
<input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={()=> setClic(!clic)}/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Marketing emails</label>
</div>

<div class="form-check form-switch"> 
   {cli? (
     <p style={{color:"green"}}>Your settings have been successfully saved!</p>   
 ):null}  
<input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={()=> setCli(!cli)}/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Freelancer.com deals</label>
</div>

<div class="form-check form-switch"> 
   {cl? (
     <p style={{color:"green"}}>Your settings have been successfully saved!</p>   
 ):null}  
<input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={()=> setCl(!cl)}/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Monthly newsletter</label>
</div>
<div class="form-check form-switch"> 
   {trye? (
     <p style={{color:"green"}}>Your settings have been successfully saved!</p>   
 ):null}  
<input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={()=> setTrye(!trye)}/>
  <label class="form-check-label" for="flexSwitchCheckDefault">

  Weekly Community digest</label>
</div>

<div class="form-check form-switch"> 
   {tr? (
     <p style={{color:"green"}}>Your settings have been successfully saved!</p>   
 ):null}  
<input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={()=> setTr(!tr)}/>
  <label class="form-check-label" for="flexSwitchCheckDefault">
  Referral Program Notifications</label>
</div>


                    </form>
                </div>
            </div>
        </div>
        
        </div>
        
    </div>
    )

}




