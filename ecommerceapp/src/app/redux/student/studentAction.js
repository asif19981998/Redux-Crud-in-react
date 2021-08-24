import {FETCH_STUDENTS_GET,
        FETCH_STUDENTS_POST,
        FETCH_STUDENTS_SUCCESS,
        FETCH_STUDENTS_FAILURE} from "./studentType"
import axios from "axios"
import { Link } from 'react-router-dom';
export const fetchStudentsRequest = ()=>{
    return {
      type:FETCH_STUDENTS_GET
    }
  }
export const postStudentRequest =(student)=>{
    return {
        type:FETCH_STUDENTS_POST,
        payload:student
    }
}
  export  const fetchStudentsSuccess = students =>{
    return {
      type:FETCH_STUDENTS_SUCCESS,
      payload:students
         
    }
  }
  export  const fetchStudentsFailure = error =>{
    return {
      type:FETCH_STUDENTS_FAILURE,
      payload:error
    }
  } 

  export   const fetchStudents = ()=>{
    
    return function(dispatch){
      dispatch(fetchStudentsRequest())
      axios.get("http://localhost:8000/api/student")
      .then(response =>{
          const students = response.data
          console.log(students)
          dispatch(fetchStudentsSuccess(students))
      })
      .catch(error=>{
          const errorMsg = error.message
          dispatch(fetchStudentsFailure(errorMsg))
      }) 
    }
  }

  export   const postStudent =(student,props)=>{
    
    return function(dispatch){
        console.log("student call",student)
      if (student.id==null){
        axios.post("http://localhost:8000/api/student",student)
        .then(response =>{
            const students = response.data
            dispatch(fetchStudentsSuccess(students))
          
        })
        .catch(error=>{
            const errorMsg = error.message
            dispatch(fetchStudentsFailure(errorMsg))
        }) 

      }

      else{
        axios.put(`http://localhost:8000/api/student/${student.id}`,student)
        .then(response =>{
            const students = response.data
            dispatch(fetchStudentsSuccess(students))
           console.log(props)
            props.history.push('/');
            console.log("Put hoice")
            
        })
        .catch(error=>{
            const errorMsg = error.message
            dispatch(fetchStudentsFailure(errorMsg))
        }) 
      }
    }
  

}

export   const deleteStudent =(id)=>{
    
  return function(dispatch){
     
    
    axios.delete(`http://localhost:8000/api/student/${id}`)
    .then(response =>{
        const students = response.data
        dispatch(fetchStudentsSuccess(students))
    })
    .catch(error=>{
        const errorMsg = error.message
        dispatch(fetchStudentsFailure(errorMsg))
    }) 
  }


}



