import {Mongo} from "meteor/mongo";

Meteor.methods({
  'products.insert': function(name, instructionsList){
    return Products.insert({
      name: name,
      instructionsList: instructionsList
    });
  },
  'products.deleteAll': function(){
    Products.remove({});
  },
  'products.getFilteredList': function(){
    return Products.find({}).fetch();
  }
});

export const Products = new Mongo.Collection('products');
