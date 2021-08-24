import React,{useEffect,useState} from 'react';
import { connect } from 'react-redux';
import {fetchStudents,deleteStudent} from "../redux/index"
import studentModel from "./student"
import CreateStudent from './createStudent';
import UpdateStudent from './update';
import { Redirect, Router } from 'react-router';
import { render } from '@testing-library/react';
import { Route,Link } from 'react-router-dom';

function ShowStudent({studentData,fetchStudents,deleteStudent}) {
    const [redirect,setredirect] = useState(false)
    const  [student,setStudent]=useState({})
    useEffect(()=>{
        fetchStudents()
    },[])
    const handleDelete=(id)=>{
        console.log(id);
      deleteStudent(id)

    }
    
    const handleUpdate=(student)=>{
        let { id, name, age } = student;
        localStorage.setItem('ID', id);
        localStorage.setItem('Name', name);
        localStorage.setItem('Age', age);
       
      
      
       
    }
    if (redirect){
        
    }
    return (
        
        <div>
            <h3 style={{textAlign:"center"}}>Student Table</h3>
            <table className="table">
                <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th></th>
                        </tr>
                    
                </thead>
                <tbody>
                    {studentData.students.map(stu=>(
                        <tr key={stu.id}>
                            <td>{stu.name}</td>
                            <td>{stu.age}</td>
                            <td>
                                <button onClick={()=>handleDelete(stu.id)}>Delete</button>
                                <Link to="/update">
                                <button onClick={()=>handleUpdate(stu)}>Update</button>
                                </Link>
                                
                                
                                </td>
                           
                        </tr>

                    ))}

                </tbody>
            </table>
        </div>
//         studentData.loading ? (
//             <h2>Loading</h2>
//         ):studentData.error ? (
//             <h2>{studentData.error}</h2>
//         ):(
//             <div>
//                 <h2>User List </h2>
//                 <div>
//                     {studentData && 
//                     studentData.students && 
//                     studentData.students.map(user=><p>{user.name}</p>)
//                     }
//                 </div>
//             </div>
//         )
   
   
//    )
    )
}

const mapStateToProps = state =>{
    return {
        studentData:state
    }  
}

const mapDispatchToProps = dispatch => {
    return{
        fetchStudents :()=>dispatch(fetchStudents()),
        deleteStudent:(id)=>dispatch(deleteStudent(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShowStudent)
