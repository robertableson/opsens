//init of products

initProducts = function(prodQty, prodPrefix, instQty){
  Meteor.call('products.deleteAll');

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  var rand = 0;
  var prodTitle = "";
  var instructionsList = [];

  //products creation
  for(var i = 0; i < prodQty; i++){
    rand = getRandom(0, instQty);

    //instructinos creation
    for(var j = 0; j < rand; j++){
      instructionsList.push({name: "name"});
    }

    prodTitle = prodPrefix + i;
    Meteor.call('products.insert', prodTitle, instructionsList);

    instructionsList = [];
  }
}
