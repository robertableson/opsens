import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  Meteor.users.insert({name: "tom.gardier", accountType:"supervisor", prodAccount:null});
});
