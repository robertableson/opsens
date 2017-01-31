import { Meteor } from 'meteor/meteor';

import {menuActions} from '../imports/collections/menuActions';

Meteor.startup(() => {
  /*Meteor.publish('menuActions',function(){

  });*/

console.log(this.user);




  //init of menu
  /*Meteor.call('menuActions.insert', ["admin"], "Instructions de travail",
    "gestionit", 1);
  Meteor.call('menuActions.insert', ["admin"], "Produits",
    "gestionit", 2);
  Meteor.call('menuActions.insert', ["admin"], "Utilisateurs",
    "gestionit", 3);
  Meteor.call('menuActions.insert', ["admin"], "Privilèges du menu",
    "gestionit", 4);
  Meteor.call('menuActions.insert', ["admin"], "Commandes",
    "gestionit", 5);
  Meteor.call('menuActions.insert', ["admin"], "Production",
    "gestionit", 6);*/

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
    user.profile = {firstName: fName, lastName: lName};

    return user;
  });

  Accounts.validateLoginAttempt(function(attempt){
    console.log(attempt);
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
