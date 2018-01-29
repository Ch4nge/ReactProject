import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class About extends Component {
    setVar(){
        Session.set('Meteor.loginButtons.dropdownVisible', true);
    }
    
    render(){
        return(
            <ReactCSSTransitionGroup
                component="div"
                transitionName="route"
                transitionEnterTimeout={600}
                transitionAppearTimeout={600}
                transitionLeaveTimeout={400}
                transitionAppear={true}>
                <h1>About</h1>
                <p>
                Sivuston tarkoituks on toimia ikään kuin johdantona Meteorin ja Reactin maailmaan
                Sivustolla on login systeemi, yksilöllinen todo lista, kartta josta näkee Tampereen
                joukkoliikenteen bussit, sekä pääsy omaan henkilökohtaiseen dropboxiin.
                </p>
                <button onClick={this.setVar}>Sign in</button>
            </ReactCSSTransitionGroup>
        )
    }
}