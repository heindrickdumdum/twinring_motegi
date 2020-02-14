function accordion() {
  let faqTitle = Array.prototype.slice.call(document.querySelectorAll('.js-accordion') , 0);

  faqTitle.forEach((item) => {
    let faqContent = item.nextElementSibling;
    let faqIcon = item.querySelector('.js-arrow');
    item.addEventListener('click', () => {
      let faqContentHeight = item.nextElementSibling.scrollHeight;

      faqTitle.forEach((otherItem) => {
        if (otherItem !== item) {
          let otherFaqContent = otherItem.nextElementSibling;
          let otherFaqIcon = otherItem.querySelector('.js-arrow, .js-accordion');

          otherFaqContent.classList.remove('is-active');
          otherFaqIcon.classList.remove('is-active');
          otherFaqContent.style.height = `0px`;
        }
      });

      faqContent.classList.toggle('is-active');
      faqIcon.classList.toggle('is-active');

      if(faqContent.classList.contains('is-active')) {
        faqContent.style.height = `${faqContentHeight}px`;
      } else {
        faqContent.style.height = `0px`;
      }
    });
  });

  window.addEventListener('resize', () => {
    let current = document.querySelector('.js-description.is-active');
    if (current) {
      current.style.height = `0px`;
      setTimeout(() => {
        current.style.height = `${current.scrollHeight}px`;
      }, 100)
    }
  });
}

accordion();