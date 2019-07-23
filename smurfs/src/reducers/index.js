/*
  Be sure to import in all of the action types from `../actions`
*/

import {FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE} from '../actions';
 
import {ADD_DATA_START,
  ADD_DATA_SUCCESS,
  ADD_DATA_FAILURE} from '../actions';


import {DEL_DATA_START,
  DEL_DATA_SUCCESS,
  DEL_DATA_FAILURE} from '../actions';
  
const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }
 export default (state=initialState,action) =>{

  

  switch(action.type){

    case FETCH_DATA_START:
    return {
      ...state,
      fetchingSmurfs:true,
      error:null
    }

    case FETCH_DATA_SUCCESS:
    return{
      ...state,
      fetchingSmurfs:false,
      smurfs:action.payload,
      error:null
    }

    case FETCH_DATA_FAILURE:
    return{
      ...state,
      fetchingSmurfs:false,
      error:action.payload.data.error
    }

    case ADD_DATA_START:
    return{
      ...state,
      addingSmurf:true
      
    }

    case ADD_DATA_SUCCESS:
    return{
      ...state,
      addingSmurf:false,
      
      smurfs:[...state.smurfs,action.payload]
     
      
    }

    case ADD_DATA_FAILURE:
    return{
      ...state,
      addingSmurf:false,
      error:action.payload
    }

    case DEL_DATA_START:
    return{
      ...state,
      deletingSmurf:true
      
    }

    case DEL_DATA_SUCCESS:
    return{
      ...state,
      deletingSmurf:false,
      
      smurfs:action.payload
     
      
    }

    case DEL_DATA_FAILURE:
    return{
      ...state,
      deletingSmurf:false,
      error:action.payload
    }

    default:
      return initialState;
  }

 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
