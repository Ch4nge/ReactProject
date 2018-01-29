import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import GoogleMap from 'google-map-react';
import PropTypes from 'prop-types';
import shouldPureComponentUpdate from 'react-pure-render/function';
import Tamk from './Tamk.jsx';
import Bus from './Bus.jsx';
import {HTTP} from 'meteor/http';


export default class GMap extends Component {

    
    static propTypes = {
        center: PropTypes.array,
        zoom: PropTypes.number
    };

    static defaultProps = {
        center: [61.5030276, 23.80819],
        zoom: 16
    };

    shouldComponentUpdate = shouldPureComponentUpdate;
    
    constructor(props){
        super(props)
    }

    componentDidMount(){
        var that = this;
        inter = setInterval(function(){ 
            HTTP.get('http://data.itsfactory.fi/siriaccess/vm/json', function(err,result) {
                arr = Object.values(result.data);
                value1 = arr["0"].ServiceDelivery.VehicleMonitoringDelivery["0"].VehicleActivity["1"].MonitoredVehicleJourney.VehicleLocation.Latitude;
                value2 = arr["0"].ServiceDelivery.VehicleMonitoringDelivery["0"].VehicleActivity["1"].MonitoredVehicleJourney.VehicleLocation.Longitude;
                arr = arr["0"].ServiceDelivery.VehicleMonitoringDelivery["0"];

                that.setState({ lati: value1, lngi: value2, busses: arr });
                console.log(that.state.busses.VehicleActivity["0"].MonitoredVehicleJourney.VehicleLocation);
            }); 
        }, 500);
    }

    

    componentWillUnmount(){
        clearInterval(inter);
    }

    state = {
        lati: 61.5030276,
        lngi: 23.80819,
        busses: []
    }

    render(){
        
        var that = this;
        console.log(this.state.busses);
        if(this.state.busses.length != 0){
            return(
            <div className="map">
            <GoogleMap
                bootstrapURLKeys={{key: 'AIzaSyCA-P5Nuf4IJhw3eTmzbzCg_qyiQGTC--k'}} 
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}>
                <Tamk
                    lat={61.5030276}
                    lng={23.80819}
                    text={'TAMK'}
                />


                {this.state.busses.VehicleActivity.map( (bus)=>{           
                    return <Bus 
                        lat={parseFloat(bus.MonitoredVehicleJourney.VehicleLocation.Latitude)}
                        lng={parseFloat(bus.MonitoredVehicleJourney.VehicleLocation.Longitude)}
                        text={bus.MonitoredVehicleJourney.LineRef.value}
                    />  
                })}
            </GoogleMap>
            </div>
        )
        }
        return(<div> </div>)
        
    }
}