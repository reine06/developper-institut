document.getElementById('inscription').addEventListener('submit',function(envoye) {

    var erreur ;
    var inputs = document.getElementsByTagName('input')
    for (var i= 0; i < inputs.length; i++){
        if(!inputs[i].value){
            erreur = "veuillez renseigner tout les champs"
        }
    }

    if (erreur){
        envoye.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else {

    }alert("Formulaire envoye !");


});
 