
const plus=()=> {
  return (dispatch)=>{
dispatch({
    type : "plus"
})
  }
}





const minus=()=> {
    return (dispatch)=>{
      
dispatch({
    type : "minus"
})
      }
    
  }

 

export  {plus,minus}
