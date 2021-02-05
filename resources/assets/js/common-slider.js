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
    variableWidth: true,
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
    variableWidth: true,
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
    variableWidth: true,
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



var commonPartsData = "";
function loadJSON(path, success, error)
{
    var xhr = new XMLHttpRequest();
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
loadJSON('/assets/data/common-parts.json', 
    function(data) {
      commonPartsData=data; 
      console.log(commonPartsData);
      

      var pickupWrapper = document.querySelector('.js-slider-pickup-json .slider-wrapper');
      var recommendWrapper = document.querySelector('.js-slider-bottom-json .slider-wrapper');
      var otherRestWrapper = document.querySelector('.js-slider-other-restaurant .slider-wrapper');
      
      //Pickup
      if(pickupWrapper){
        commonPartsData.pickupArticle.forEach(function(item){
          var iDate = item.date;
          var iheading = item.heading;
          var iImage = item.image;
          var iLink = item.link;
          var iType = item.type;
          var pickHTML = '<li class="swiper-slide slider-item">'+
          '<article class="article article-no-design modifier">'+
            '<a href="'+iLink+'" class="article-no-design-link">'+
              '<div class="article-image-wrap"><div class="article-image" style="background-image: url('+iImage+')"></div></div>'+
              '<span class="article-type article-type-type">'+iType+'</span>'+
              '<h3 class="article-heading">'+iheading+'</h3>'
              if(iDate){
                '<p class="article-period"><time class="article-period-date" datetime="P1D">'+iDate+'</time></p>'
              }
            '</a>'+
          '</article></li>';

          pickupWrapper.insertAdjacentHTML("beforeend",pickHTML);
        });
      }

      //Recommendation
      if(recommendWrapper){
        commonPartsData.recommendationArticle.forEach(function(item){
          var iheading = item.heading;
          var iImage = item.image;
          var iLink = item.buttonLink;
          var iLinkText = item.buttonText;
          var recommendHTML = '<li class="swiper-slide slider-item">'+
          '<article class="article article-no-design ">'+
            '<a href="'+iLink+'" class="article-no-design-link">'+
              '<div class="article-image-wrap"><div class="article-image" style="background-image: url('+iImage+')"></div></div>'+
              
              '<h3 class="article-heading">'+iheading+'</h3>'+
            '</a>'+
            '<a class="button-gradient" href="'+iLink+'">'+
              '<span class="button-gradient-text">'+iLinkText+'</span>'+
              '<i class="button-gradient-icon"><svg xmlns="http://www.w3.org/2000/svg"><title></title><use xlink:href="/assets/svg/sprite.svg#sprite-arrow"></use></svg></i>'+
            '</a>'+

          '</article></li>';

          recommendWrapper.insertAdjacentHTML("beforeend",recommendHTML);
        });
      }

      //Other Restaurant
      if(otherRestWrapper){
        commonPartsData.otherRestaurantArticle.forEach(function(item){
          var iTitle = item.title;
          var iAlt = item.alt;
          var iImage = item.src;
          var iLink = item.link;
          
          var otherRestHTML = '<li class="swiper-slide slider-item">'+
            '<a href="'+iLink+'">'+
              '<div class="top-slider-image"><img src="'+iImage+'" alt="'+iAlt+'"></div>'+
              '<span class="top-slider-text"><h2 class="subpage-title"><span>'+iTitle+'</span></h2></span>'+
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
          variableWidth: true,
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
          variableWidth: true,
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