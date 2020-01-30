window.onload = function(){
  let lastCheckedMenuItem=null;
  let container = document.getElementsByClassName('container')[0];
  let hider = document.getElementById('hider');
  let content = document.getElementById('content');

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

  //click handler for hamburger
  document.getElementsByClassName('mobile-header')[0].onclick = function(){
    if(container.style.display==='grid'){
      container.style.display = 'none'
    }
    else{
      container.style.display = 'grid';
    }

  }
};

