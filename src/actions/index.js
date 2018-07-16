export const ADD_GROCERY = "ADD_GROCERY";
export const REMOVE_GROCERY = "REMOVE_GROCERY";


export  function addGroceryById(id) {
  const action ={
    type: ADD_GROCERY,
    id
  }
  return action;
}

export  function removeGroceryById(id) {
  const action ={
    type: REMOVE_GROCERY,
    id
  }
  return action;
}
