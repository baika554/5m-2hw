const defaultState = { 
    counter: 100, 
    posts: [] 
  }; 
   

  export const counterReducer = (state = defaultState, action) => { 
    switch (action.type) { 
      case "INCREMENT_COUNTER": 

        const new_counter = state.counter + 1; 
        return { ...state, counter: new_counter }; 
      case "DECREMENT_COUNTER": 
        return { ...state, counter: state.counter - 1 }; 
      default: 
        return state; 
    } 
  }; 