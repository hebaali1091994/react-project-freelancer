import  axios  from 'axios';
import React,{useState,useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
export const Firstform = ({Data,setData,register}) => {  
// const [datta,setSkills] = useState([])
//   useEffect(() => {
//     const fetchSkills = async () => {
//         const res = await axios.get("/Category/");
//         setSkills(res.data)
//     }
//     fetchSkills();
// }, []);
// console.log(datta.categoryName);

  const datta = [
    {
      value: 0,
      label: " HTML5 "
    },
    {
      value: 1,
      label: " Sass "
    },
    {
      value: 2,
      label: " js "
    },
    {
      value: 3,
      label: " Angular "
    },
    {
      value: 4,
      label: " React "
    },
    {
      value: 5,
      label: " mongodb "
    },
    {
      value: 6,
      label: " Node.js "
    },
    {
      value: 7,
      label: " PHP "
    },
    {
      value: 8,
      label: " laravel "
    },
    {
      value: 9,
      label: " Wordpress "
    },
    {
      value: 10,
      label: " MYSQL "
    },
    {
      value: 11,
      label: " SQL "
    }
  ];

  const [selectedValue, setSelectedValue] = useState([]);
const handleChange=(e)=>{
// const x=document.getElementById("v").value
setSelectedValue(Array.isArray(e) ? e.map(x => x.label) : []);
setData({ ...Data,skills: selectedValue });
}
console.log(selectedValue)
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
    {/* <input type="text"
    className="form-control"
    style={{height:"50px"}}
    name="skills"
    value={Data.skills}
    onChange={(event)=>setData({...Data,skills:event.target.value})}
    /> */}
  <Select options={datta} 
   name="skills"
  value={datta.filter(obj => selectedValue.includes(obj.label))}
  onChange={handleChange}
  isMulti
  isClearable
  />
  </div>
     </form>
        </div>
    )
}