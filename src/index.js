window.onload = function(){
    let container = document.getElementsByClassName('container')[0];
    let temp = document.getElementById('element1');
    container.childNodes.forEach(label=>{
        label.childNodes
        if(label.querySelector('input').checked === true){
            label.style.borderBottom = '5px solid black';
        }
    })
}

