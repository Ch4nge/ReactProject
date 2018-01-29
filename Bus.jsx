import React, {Component} from 'react';


export default class Bus extends Component {


    render(){
        return(
            <div style={{
                position: 'relative', color: 'white', background: 'blue',
                height: 20, width: 20, top: -10, left: -10,    
            }}>
                {this.props.text}
            </div>
        )
    }

}