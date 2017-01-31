import {Mongo} from "meteor/mongo";

Meteor.methods({
  'menuActions.insert': function(userType, title, route, orderNo){
    return MenuActions.insert({
      user_userType: userType,
			title: title,
			route: route,
      orderNo: orderNo
    });
  }
});

export const MenuActions = new Mongo.Collection('menuActions');
