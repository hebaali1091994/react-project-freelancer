import react from "react";
export default function SetupSecurity(){
    return(
        <div class="container">
             <p class="fs-1"><b>Setup Security Phone Number</b></p>
             <hr></hr>
             <p class="fs-5"><b>Directory and Follow Setting</b></p>
             <p>A security code has been sent to the email address linked to your account. In order to verify your phone number, you must first verify that you have access to your email account in order to add a number. Please enter the code emailed to you in the form below.</p>
             <div class="col-md-6">
                            <label for="phone" class="form-label"><b>Email Address</b></label>
                            <input type="number" class="form-control" id="phone"/>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    )
} 