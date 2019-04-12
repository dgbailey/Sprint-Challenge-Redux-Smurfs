import React, { Component } from 'react';
import {getSmurfs} from '../actions';
import { connect } from 'react-redux';

class ItemList extends Component {
    constructor(props){
        super(props);
        this.state={
            items:[]
        }
    }

    componentDidMount(){
        this.props.getSmurfs()
    }

    render(){
        return( 
                <div>
                    {this.props.fetchingData && (<div><h1>Waiting....</h1></div>)}

                    {!this.props.fetchingData && this.props.responseItems.length > 0 && (
                        <div className='item-container'>
                            {this.props.responseItems.map(item => {
                                return(
                                    <div className='item-container'>
                                        <h3>{item.name}</h3>
                                        <div>
                                            <span>{`age: ${item.age}`}</span>
                                            <span>{`height: ${item.height}`}</span>
                                        </div>
                                        
                                    </div>
                                )
                            })}
                    
                    
                        </div>)}
                </div>



            )
    }

}

const mapStateToProps = state =>({
    responseItems:state.smurfs,
    fetchingData:state.fetchingSmurfs
});

export default connect(mapStateToProps,{getSmurfs})(ItemList);