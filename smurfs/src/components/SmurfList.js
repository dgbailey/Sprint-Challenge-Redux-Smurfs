import React, { Component } from 'react';
import {getSmurfs} from '../actions';
import { connect } from 'react-redux';
import {addData} from '../actions';
import {Item} from '../components/Item';
import {deleteData} from '../actions';

class ItemList extends Component {
    constructor(props){
        super(props);
        this.state={
            smurf:{
                name:'',
                age:'',
                height:''
            }
        }
    }

    componentDidMount(){
        console.log('smurf mount');
        this.props.getSmurfs()
    }

    // getSmurf = e => {
    //     e.preventDefault();
    //     this.props.getSmurfs()
    // }
   
    // componentDidUpdate(prevState) {
    //     // Typical usage (don't forget to compare props):
    //     if (this.state !== prevState) {
    //       this.props.getSmurfs();
    //     }}

    handleChanges = e =>
    this.setState({smurf:{
        ...this.state.smurf,
        [e.target.name]:e.target.value
    }})

    postSmurf = e =>{
        e.preventDefault();
        this.props.addData(this.state.smurf)
        this.setState({smurf:{
            name:'',
            age:'',
            height:''
        }})
    }

    deleteSmurf = (id) =>{
        console.log('delete fire')
        this.props.deleteData(id)
    }

    render(){
        console.log('smurf rendering');
        return( 
                <div>
                    <input placeholder='name' name='name' value={this.state.smurf.name} onChange={this.handleChanges}></input>
                    <input placeholder='age' name='age' value={this.state.smurf.age} onChange={this.handleChanges}></input>
                    <input placeholder='height' name='height' value={this.state.smurf.height} onChange={this.handleChanges}></input>
                    <button onClick={this.postSmurf}>Add Smurf</button>
                    {/* these check features add small hiccups to your page */}
                    {/* {this.props.fetchingData && (<div><h1>Waiting....</h1></div>)} */}
                    

                    {/* {!this.props.fetchingData && this.props.responseItems.length > 0 && ( */}
                        
                            {/* {this.props.responseItems.map(item => {
                                return(
                                    <div className='item-container' key={item.id}>
                                        <h3>{item.name}</h3>
                                        <div>
                                            <span>{`age: ${item.age}`}</span>
                                            <span>{`height: ${item.height}`}</span>
                                        </div>
                                        
                                    </div>
                                    
                                )
                            
                            })} */}
                            
                            {this.props.responseItems.map(item => <Item deleteSmurf={()=>{this.deleteSmurf(item.id)}} details={item} name={item.name} height={item.height} age={item.age}/>)}
                            {/* here the onclick function is being passed to the component
                            originally I tried to set onclick on the JSX component and it would not work seems to need to be placed on actual dom elements */}
                </div>
                                
                    
                        
                         
                           
                
                



            )
    }

}

const mapStateToProps = state =>({
    responseItems:state.smurfs,
    fetchingData:state.fetchingSmurfs
});

export default connect(mapStateToProps,{getSmurfs,addData,deleteData})(ItemList);