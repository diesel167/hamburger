window.onload = function(){
  let container = document.getElementsByClassName('container')[0];
  let hider = document.getElementById('hider');

  //add darken wrapper

  [...container.children].forEach(node=>{
    node.onmouseover = function(){
      if(node.children.length>2){
        hider.style.display='block';
      }
    };
    node.onmouseleave = function(){
      if(document.getElementsByClassName('ham-icon')[0].style==='none'){
        hider.style.display='none';
      }
    }

  });

  //add click handler for hamburger and add some animation with class-helper 'fade'
  document.getElementsByClassName('ham-icon')[0].onclick = function(){
     if(container.style.display==='grid'){
      hider.style.display='none';
      container.classList.add('fade');
      container.style.display = 'none';
      setTimeout(()=>{
        container.classList.remove('fade');
      },2000);
      this.innerHTML='&#9776';
    }
    else{
      hider.style.display='block';
      container.classList.add('fade');
      container.style.display = 'grid';
      setTimeout(()=>{
        container.classList.remove('fade');
      },2000);
      this.innerHTML='&#10006';
    }

  }

  //add icon for menu items with sublists
  function expand(item,nch){
    let lastOpened = null;

    item = [...item];
    item.map((node,i)=>{
      if(node.children.length>nch){
        let expander = document.createElement('i');
        let expanderhelp = document.createElement('div');
        expanderhelp.className = 'expander-helper';
        expander.appendChild(expanderhelp);
        expander.className = 'expander';
        expander.id = `st${i}`;
        //if main submenus
        if(nch===2){
          expander.onclick = function(){
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
                console.log(this.parentNode);
                this.parentNode.querySelector('.submenu').style.display = 'none';
                expander.style.transform = 'rotate(45deg)';
                //reset second floor uls
                [...this.parentNode.querySelectorAll('.submenu ul li ul')].map(ul=>{
                  ul.style.display = 'none';
                });
                [...this.parentNode.querySelectorAll('.submenu ul li i')].map(i=>{
                  i.style.transform = 'rotate(45deg)';
                });
              }
            }
          };
        }
        //if second floor submenus
        else{
          expander.onclick = function(){
            if(this.parentNode!==lastOpened){
              if(lastOpened){
                lastOpened.querySelector('ul').style.display = 'none';
                lastOpened.querySelector('i').style.transform = 'rotate(45deg)';
                this.parentNode.querySelector('ul').style.display = 'block';
                expander.style.transform = 'rotate(225deg)';
              }
              else{
                this.parentNode.querySelector('ul').style.display = 'block';
                expander.style.transform = 'rotate(225deg)';
              }
              lastOpened = this.parentNode;
            }
            else{
              if(this.parentNode.querySelector('ul').style.display === 'none'){
                this.parentNode.querySelector('ul').style.display = 'block';
                expander.style.transform = 'rotate(225deg)';
              }
              else{
                this.parentNode.querySelector('ul').style.display = 'none';
                expander.style.transform = 'rotate(45deg)';
              }
            }
          };
        }
        node.appendChild(expander);
      }
    })
  }

  //create expander in our DOM
  expand(document.getElementsByClassName('nav-item'),2);
  [...document.getElementsByClassName('sub')].map(node=>node.children).map(part=>{
    expand(part,1);
  });
};

