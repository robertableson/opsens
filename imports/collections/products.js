import {Mongo} from "meteor/mongo";

Meteor.methods({
  'products.insert': function(name, instructionsList){
    return Products.insert({
      name: name,
      instructionsList: instructionsList
    });
  },
  'products.deleteAll': function(name, instructionsList){
    Products.remove({});
  }
});

export const Products = new Mongo.Collection('products');
