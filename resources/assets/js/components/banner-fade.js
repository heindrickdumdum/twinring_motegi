export default function bannerFade(params) {
  const items = document.querySelectorAll(params.item);
  const firstItem = items[0];

  setTimeout(() => {
    let currentIdx = 0;
    firstItem.classList.add('is-active');

    setInterval(() => {
      // items.forEach((item) => item.classList.remove('is-active'));
      for(let item of items) {
        item.classList.remove('is-active');
      }

      firstItem.classList.remove('is-active');

      currentIdx++;

      if(currentIdx >= items.length) {
        currentIdx = 0;
      }

      items[currentIdx].classList.add('is-active');
    }, 4200);
  }, 100);
}