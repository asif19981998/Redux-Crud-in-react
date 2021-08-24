import React, { useState,useEffect } from 'react'
import {TextField,Button} from '@material-ui/core';
import { connect } from 'react-redux';
import {postStudent} from "../redux/index"
import studentModel from "./student"
import { Link } from 'react-router-dom';

function UpdateStudent(props) {
    const [id, setId] = useState(null);
    const [name, setName] = useState('');
    const [age, setAge] = useState(null);
    const  [student,setStudent]=useState(studentModel)
    useEffect(()=>{
        setId(localStorage.getItem('ID'))
        setName(localStorage.getItem("Name"))
        setAge(localStorage.getItem("Age"))
        Object.assign(studentModel,{id,name,age})
        console.log(studentModel)

       
    },[])

    
   
    
    const handleChange=(input)=>{
        setStudent({...student,[input.name]:input.value})
        
    }
    const handleSave=()=>{
        
        props.postStudent({id,name,age},props)
        
    }
    return (

        
        <div>
            
            
            <div className="contact_body">
            <div className="contact_body_element">
            <h3 className="page-header" style={{textAlign:"center"}}>Update Student</h3>
            <div className="card project-card" >
                <form autoComplete="off">
                
                <div className="row">
                    <div className="col-12 col-md-6">
                    <TextField 
                    required id="name"
                    name="name"
                     value={name}
                     onChange={(e) => setName(e.target.value)}

                    label="FirstName"  />
                    </div>
                   
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                    <TextField 
                    required
                     name="age"
                     value={age}
                     onChange={(e) => setAge(e.target.value)}
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
        postStudent :(student,props)=>dispatch(postStudent(student,props))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(UpdateStudent)
