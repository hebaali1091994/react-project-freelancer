import React from 'react';
import Form from 'react-bootstrap/Form'
export const Firstform = ({Data,setData,register}) => {  
  
    return ( 
        <div>
        <form className="d-flex flex-column">
          <label>
          <p style={{fontSize:"1.3rem"}}><b>Choose a name for your project</b></p>
          <input
              type="text"
              id="username"
              name="ChooseName"
              className="form-control"
              value={Data.firstName}
              onChange={(event)=>setData({...Data,ChooseName:event.target.value})}
              style={{height:"50px"}}
              
            />
            </label>
            <label className="mt-2">
            <p style={{fontSize:"1.3rem"}}><b>Tell us more about your project</b></p>
             <textarea
              id="Tellus"
              name="Tellus"
              className="form-control"
              value={Data.Tellus}
              onChange={(event)=>setData({...Data,Tellus:event.target.value})}
              style={{width:"100%",height:"100px"}}
              />
            </label>
            <Form.Group controlId="formFileLg" className="mb-3">
    <Form.Label style={{fontSize:"1.3rem"}}><b>Upload Files</b></Form.Label>
    <Form.Control type="file" size="lg"
      name="uploadimg"
     value={Data.uploadimg}
     onChange={(event)=>setData({...Data,uploadimg:event.target.value})}
     />
  </Form.Group>
  <div>
    <p style={{fontSize:"1.3rem"}}><b>What skills are required?</b></p>
    <p>Enter up to 5 skills that best describe your project. 
      Freelancers will use these skills to find projects they 
      are most<br/> interested and experienced in.</p>
    <input type="text"
    className="form-control"
    style={{height:"50px"}}
    name="skills"
    value={Data.skills}
    onChange={(event)=>setData({...Data,skills:event.target.value})}
    />
  </div>
     </form>
        </div>
    )
}