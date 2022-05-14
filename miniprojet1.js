function playTheGame() {
	let confirmation = confirm("Souhaitez-Vous Accepter De Jouer Ce Jeu?")
	
	if (confirmation == false) { alert("PAS DE PROBLEME! Au Revoir")  
       }else if (confirmation == true) {
       	let nombre
       	let  computerNumber = Math.floor(Math.random() *11 ) 
       console.log(computerNumber)
       	let chance =0
        do
         {
         nombre=Number(prompt("entrez un nombre compris entre 0 et 10 "))
             if ( nombre == '' || null| undefined) {
             	console.log("Désolé pas un nombre, au revoir ")

             } else if (nombre <=0 || nombre >=10 ) {
              console.log("Désolé, ce n’est pas un bon nombre, au revoir ")
              }else{
               	 compareNumbers(nombre, computerNumber)
               	 if (chance >= 3) { alert("out of chances,lost")}
               	 	chance++
              }
                 
         	 }while(nombre != computerNumber && chance < 3)
       }
	
}

function compareNumbers(userNumber,computerNumber) {
	if (userNumber == computerNumber) { alert( "WINNER") 
      } else if ( userNumber > computerNumber) {alert("Votre numéro est plus grand que celui de l’ordinateur,devinez à nouveau") 
       
      } else if (userNumber < computerNumber ) { alert("Votre numéro est plus petit que celui de l’ordinateur,devinez à nouveau")
      
      } 
	
      }






/*Si l’utilisateur a deviné plus de 3 fois, alertez « par hasard » et quittez la fonction.
*/
