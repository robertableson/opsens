import { Meteor } from 'meteor/meteor';
import {Users} from '../imports/users/bins';

Meteor.startup(() => {
  Meteor.publish('users', function(){
    return Users.find({ownerId: this.userId});
  });
});
