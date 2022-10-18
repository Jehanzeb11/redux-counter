const initialState = {
iniSta :    0
}



const reducer = (state = initialState , action) => {

   switch (action.type) {
    case "plus":
        return {iniSta : state.iniSta+1}
      
  
        case "minus":
            return {iniSta : state.iniSta-1}
          


    default:
        return{...state}
       
  }

}

export default reducer;
