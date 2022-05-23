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
