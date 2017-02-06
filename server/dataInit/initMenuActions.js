//init of menu
function initMenuActions(){
  Meteor.call('menuActions.insert', ["administrator",
    "supervisor"], "Instructions de travail",
    "gestion-it", 1, 'GestITIcon.png');
  Meteor.call('menuActions.insert', ["administrator"], "Produits",
    "gestion-produits", 1, 'GestProdIcon.png');
  Meteor.call('menuActions.insert', ["administrator"], "Commandes",
    "gestion-commendes", 2, 'GestCommIcon.png');
  Meteor.call('menuActions.insert', ["administrator",
    "supervisor", "production"], "Production", "production", 3, 'ProdIcon.png');
  Meteor.call('menuActions.insert', ["administrator"], "Utilisateurs",
    "gestion-utilisateurs", 4, 'GestUtilsIcon.png');
  Meteor.call('menuActions.insert', ["administrator"], "Privilèges",
    "gestion-privileges-menu", 5, 'PrivMenuIcon.png');
}

//initMenuActions();
