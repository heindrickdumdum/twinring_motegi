function tabs(){
  var tab = document.getElementsByName('tab-month'); 
              
  for(i = 0; i < tab.length; i++) {
      tab[i].onchange = function(e){
          console.log(this.value)
      }
  } 
}

tabs();