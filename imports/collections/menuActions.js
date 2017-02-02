import {Mongo} from "meteor/mongo";

Meteor.methods({
  'menuActions.insert': function(userType, title, route, orderNo, icon){
    return MenuActions.insert({
      user_userType: userType,
			title: title,
			route: route,
      orderNo: orderNo,
      icon: icon
    });
  }
});

export const MenuActions = new Mongo.Collection('menuActions');
