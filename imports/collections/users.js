import {Mongo} from 'meteor/mongo';
import {check, Match} from 'meteor/check';

Meteor.methods({
  'users.insert': function(id, pwd){
    console.log(id ' ' + pwd);
    /*check(url, Match.Where(url => validUrl.isUri(url)));
    console.log(url);
    //we're ready to save the url
    Users.insert({url, token, clicks: 0});*/
  }
});

export const Users = new Mongo.Collection('users');
