const initialState ={
    loading:false,
    students:[],
    error:''
  }


  
  const studentGetReducer =(state=initialState,action)=>{
    switch (action.type){
      case "FETCH_STUDENTS_GET":return{
        ...state,
        loading:true
      }
      case "FETCH_STUDENTS_SUCCESS":return {
        loading:false,
        students:action.payload,
        error:''
       
      }
      case "FETCH_STUDENTS_FAILURE":return {
        loading:false,
        students:[],
        error:action.payload
      }
      case "FETCH_STUDENTS_POST":return {
          loading:true,
          students:students.concat([action.payload]),
          error:""
      }
      default: return state
    }
    

  }

  

  export default studentGetReducer;