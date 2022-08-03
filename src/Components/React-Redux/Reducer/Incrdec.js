const initialState = 100;
const ChangeValue=(state=initialState,action)=>{
  switch (action.type){
    case 'Increment' : return state +1;
    case 'Decrement' : return state -1;
    default :return state;
  }
}

export default ChangeValue;