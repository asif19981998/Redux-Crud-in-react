import React, { useState,useEffect } from 'react'
import {TextField,Button} from '@material-ui/core';
import { connect } from 'react-redux';
import {postStudent} from "../redux/index"
import studentModel from "./student"

function CreateStudent(props) {
   
    useEffect(() => {
        console.log("call create student")
        }
    , [studentModel])
    const  [student,setStudent]=useState(studentModel)
    const handleChange=(input)=>{
        setStudent({...student,[input.name]:input.value})
        
    }
    const handleSave=()=>{
        
        props.postStudent(student)
    }
    return (

        
        <div>
            
            
            <div className="contact_body">
            <div className="contact_body_element">
            <h3 className="page-header" style={{textAlign:"center"}}>Create Student</h3>
            <div className="card project-card" >
                <form autoComplete="off">
                
                <div className="row">
                    <div className="col-12 col-md-6">
                    <TextField 
                    required id="name"
                    name="name"
                     value={student.name}
                     onChange={e=>handleChange(e.target)}

                    label="FirstName"  />
                    </div>
                   
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                    <TextField 
                    required
                     name="age"
                     value={student.age}
                     onChange={e=>handleChange(e.target)}
                    label="age" />
                    </div>
                    
                
                </div>
               
               <div  style={{marginTop:"5px"}}>
               <Button variant="contained" color="primary" onClick={handleSave}>
                    Submit
                    </Button>
               </div>
              
                   </form>    
                        </div>
                    </div>
           
               </div>
       

     
        </div>
    
        
    
    )
}

const mapStateToProps = state =>{
    return {
        studentData:state
    }  
}

const mapDispatchToProps = dispatch => {
    return {
        postStudent :(student)=>dispatch(postStudent(student))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(CreateStudent)
