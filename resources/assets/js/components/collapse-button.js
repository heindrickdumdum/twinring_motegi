/*Subpage Collapse*/
// document.querySelector('.js-collapse-button').onclick = function() {
//   document.querySelector('.subpage-collapse-description').classList.toggle('hidden');
// };  


export default class CollapseButton {
  constructor(target) {
    this.target = document.querySelectorAll(target);
    this.init();
  }

  init() {
    this.target.forEach((item) => {
      item.nextElementSibling.style.height = '0px';
        item.addEventListener('click', () => {
          item.parentElement.classList.toggle('is-open');
          item.classList.toggle('is-open');
          //let icon = item.querySelector('.js-collapse-button');
          //icon.classList.toggle('is-open');
          let panel = item.nextElementSibling;
          let panelHeight = panel.scrollHeight;
          panel.classList.toggle('is-open');
          if (panel.classList.contains('is-open')) {
            panel.style.cssText = `height:${panelHeight}px;`;
          } else {
            panel.style.height = '0px';
          }
        });
    });
  }
}
