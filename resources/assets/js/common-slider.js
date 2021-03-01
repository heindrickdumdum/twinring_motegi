import slider from './components/slider';

// SUMIKA , ITADAKI, AND DOKIDOKI TOP SLIDER
slider({
  id: 'commonSlider', // REQUIRED
  target: '.js-slider',// REQUIRED

  options: {
    speed: 1500,
    slidesPerView: 3,
    spaceBetween: 60,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    breakpoints: {
      1280: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
      375: {
        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
})

// other restaurant slide
slider({
  id: 'otherRestaurantSlider', // REQUIRED
  target: '.js-slider-other-restaurant',// REQUIRED

  options: {
    speed: 1500,
    slidesPerView: 3,
    spaceBetween: 60,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    breakpoints: {
      749: {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
})

// recommended restaurant slide
slider({
  id: 'recommendedRestaurantSlider', // REQUIRED
  target: '.js-slider-recommended-restaurant',// REQUIRED

  options: {
    speed: 1500,
    slidesPerView: 'auto',
    letiableWidth: true,
    spaceBetween: 43,
    centeredSlides: false,
    initialSlide: 1,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },

    breakpoints: {
      749: {
        slidesPerView: 'auto',
        spaceBetween: 25,
        centeredSlides: true
      }
    }
  }
})

// SUMIKA , ITADAKI, AND DOKIDOKI BOTTOM SLIDER
// slider({
//   id: 'commonSliderBottom', // REQUIRED
//   target: '.js-slider-bottom', // REQUIRED
// })

// slider({
//   id: 'commonSlider', // REQUIRED
//   target: '.js-slider-craft', // REQUIRED
//   options: {
// 		slidesPerView: 3,
// 		spaceBetween: 60,
// 		breakpoints: {
// 			1280: {
// 				slidesPerView: 3,
// 				spaceBetween: 60,
// 			},
//       375: {
//         spaceBetween: 17,
//         slidesPerView: 3,
//       }
//     },
// 	}
// })

slider({
  id: 'commonSliderBottom', // REQUIRED
  target: '.js-slider-bottom', // REQUIRED
  options: {
    speed: 1500,
    slidesPerView: 'auto',
    letiableWidth: true,
    spaceBetween: 60,
    centeredSlides: false,
    initialSlide: 1,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },

    breakpoints: {
      767: {
        slidesPerView: 'auto',
        spaceBetween: 25,
        centeredSlides: true
      }
    }
  }
})

slider({
  id: 'commonSliderBottom', // REQUIRED
  target: '.js-slider-pickup', // REQUIRED
  options: {
    speed: 1500,
    slidesPerView: 'auto',
    letiableWidth: true,
    spaceBetween: 60,
    centeredSlides: false,
    initialSlide: 1,
    loop: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },

    breakpoints: {
      767: {
        slidesPerView: 'auto',
        spaceBetween: 25,
        centeredSlides: true
      }
    }
  }
});



let commonPartsData = "";
function loadJSON(path, success, error){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}

let comPath  = "/com/";
if(window.location.pathname.includes("-test")){
  comPath = "/com-test/";
}

let svgArrow = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.89 18.28"><title>Asset 3</title><g id="Layer_2" data-name="Layer 2"><g id="レイヤー_1" data-name="レイヤー 1"><path class="cls-1" d="M39.73,9.65a.61.61,0,0,0,.07-.1.91.91,0,0,0,.09-.41,1,1,0,0,0-.09-.41s0-.06-.07-.1a1.3,1.3,0,0,0-.18-.23l0,0L29.38.22A1,1,0,0,0,28,.37a1,1,0,0,0,.15,1.41l7.93,6.36H1a1,1,0,0,0,0,2H36.05L28.12,16.5A1,1,0,0,0,28,17.91a1,1,0,0,0,.78.37,1,1,0,0,0,.63-.22L39.52,9.92l0,0A.84.84,0,0,0,39.73,9.65Z" /></g></g></svg>';

loadJSON(comPath+'common-parts.json', 
    function(data) {
      commonPartsData=data; 
      
      let pickupWrapper = document.querySelector('.js-slider-pickup-json .slider-wrapper');
      let recommendWrapper = document.querySelector('.js-slider-bottom-json .slider-wrapper');
      let otherRestWrapper = document.querySelector('.js-slider-other-restaurant-json .slider-wrapper');
      
      //Pickup Append HTML
      if(pickupWrapper){
        commonPartsData.pickupArticle.forEach(function(item){
          let iDate = item.date;
          let iheading = item.heading;
          let iImage = item.image;
          let iLink = item.link;
          let iType = item.type;
          let fallImg = "'notfound'";
          let pickHTML = '<li class="swiper-slide slider-item">'+
          '<article class="article article-no-design article-pickup modifier">'+
            '<img class="hiddenImg" src="'+iImage+'" onerror="this.parentElement.classList.add('+fallImg+')" style="display: none;">'+  
            '<a href="'+iLink+'" class="article-no-design-link">'+
              
              '<div class="article-image-wrap"><div class="article-image" style="background-image: url('+iImage+')"></div></div>'+

              '<span class="article-type article-type-type">'+iType+'</span>'+

              '<h3 class="article-heading found">'+iheading+'</h3>'+
              '<h3 class="article-heading notfound hidden" style="display: none;">Not Found</h3>'+

              //if(iDate){
                '<p class="article-period"><time class="article-period-date" datetime="P1D">'+iDate+'</time></p>'+
              //}
            '</a>'+
          '</article></li>';

          pickupWrapper.insertAdjacentHTML("beforeend",pickHTML);
        });
      }

      //Recommendation Append HTML
      if(recommendWrapper){
        commonPartsData.recommendationArticle.forEach(function(item){
          let iheading = item.heading;
          let iImage = item.image;
          let iLink = item.buttonLink;
          let iLinkText = item.buttonText;
          let fallImg = "'notfound'";
          let recommendHTML = '<li class="swiper-slide slider-item">'+
          '<article class="article article-no-design ">'+
            '<img class="hiddenImg" src="'+iImage+'" onerror="this.parentElement.classList.add('+fallImg+')" style="display: none;">'+
            '<a href="'+iLink+'" class="article-no-design-link">'+
              '<div class="article-image-wrap"><div class="article-image" style="background-image: url('+iImage+')"></div></div>'+
              
              '<h3 class="article-heading found">'+iheading+'</h3>'+
              '<h3 class="article-heading notfound" style="display: none;">Not Found</h3>'+
            '</a>'+
            '<a class="button-gradient button-gradient-cmn" href="'+iLink+'">'+
              '<span class="button-gradient-text found">'+iLinkText+'</span>'+
              '<span class="button-gradient-text notfound" style="display: none;">-</span>'+
              '<i class="button-gradient-icon asset">'+svgArrow+'</i>'+
            '</a>'+

          '</article></li>';

          recommendWrapper.insertAdjacentHTML("beforeend",recommendHTML);
        });
      }

      //Other Restaurant Append HTML
      if(otherRestWrapper){
        commonPartsData.otherRestaurantArticle.forEach(function(item){
          let iTitle = item.title;
          let iAlt = item.alt;
          let iImage = item.src;
          let iLink = item.link;
          let fallImg = "'notfound'";
          let otherRestHTML = '<li class="swiper-slide slider-item">'+
            '<a href="'+iLink+'">'+
              '<div class="top-slider-image"><img src="'+iImage+'" alt="'+iAlt+'" onerror="this.parentElement.classList.add('+fallImg+')"></div>'+
              '<span class="top-slider-text"><h2 class="subpage-title"><span class="found">'+iTitle+'</span><span class="notfound" style="display: none;">Not Found</span></h2></span>'+
            '</a></li>';
        
          otherRestWrapper.insertAdjacentHTML("beforeend",otherRestHTML);
        })
      }

      slider({
        id: 'commonSliderBottomJSON', // REQUIRED
        target: '.js-slider-pickup-json, .js-slider-bottom-json', // REQUIRED
        options: {
          speed: 1500,
          slidesPerView: 'auto',
          letiableWidth: true,
          spaceBetween: 60,
          centeredSlides: false,
          initialSlide: 1,
          loop: true,
          autoplay: {
            delay: 4500,
            disableOnInteraction: false,
          },
      
          breakpoints: {
            767: {
              slidesPerView: 'auto',
              spaceBetween: 25,
              centeredSlides: true
            }
          }
        }
      });

      slider({
        id: 'recommendedRestaurantSliderJSON', // REQUIRED
        target: '.js-slider-other-restaurant-json',// REQUIRED
      
        options: {
          speed: 1500,
          slidesPerView: 'auto',
          letiableWidth: true,
          spaceBetween: 43,
          centeredSlides: false,
          initialSlide: 1,
          loop: true,
          autoplay: {
            delay: 3500,
            disableOnInteraction: false,
          },
      
          breakpoints: {
            749: {
              slidesPerView: 'auto',
              spaceBetween: 25,
              centeredSlides: true
            }
          }
        }
      });
    },
    function(xhr) { console.error(xhr); }
);