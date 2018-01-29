Resolutions = new Mongo.Collection("resolutions");

Messages = new Mongo.Collection("messages");

Meteor.publish("allResolutions", function(){
    return Resolutions.find();
});

Meteor.publish("userResolutions", function(){
    return Resolutions.find({user: this.userId});
});

Meteor.publish("allMessages", function(){
    return Messages.find();
});