var nom=prompt("tapez votre prénom");

function prenom(nom){
 var regex= /^[a-zA-ZÀ-ÿ]+$/; //définition des caracrtères acceptés

if (!regex.test(nom)||nom==null){ //test du regex
   alert("Problème de saisie");
var saisie= prompt("réessayez..."); //nouvelle saisie pour
   prenom(saisie);}
else{
   alert("Bonjour, "+nom+" !");} //réponse
}

prenom(nom);
