import { Meteor } from 'meteor/meteor';

import {MenuActions} from '../imports/collections/menuActions';

Meteor.startup(() => {
  Meteor.publish('menuActions',function(){
    //console.log(Meteor.user());

    if(this.userId){
      var user = Meteor.users.findOne(this.userId);

      return MenuActions.find({user_userType: user.profile.userType});
    }
  });




  //init of menu
  /*Meteor.call('menuActions.insert', ["administrator",
    "supervisor"], "Instructions de travail",
    "gestion-it", 1, 'GestITIcon.png');
  Meteor.call('menuActions.insert', ["administrator"], "Produits",
    "gestion-produits", 2, 'GestProdIcon.png');
  Meteor.call('menuActions.insert', ["administrator"], "Utilisateurs",
    "gestion-utilisateurs", 3, 'GestUtilsIcon.png');
  Meteor.call('menuActions.insert', ["administrator"], "Privilèges du menu",
    "gestion-privileges-menu", 4, 'PrivMenuIcon.png');
  Meteor.call('menuActions.insert', ["administrator"], "Commandes",
    "gestion-commendes", 5, 'GestCommIcon.png');
  Meteor.call('menuActions.insert', ["administrator",
    "supervisor", "production"], "Production", "production", 6, 'ProdIcon.png');*/

  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  //@@@@@@@@@@@@@@@@@ LOGIN / REGISTRATION VALIDATIONS @@@@@@@@@@@@@@@@@@@@@@@@@@@
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  /*  No need to check password field of user as it is automaticallly hashed and
   *  salted, even if it is inserted through the developer console with a length
   *  of <8 chars
   */
  Accounts.onCreateUser(function(options, user) {
    if(!options.firstName || options.firstName.length < 2
      || options.firstName.length > 20){
      throw new Meteor.Error(
        "first-name-invalid-length",
        "Le prénom doit avoir entre 2 et 20 caractères.");
    }else if(!options.lastName || options.lastName.length < 2
      || options.lastName.length > 20){
        throw new Meteor.Error(
          "first-name-invalid-length",
          "Le nom doit avoir entre 2 et 20 caractères.");
    }

    const fName = options.firstName.toLowerCase();
    const lName = options.lastName.toLowerCase();

    user.username = `${fName}.${lName}`;
    user.profile = {firstName: fName, lastName: lName/*, userType: "administrator"*/};

    return user;
  });

  Accounts.validateLoginAttempt(function(attempt){
    //if user is registering
    if(attempt.methodName === "createUser"){
      //if error in registration
      if (attempt.error){
        var reason = attempt.error.reason;

        if (reason === "Need to set a username or email"){
          throw new Meteor.Error(
            "empty-id",
            "Veuillez saisir un identifiant.");
        }else if(reason === "Username already exists."){
          throw new Meteor.Error(
            "id-exists-already",
            "Désolé, cet utilisateur existe déjà.");
        }else if(reason === "Password may not be empty"){
          throw new Meteor.Error(
            "empty-password",
            "Veuillez saisir un mot de passe.");
        }else{
          throw new Meteor.Error(
            "username-length",
            reason);
        }
      }else{
        throw new Meteor.Error(
          "register-success",
          "Votre compte a été créé avec succès! Vous " +
          "pourrez vous connecter lorsqu'un adminstrateur du système " +
          "aura accepté votre demande. Voici votre identifiant: " +
          `${attempt.user.profile.firstName}.${attempt.user.profile.lastName}.`);
      }
    }
    //if user is trying to log in
    else{
      if(attempt.error){
        var reason = attempt.error.reason;
        if (reason === "User not found"){
          throw new Meteor.Error(
            "username-not-found",
            "Cet identifiant n'existe pas. Vous pouvez créer un compte avec " +
            "le lien ci-dessous.");
        }else if (reason === "Incorrect password"){
          throw new Meteor.Error(
            "incorrect-password",
            "Le mot de passe ne correspont pas à cet identifiant.");
        }
      }
      else if(attempt.user && attempt.user.profile &&
        !attempt.user.profile.userType){
        throw new Meteor.Error(
          "user-not-validated-yet",
          "Votre compte est en attente de validation " +
          "par un administrateur du système.");
      }
    }

    return attempt.allowed;
  });
});
