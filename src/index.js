window.onload = function(){
  let container = document.getElementsByClassName('container')[0];
  let hider = document.getElementById('hider');
  let content = document.getElementById('content');
  let inputs = document.getElementsByName('menu');
  let lastOpened = null;

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
  function expand(item){
    item = [...item];
    item.map((node,i)=>{
      if(node.children.length>2){
        let expander = document.createElement('i');
        expander.className = 'expander';
        expander.id = `st${i}`;
        expander.onclick = function(){
          console.log(this.parentNode!==lastOpened);
          if(this.parentNode!==lastOpened){
            if(lastOpened){
              lastOpened.querySelector('.submenu').style.display = 'none';
              lastOpened.querySelector('i').style.transform = 'rotate(45deg)';
              this.parentNode.querySelector('.submenu').style.display = 'block';
              expander.style.transform = 'rotate(225deg)';
            }
            else{
              this.parentNode.querySelector('.submenu').style.display = 'block';
              expander.style.transform = 'rotate(225deg)';
            }
            lastOpened = this.parentNode;
          }
          else{
            if(this.parentNode.querySelector('.submenu').style.display === 'none'){
              this.parentNode.querySelector('.submenu').style.display = 'block';
              expander.style.transform = 'rotate(225deg)';
            }
            else{
              this.parentNode.querySelector('.submenu').style.display = 'none';
              expander.style.transform = 'rotate(45deg)';
            }

          }
        };
        node.appendChild(expander);
        //expander = document.createElement('i');
        //expander.className = 'expander';
        //node.children[2].appendChild(expander);
      }
    })
  }

  /*inputs.forEach(input=>{
    input.onchange = function(){
      if(input.checked === true){
        input.parentNode.color = "white";
      }
    }
  });*/




  expand(document.getElementsByClassName('nav-item'));
};

