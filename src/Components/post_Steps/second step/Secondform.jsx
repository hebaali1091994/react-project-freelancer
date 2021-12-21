import React from 'react'
import projectIcon from '../../../../src/public/imgPostproject/projectIcon.svg';
import contestIcon from '../../../../src/public/imgPostproject/contestIcon.svg';
export const Secondform = ({Data,setData}) => {
   const submit=(e)=>{
        if(e===1){
            setData({...Data,postproject:"Post A project"})
            document.getElementById("post").style.border="thick solid #139ff0 ";
            document.getElementById("start").style.border="";
        }else if(e===2){
            setData({...Data,postproject:"Start a contest"})
            document.getElementById("start").style.border="thick solid #139ff0 ";
            document.getElementById("post").style.border="";
        }
    }
    return (
        <div>
            <>
                <div className="row g-1 d-flex justify-content-evenly mt-5">
                    <div id="post" className="col-md-5 shadow p-3 me-1 bg-body rounded" onClick={()=>submit(1)}>
                        <div className="row">
                            <div className="col-md-6 d-flex justify-content-center align-content-center">
                                <img className="img-fluid w-50" src={projectIcon } alt=""/>
                            </div>
                            <div className="col-md-6">
                                <p style={{fontSize:"1.3rem"}}><b>Post a project</b></p>
                                <p>Receive free quotes, best for when you have a specific idea,
                                 the project is not visual in nature or the project is complex.</p>
                            </div>
                        </div>
                    </div>
                    <div id="start" className="col-md-5 shadow p-3  bg-body rounded" onClick={()=>submit(2)}>
                    <div className="row">
                            <div className="col-md-6 d-flex justify-content-center align-content-center">
                            <img className="img-fluid w-50" src={contestIcon} alt=""/>
                            </div>
                            <div className="col-md-6">
                                <p style={{fontSize:"1.3rem"}}><b>Start a contest</b></p>
                                <p>Crowdsource ideas. Post a prize and get competing entries which you can iterate on with feedback.
                                 Great for visual designs.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        </div>
    )
}
