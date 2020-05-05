let i, j, tabContent, tabLink;

tabContent = document.querySelectorAll('.js-tab-content');
tabLink = document.querySelectorAll('.js-tab-link');

tabContent.forEach(item => {
  item.style.display = "none";
  item.style.opacity = 0;
});

tabLink.forEach(item => {
  if( item.classList.contains('is-active') ) {
    let thisId = item.getAttribute('data-tab');

    document.getElementById(thisId).style.display = "block";
    document.getElementById(thisId).style.opacity = 1;
  }

  item.addEventListener('click', function(e) {
    e.preventDefault();

    for(i = 0; i<tabLink.length;i++) {
      tabLink[i].classList.remove('is-active');
    }
    item.classList.add('is-active');
    let tabId = item.getAttribute('data-tab');

    for(j=0; j<tabContent.length; j++) {
      tabContent[j].style.display = "none";
      tabContent[j].style.opacity = 0;
    }

    document.getElementById(tabId).style.display = "block";
    document.getElementById(tabId).style.opacity = 1;
  });
} );