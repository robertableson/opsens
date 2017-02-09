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
  'products.getCollectionSize': function(){
    var total = Products.find({}).count();
    console.log("-- " + total);
    return(total);
  }
});

export const Products = new Mongo.Collection('products');
