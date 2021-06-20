function tabs(){
  /* PC Tabs */
  var tab = document.getElementsByName('tab-goods');
  var i;
  for(i = 0; i < tab.length; i++) {
    tab[i].onchange = function() {
      document.getElementById('program-list').setAttribute("data-tab", this.value);
      document.getElementById('tab-banner').setAttribute("data-tab", this.value);
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
      tabSPselect.innerHTML = this.innerHTML;
      document.getElementById('program-list').setAttribute("data-tab", this.getAttribute('value'));
      document.getElementById('tab-banner').setAttribute("data-tab", this.getAttribute('value'));
      document.getElementById('customSelect').classList.toggle('open');
      document.getElementById('customSelectItems').classList.toggle('select-hide');
      
      this.classList.add('active');
    })
  }

  
}

tabs();


/*Fix browser back button issue*/
function fixTabsIE(){
  document.getElementById('program-list').setAttribute("data-tab", document.querySelector('.tab [type="radio"]:checked').value);
  document.getElementById('tab-banner').setAttribute("data-tab", document.querySelector('.tab [type="radio"]:checked').value);
  
}

setTimeout(() => {
  fixTabsIE();
},10);

window.onload = () => {
  document.querySelector('.tab [type="radio"]:checked').click();
  fixTabsIE();
}