import { HTTP } from 'meteor/http';


Meteor.methods({
    addResolution(resolution){
        check(resolution, String);
        if(!Meteor.userId()){
            throw new Meteor.Error('not-authorized!');
        }
        Resolutions.insert({
            text: resolution,
            complete: false,
            createdAt: Date(),
            user: Meteor.userId()
        });
    },
    toggleResolution(resolution){
        check(resolution, Object);
        if(Meteor.userId() !== resolution.user){
            throw new Meteor.Error('not-authorized!');
        }
        Resolutions.update(resolution._id, {
            $set: {complete: !resolution.complete}
        });
    },
    deleteResolution(resolution){
        check(resolution, Object);
        if(Meteor.userId() !== resolution.user){
            throw new Meteor.Error('not-authorized!');
        }
        Resolutions.remove(resolution._id);
    },
    sendMessage(message){
        check(message, String);
        if(!Meteor.userId()){
            throw new Meteor.Error('not-authorized!');
        }
        Messages.insert({
            text: message,
            createdAt: Date(),
            user: Meteor.userId()
        });
    },
    getBusses() {
        return HTTP.call('GET', 'http://data.itsfactory.fi/siriaccess/vm/json',{},
            function(error, response ) {
                if ( error ) {
                  console.log( error );
                } else {
                    return response.data;
                }
            })
    }
});