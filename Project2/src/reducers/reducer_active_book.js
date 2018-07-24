//State argument is not the application state.
//It is the state that it is responsible for.
export default function(state = null, action){
  switch (action.type){
    case 'SELECT_BOOK':
    {
      return action.payload;
    }break;
  }
  return state;
}
