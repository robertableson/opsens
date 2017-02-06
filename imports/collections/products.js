import {Mongo} from "meteor/mongo";

Meteor.methods({
  'products.insert': function(name, instructionsList){
    return Products.insert({
      name: name,
      instructionsList: instructionsList
    });
  }
});

export const Products = new Mongo.Collection('products');
