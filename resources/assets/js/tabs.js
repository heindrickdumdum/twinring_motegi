function tabs(){
  /* PC Tabs */
  var tab = document.getElementsByName('tab-month');
  var i;
  for(i = 0; i < tab.length; i++) {
    tab[i].onchange = function() {
      document.getElementById('program-list').setAttribute("data-tab", this.value)
    }
  }

  /* SP Dropdown - show options */
  var tabSPselect = document.getElementById('customSelect');
  tabSPselect.addEventListener('click',function(){
    this.classList.toggle('open');
    document.getElementById('customSelectItems').classList.toggle('select-hide')
  });

  /* SP Dropdown - select option */
  var optionSP = document.querySelectorAll('.option'); 
  var o;
  for (o = 0; o < optionSP.length; o++) {
    optionSP[0].classList.add('active');//Initial items
    optionSP[o].addEventListener('click',function(){
      if(document.querySelectorAll('.option.active')[0]) {
        document.querySelectorAll('.option.active')[0].classList.remove('active');
      }
      tabSPselect.innerText = this.getAttribute('value')+"月";
      document.getElementById('program-list').setAttribute("data-tab", this.getAttribute('value'));
      document.getElementById('customSelect').classList.toggle('open');
      document.getElementById('customSelectItems').classList.toggle('select-hide');
      
      this.classList.add('active');
    })
  }

  
}

tabs();

