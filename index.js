var idea1 = document.getElementById('idea1');
var idea2 = document.getElementById('idea2');
var idea3 = document.getElementById('idea3');
var idea4 = document.getElementById('idea4');

var idea1Large = document.getElementById('idea1-large');
var idea2Large = document.getElementById('idea2-large');
var idea3Large = document.getElementById('idea3-large');
var idea4Large = document.getElementById('idea4-large');

var cross = document.getElementById('cross');
var cross2 = document.getElementById('cross2');
var cross3 = document.getElementById('cross3');
var cross4 = document.getElementById('cross4');



function hoverInOut(ideaNode){
  ideaNode.addEventListener('mouseover', function(){
    ideaNode.querySelector('img').src = './assets/trianglesInverted.svg'
  })
  ideaNode.addEventListener('mouseout', function(){
    ideaNode.querySelector('img').src = './assets/triangles.svg'
  })
  ideaNode.addEventListener('click', function(){
    idea1.classList.add('display-none');
    idea2.classList.add('display-none');
    idea3.classList.add('display-none');
    idea4.classList.add('display-none');

    if(ideaNode === idea1) {
      idea1Large.classList.remove('display-none');
      cross.addEventListener('mouseover', function(){
        cross.src = './assets/crossHover.svg'
      })
      cross.addEventListener('mouseout', function(){
        cross.src = './assets/cross.svg'
      })
      idea1Large.addEventListener('click', function(){
        idea1Large.classList.add('display-none');
        idea1.classList.remove('display-none');
        idea2.classList.remove('display-none');
        idea3.classList.remove('display-none');
        idea4.classList.remove('display-none');
      })
    }

    if(ideaNode === idea2) {
      idea2Large.classList.remove('display-none');
      cross2.addEventListener('mouseover', function(){
        cross2.src = './assets/crossHover.svg'
      })
      cross2.addEventListener('mouseout', function(){
        cross2.src = './assets/cross.svg'
      })
      idea2Large.addEventListener('click', function(){
        idea2Large.classList.add('display-none');
        idea1.classList.remove('display-none');
        idea2.classList.remove('display-none');
        idea3.classList.remove('display-none');
        idea4.classList.remove('display-none');
      })
    }

    if(ideaNode === idea3) {
      idea3Large.classList.remove('display-none');
      cross3.addEventListener('mouseover', function(){
        cross3.src = './assets/crossHover.svg'
      })
      cross3.addEventListener('mouseout', function(){
        cross3.src = './assets/cross.svg'
      })
      idea3Large.addEventListener('click', function(){
        idea3Large.classList.add('display-none');
        idea1.classList.remove('display-none');
        idea2.classList.remove('display-none');
        idea3.classList.remove('display-none');
        idea4.classList.remove('display-none');
      })
    }

    if(ideaNode === idea4) {
      idea4Large.classList.remove('display-none');
      cross4.addEventListener('mouseover', function(){
        cross4.src = './assets/crossHover.svg'
      })
      cross4.addEventListener('mouseout', function(){
        cross4.src = './assets/cross.svg'
      })
      idea4Large.addEventListener('click', function(){
        idea4Large.classList.add('display-none');
        idea1.classList.remove('display-none');
        idea2.classList.remove('display-none');
        idea3.classList.remove('display-none');
        idea4.classList.remove('display-none');
      })
    }
  })
}

hoverInOut(idea1);
hoverInOut(idea2);
hoverInOut(idea3);
hoverInOut(idea4);
