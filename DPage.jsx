import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import DropboxChooser from 'react-dropbox-chooser';

export default class DPage extends Component {
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
                    <h1>Dropbox</h1>
                    <DropboxChooser 
                    appKey={'6cjac6lsnuptl8k'}
                    success={files => this.onSuccess(files)}
                    cancel={() => {}}
                    multiselect={true}
                    linkType="direct">
                    <button className="dropbox-button">Access Dropbox</button>        
                    </DropboxChooser>
            </ReactCSSTransitionGroup>
        )
    }

    onSuccess(files){
        for (i = 0; i < files.length; i++) { 
            var link = document.createElement("a");
            link.download = files[i].name
            link.href = files[i].link;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);   
        }
    }
}