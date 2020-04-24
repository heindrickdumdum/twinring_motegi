function tabsFaq(){
  /* PC Tabs */
  var tab = document.getElementsByName('tab-tabId');
  var i;
  for(i = 0; i < tab.length; i++) {
    tab[i].onchange = function() {
      document.getElementById('faq-list').setAttribute("data-tab", this.value)
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
    optionSP[o].addEventListener('click',function(){
      tabSPselect.innerText = this.innerText;
      document.getElementById('faq-list').setAttribute("data-tab", this.getAttribute('value'));
      document.getElementById('customSelect').classList.toggle('open');
      document.getElementById('customSelectItems').classList.toggle('select-hide');
    })
  }
}

tabsFaq();