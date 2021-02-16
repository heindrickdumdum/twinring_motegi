import slider from '../js/components/slider';

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
function loadJSON(path, success, error)
{
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
let rootPath = "/";
if(window.location.pathname.includes("-test")){
  comPath = "/com-test/";
}
if(window.location.pathname.includes("stg.")){
  rootPath = "./";
}

loadJSON(comPath+'common-parts.json', 
    function(data) {
      commonPartsData=data; 
      
      let pickupWrapper = document.querySelector('.js-slider-pickup-json .slider-wrapper');
      let recommendWrapper = document.querySelector('.js-slider-bottom-json .slider-wrapper');
      let otherRestWrapper = document.querySelector('.js-slider-other-restaurant .slider-wrapper');
      
      //Pickup
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

      //Recommendation
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
              '<i class="button-gradient-icon com" data-path="'+rootPath+'"><svg xmlns="http://www.w3.org/2000/svg"><title></title><use xlink:href="'+rootPath+'assets/svg/sprite.svg#sprite-arrow"></use></svg></i>'+
            '</a>'+

          '</article></li>';

          recommendWrapper.insertAdjacentHTML("beforeend",recommendHTML);
        });
      }

      //Other Restaurant
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
        target: '.js-slider-other-restaurant',// REQUIRED
      
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