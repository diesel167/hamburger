window.onload = function(){
  let container = document.getElementsByClassName('container')[0];
  let temp = document.getElementById('element1');
  let inputs = document.getElementsByName('menu');
  inputs.forEach(input=>{
    console.log(input.labels[0]);
    input.onchange = function(){
      if(input.checked === true){
        document.getElementById('abc').style.color="red";
      }
    }
  })
};

