/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const FETCH_DATA_START ='FETCH_DATA_START';
export const FETCH_DATA_SUCCESS ='FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';


export const getSmurfs = () => dispatch => {
  dispatch({type:FETCH_DATA_START});
  axios.get('http://localhost:3333/smurfs')
  .then(res => {
    dispatch({type:FETCH_DATA_SUCCESS,payload:res.data})
  })
  .catch(err => {
    dispatch({type:FETCH_DATA_FAILURE, payload:err})
  });

};

export const ADD_DATA_START ='FETCH_DATA_START';
export const ADD_DATA_SUCCESS ='FETCH_DATA_SUCCESS';
export const ADD_DATA_FAILURE = 'FETCH_DATA_FAILURE';


export const addData = (smurfs) => dispatch => {
  dispatch({type:ADD_DATA_START})
  axios.post('http://localhost:3333/smurfs',smurfs)
  .then(res =>{
    console.log('POST RES',res)
    dispatch({type:ADD_DATA_SUCCESS,payload:res.data});
    console.log(res)}
  )
  .catch(err =>{
    dispatch({type:ADD_DATA_FAILURE});
    console.log(err)}

     
  )

  
}

export const DEL_DATA_START ='DEL_DATA_START';
export const DEL_DATA_SUCCESS ='DEL_DATA_SUCCESS';
export const DEL_DATA_FAILURE = 'DEL_DATA_FAILURE';

export const deleteData = (id) => dispatch => {
  dispatch({type:DEL_DATA_START})
  axios.delete(`http://localhost:3333/smurfs/${id}`)
  .then(res =>{
    console.log('DELETE RES',res)
    dispatch({type:DEL_DATA_SUCCESS,payload:res.data});
    console.log(res)}
  )
  .catch(err =>{
    dispatch({type:DEL_DATA_FAILURE});
    console.log(err)}

     
  )

  
}
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
