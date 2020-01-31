window.onload = function(){
  let container = document.getElementsByClassName('container')[0];
  let hider = document.getElementById('hider');
  let content = document.getElementById('content');

  //add darken wrapper
  container.childNodes.forEach(node=>{
    node.onmouseover = function(){
      if(node.children.length>2){
        hider.style.display='block';
      }
    };
    node.onmouseleave = function(){
      hider.style.display='none';
    }
  });

  //click handler for hamburger and add some animation with class-helper 'fade'
  document.getElementsByClassName('ham-icon')[0].onclick = function(){
    if(container.style.display==='grid'){
      container.classList.add('fade');
      container.style.display = 'none';
      setTimeout(()=>{
        container.classList.remove('fade');
      },2000);
      this.classList.add('fade');
      this.innerHTML='&#9776';
      setTimeout(()=>{
        this.classList.remove('fade');
      },2000);

    }
    else{
      container.classList.add('fade');
      container.style.display = 'grid';
      setTimeout(()=>{
        container.classList.remove('fade');
      },2000);


      this.classList.add('fade');
      this.innerHTML='&#10006';
      setTimeout(()=>{
        this.classList.remove('fade');
      },2000);

    }

  }
  //add icon for menu items with sublists
};

