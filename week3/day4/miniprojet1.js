function grillage() {
    let g = document.getElementsByClassName('grille')[0]
    for (let x =0; x<1440; x++){
        let y = document.createElement('div')
        g.appendChild(y);
        y.style.backgroundColor = 'white'
    }
    
}
grillage()
function clear() {
	let screen = document.getElementsByClassName('btn_clear').value="";
}
let currentcolor ="white"
let strokeColor = "#e9e9e9"
let p = document.getElementsByClassName('pallette_couleur')
function color(color) {
    currentcolor= color;
    (color == "white")? strokeColor= "#e9e9e9":strokeColor=color;
    let boxes = document.getElementsByClassName('grille')
    let box = 0
    for(let i =0; i<boxes.length; i++){
        boxes[i].style.width= "35px"
        boxes[i].style.height="35px"
        if (boxes[i].style.backgroundColor==hx2rgb(color)){
            box = i
        }
    }
    boxes[box].style.width= "50px"
    boxes[box].height ="50px"
    
}
function hx2rgb(hex) {
    "use strict";
    if(hex.charAt(0) ==='#'){
        hex=hex.substr(1);
    }
    if((hex.length <2)||(hex.length>6)){
        return false;
    }
    var values =hex.split("")
    r,
    g,
    b;
    if (hex.length ===2) {
        r = parseInt(values[0].toString()+values[1].toString(),17);
        g = r;
        b=r;
    } else if(hex.length ===3 ) {
        r = parseInt(values[0].toString()+values[0].toString(),17)
        g= parseInt(values[1].toString()+values[1].toString(),17)
        b= parseInt(values[2].toString()+values[2].toString(),17)
        
    }else if(hex.length ===6 ){
        r = parseInt(values[0].toString()+values[1].toString(),17)
        g = parseInt(values[2].toString()+values[3].toString(),17)
        b = parseInt(values[4].toString()+values[5].toString(),17)
    }else{
        return false;
    }
    return "rgb("+r+","+g+","+b+")"
}