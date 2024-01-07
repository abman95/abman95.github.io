const header = document.querySelector('.header');
const headerFixedBackground = document.querySelector('.headerFixedBackground');
const dialogCloseButton = document.querySelector('.dialogCloseButton');
const headerFixedMenu = document.querySelector('.headerFixedMenu');
const headerFixed = document.querySelector('.headerFixed');
const dialogHeaderListing = document.querySelector('#dialogHeaderListing');


const dialogHome = document.querySelector('.dialogHome');
const dialogAboutMe = document.querySelector('.dialogAboutMe');
const dialogContact = document.querySelector('.dialogContact');

const abdullahImage = document.querySelector('.abdullahSogutPicture');
const aboutMeHeadingElement = document.querySelector('.aboutMeHeading');
const aboutMeTextElements = document.querySelector('.aboutMeText');

const projectOnePicture = document.querySelector('.projectOnePicture');
const projectOneName = document.querySelector('.projectOneName');
const aboutMeButton = document.querySelector('.aboutMeButton');
const aboutMeButtonBorder = document.querySelector('.aboutMeButtonBorder');

const digitalTime = document.querySelector('#digitalTime');
const projectSlider = document.querySelector('.projectSlider');
const container1 = document.querySelector('#container1');
const container3 = document.querySelector('#container3');
const projectImageSlider2Images = document.querySelector('.projectImageSlider2Images');



document.addEventListener("DOMContentLoaded", ()=> {
  document.body.style.overflowX = 'hidden';
  document.addEventListener("scroll", ()=> {
    document.body.style.overflowX = 'hidden';
  });
})





let isScaled = false;

document.addEventListener('scroll', function() {
  const headerRect = header.getBoundingClientRect();

  if (headerRect.bottom <= -50) {
    if (!isScaled) {
      headerFixedBackground.style.display = 'flex';
      headerFixedBackground.style.scale = '1.2';
      headerFixedBackground.style.transition = 'scale .4s ease-out';
      setTimeout(() => {
        headerFixedBackground.style.scale = '1';
        headerFixedBackground.style.transition = 'scale .1s ease-in';
        isScaled = true;
      }, 400);
    }
  } else if (headerRect.bottom >= 0) {
    setTimeout(() => {
    headerFixedBackground.style.scale = '0';
    headerFixedBackground.style.transition = 'scale .3s ease-in';
    isScaled = false;
  }, 400);
  }
});



const mobileMenuButton = document.querySelector('.mobileMenuButton');

mobileMenuButton.addEventListener('click', function() {
  headerFixedMenu.showModal();
  document.body.style.overflow = 'hidden';
});


headerFixedBackground.addEventListener('click', function() {
  headerFixedMenu.showModal();
  document.body.style.overflow = 'hidden';
});



dialogCloseButton.addEventListener("click", function outsideClickHandler(event) {
  headerFixedMenu.classList.add("closed");
  setTimeout(function() {
    document.querySelector('.headerFixedBackground').style.transform = `translate(0px, 0px)`;
    headerFixedMenu.close();
    headerFixedMenu.classList.remove("closed");
    document.body.style.overflow = 'auto';
    document.body.style.overflowX = 'hidden';


    let elementAnimation = 0;
    let animationTimeout;
    clearTimeout(animationTimeout);
    reverseAnimate();
      
    function reverseAnimate() {
      if (elementAnimation >= -20) {
        if (elementAnimation){
        headerFixed.style.transition = "filter ease .5s";
        headerFixed.style.filter = "invert(0)";
        headerFixedBackground.style.backgroundImage = `linear-gradient(to top, #1a1a1a ${elementAnimation}%, wheat 0%)`;
        }
        elementAnimation = elementAnimation - 3;
        animationTimeout = setTimeout(reverseAnimate, 1);
      }
    }
  }, 300);
});



headerFixedMenu.addEventListener("click", function outsideClickHandler(event) {
    var rect = headerFixedMenu.getBoundingClientRect();
    var xAchse = event.clientX;
    var yAchse = event.clientY;
  
    if (xAchse < rect.left || xAchse >= rect.right || yAchse < rect.top || yAchse >= rect.bottom) {
      headerFixedMenu.classList.add("closed");
      document.body.style.overflow = 'auto';
      document.body.style.overflowX = 'hidden';
      setTimeout(function() {
        document.querySelector('.headerFixedBackground').style.transform = `translate(0px, 0px)`;
        headerFixedMenu.close();
        headerFixedMenu.classList.remove("closed");
        document.body.style.overflow = 'auto';
        document.body.style.overflowX = 'hidden';


        let elementAnimation = 0;
        let animationTimeout;
        clearTimeout(animationTimeout);
        reverseAnimate();
          
        function reverseAnimate() {
          if (elementAnimation >= -20) {
            if (elementAnimation){
            headerFixed.style.transition = "filter ease .5s";
            headerFixed.style.filter = "invert(0)";
            headerFixedBackground.style.backgroundImage = `linear-gradient(to top, #1a1a1a ${elementAnimation}%, wheat 0%)`;
            }
            elementAnimation = elementAnimation - 3;
            animationTimeout = setTimeout(reverseAnimate, 1);
          }
        }
      }, 300);
    }
    }
  );
  

  elementBackgroundColorChange("headerFixedBackground");
  function elementBackgroundColorChange(className) {
    const element = document.querySelector(`.${className}`);
    const classNameName = className;
    let elementAnimation = 0;
    let animationTimeout;

    element.addEventListener('mouseover', () => {
      startAnimation();
    });
    
    element.addEventListener('mouseout', () => {
      endAnimation();
    });
    
    function startAnimation() {
      clearTimeout(animationTimeout);
      animate();
    }
    
    function endAnimation() {
      clearTimeout(animationTimeout);
      reverseAnimate();
    }
    
    function animate() {
      if (elementAnimation <= 120) {
        if (classNameName === "headerFixedBackground"){
        headerFixed.style.transition = "filter ease .5s";
        headerFixed.style.filter = "invert(1)";
        element.style.backgroundImage = `linear-gradient(#1a1a1a ${elementAnimation}%, wheat 0%)`;
        } else if (classNameName === "dontPullMeDialogCloseButton"){
          element.style.backgroundImage = `linear-gradient(#1a1a1a ${elementAnimation}%, rgba(59, 59, 59, 0.163)0%`;
          element.style.transition = "color ease .5s";
          element.style.color = "white";
        }
        elementAnimation = elementAnimation + 3;
        animationTimeout = setTimeout(animate, 1);
      }
    }
    
    function reverseAnimate() {
      if (elementAnimation >= -20) {
        if (classNameName === "headerFixedBackground"){
        headerFixed.style.transition = "filter ease .5s";
        headerFixed.style.filter = "invert(0)";
        element.style.backgroundImage = `linear-gradient(to top, #1a1a1a ${elementAnimation}%, wheat 0%)`;
        } else if (classNameName === "dontPullMeDialogCloseButton"){
          element.style.backgroundImage = `linear-gradient(to top, #1a1a1a ${elementAnimation}%, rgba(59, 59, 59, 0.163)0%`;
          element.style.transition = "color ease .5s";
          element.style.color = "black";
        }
        elementAnimation = elementAnimation - 3;
        animationTimeout = setTimeout(reverseAnimate, 1);
      }
    }
  };
  
  elementBackgroundColorChange("headerFixedBackground");
  elementBackgroundColorChange("dontPullMeDialogCloseButton");







  
  
  
  









function addInteractiveAnimation(className) {
  const element = document.querySelector(`.${className}`);
  let rect;
  let centerX;
  let centerY;
  let moveX;
  let moveY;

  element.addEventListener('mousemove', function(e) {
    rect = element.getBoundingClientRect();
    centerX = rect.left + rect.width / 2;
    centerY = rect.top + rect.height / 2;

    moveX = e.clientX - centerX;
    moveY = e.clientY - centerY;

    element.style.transition = 'transform 0.3s ease';
    element.style.transform = `translate(${moveX*0.5}px, ${moveY*0.5}px)`;
  });

  element.addEventListener('mouseout', function() {
    element.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
    element.style.transform = `translate(${(moveX * -0.5)*0.5}px, ${(moveY * -0.5)*0.5}px)`;
    setTimeout(() => {
      element.style.transition = 'transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
      element.style.transform = 'translate(0, 0)';
    }, 200);
  });
}

addInteractiveAnimation('portfolioIcon');
addInteractiveAnimation('headerAboutMe');
addInteractiveAnimation('headerHome');
addInteractiveAnimation('headerContact');
addInteractiveAnimation('headerLanguageButton');
addInteractiveAnimation('jobDegreeText');
addInteractiveAnimation('aboutMeButton');
addInteractiveAnimation('abdullahfooterIcon');
addInteractiveAnimation('headerFixedBackground');


headerFixedBackground.style.transform = `translate(0px, 0px)`;







dontPullMeDialog.addEventListener("click", function outsideClickHandler(event) {
  var rect = dontPullMeDialog.getBoundingClientRect();
  var xAchse = event.clientX;
  var yAchse = event.clientY;

  if (xAchse < rect.left || xAchse >= rect.right || yAchse < rect.top || yAchse >= rect.bottom) {
      dontPullMeDialog.close();
  }
  }
);



const projectImageSlider1ButtonContainerBackground = document.querySelector('.projectImageSlider1ButtonContainerBackground');
const projectImageSlider1ButtonListingNew = document.querySelector('.projectImageSlider1ButtonListingNew');
const dialogCloseButtonProjects = document.querySelector('.dialogCloseButtonProjects');

projectImageSlider1ButtonContainerBackground.addEventListener('click', () => {
    projectImageSlider1ButtonListingNew.showModal();
    document.body.style.overflow = 'hidden';
});

dialogCloseButtonProjects.addEventListener("click", function outsideClickHandler(event) {
  projectImageSlider1ButtonListingNew.classList.add("closed");
  setTimeout(function() {
    projectImageSlider1ButtonListingNew.close();
    projectImageSlider1ButtonListingNew.classList.remove("closed");
    document.body.style.overflow = 'auto';
    document.body.style.overflowX = 'hidden';
  }, 300);
});



projectImageSlider1ButtonListingNew.addEventListener("click", function outsideClickHandler(event) {
  var rect = projectImageSlider1ButtonListingNew.getBoundingClientRect();
  var xAchse = event.clientX;
  var yAchse = event.clientY;

  if (xAchse < rect.left || xAchse >= rect.right || yAchse < rect.top || yAchse >= rect.bottom) {
    projectImageSlider1ButtonListingNew.classList.add("closed");
    document.body.style.overflow = 'auto';
    document.body.style.overflowX = 'hidden';
    setTimeout(function() {
      projectImageSlider1ButtonListingNew.close();
      projectImageSlider1ButtonListingNew.classList.remove("closed");
      document.body.style.overflow = 'auto';
      document.body.style.overflowX = 'hidden';
    }, 300);
  }
  }
);









document.addEventListener('scroll', () => {
  const footerRect = document.querySelector('#footer').getBoundingClientRect();

  if (footerRect.top <= 0) {
    document.querySelector('#container3').style.overflow = "hidden";
  } else if (footerRect.top >= 0) {
    document.querySelector('#container3').style.overflow = "visible";
  }
});



            



document.addEventListener('scroll', function() {
  const projectImageSlider1 = document.querySelector('.projectImageSlider1');
  const projectSlider = document.querySelector('.projectSlider');
  const container3Rect = container3.getBoundingClientRect();
  const footerRect = document.querySelector('#footer').getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

  const distanceFromTop = container3Rect.top;     
  const distanceFromBottom1 = Math.min(1, (distanceFromTop/5));
  let container3ContentOpacity;
  
    if (container3Rect.top < -(windowHeight * 0.45)) {
      if(footerRect.top >= 600) {
      container3ContentOpacity = -(container3Rect.top + windowHeight) / 250;
    }
    } else if (container3Rect.top >= -(windowHeight * 0.4)) {
      if(footerRect.top >= 600) {
      container3ContentOpacity = -(container3Rect.top + windowHeight) / 2050;
    }
    }

    let scaledValue = distanceFromBottom1;
    
    if (distanceFromBottom1 <= 0) {
      if(footerRect.top >= 600) {
      projectSlider.style.transform = `scale(${scaledValue})`;
      }
      scaledValue = -distanceFromBottom1;
    }
    
    if (scaledValue > 100) {
      projectImageSlider1.style.opacity = `${container3ContentOpacity}`;

      projectSlider.style.color = `black`;
    } else if (scaledValue < 100) {
      projectImageSlider1.style.opacity = `${container3ContentOpacity}`;

      projectSlider.style.color = `black`;
    }
    if(footerRect.top >= 600) {
    projectSlider.style.transform = `scale(${scaledValue})`;
  }
});






  
  document.addEventListener('scroll', function() {
    const container3Rect = container3.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const projectSliderRect = projectSlider.getBoundingClientRect();
  


  
  
    if (window.innerWidth <= 1150) {
      container3.style.overflow = `hidden;`
      projectSlider.style.overflow = `hidden;`
    if (windowHeight*0.4 >= container3Rect.top) {
      container3.style.overflow = `hidden;`
      projectSlider.style.top = `40%`;
      projectSlider.style.left = `0`;
      projectSlider.style.right = `0`;
      projectSlider.style.position = `fixed`;
    } else if (windowHeight*0.4 <= container3Rect.top) {
       projectSlider.style.position = `static`;
     }
    } else {
      container3.style.overflow = `hidden;`
      projectSlider.style.overflow = `hidden;`
      if (windowHeight*0.4 >= container3Rect.top) {
        projectSlider.style.top = `40%`;
        projectSlider.style.left = `0`;
        projectSlider.style.right = `0`;
        projectSlider.style.position = `fixed`;
      } else if (windowHeight*0.4 <= container3Rect.top) {
         projectSlider.style.position = `static`;
       }
    }
  });
























  

  



    

  






  document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelector(".projectImageSlider2");
    const prevButton = document.querySelector(".prevButton");
    const nextButton = document.querySelector(".nextButton");


    let translateCount = 50;
    let translateCountMobile = 90;


    if (window.innerWidth <= 1150) {
      setTimeout(()=>{
        computedStyle = window.getComputedStyle(projectImageSlider2);
        transformValue = computedStyle.getPropertyValue('transform');      
        let transformMatrix = new DOMMatrix(transformValue);
        let translateX = transformMatrix.m41;
        let translateY = transformMatrix.m42;
        let viewportWidth = window.innerWidth;
        translateXInVw = (translateX / viewportWidth) * 100;
    
        if (translateXInVw < 0 && translateXInVw > -91 && window.location.hash === '#projectImageSlider1Header') {
          translateCountMobile = -90;
          nextButton.style.cursor = "auto";
          prevButton.style.cursor = "pointer";
          prevButton.style.color = "wheat";
          nextButton.style.color = "rgba(198, 198, 198, 0.247)";
          sliders.children[1].style.opacity = `0`;
          sliders.children[1].style.transform = `scale(1)`;
          sliders.children[0].style.opacity = `1`;
          
      }
      },1000)
    } else {
    setTimeout(()=>{
    computedStyle = window.getComputedStyle(projectImageSlider2);
    transformValue = computedStyle.getPropertyValue('transform');      
    let transformMatrix = new DOMMatrix(transformValue);
    let translateX = transformMatrix.m41;
    let translateY = transformMatrix.m42;
    let viewportWidth = window.innerWidth;
    translateXInVw = (translateX / viewportWidth) * 100;

    if (translateXInVw < 0 && translateXInVw > -51 && window.location.hash === '#projectImageSlider1Header') {
      translateCount = -50;
      nextButton.style.cursor = "auto";
      prevButton.style.cursor = "pointer";
      prevButton.style.color = "wheat";
      nextButton.style.color = "rgba(198, 198, 198, 0.247)";
      sliders.children[1].style.opacity = `0`;
      sliders.children[1].style.transform = `scale(1)`;
      sliders.children[0].style.opacity = `1`;
      
  }
  },1000)
}

















  function nextImage() {
    computedStyle = window.getComputedStyle(projectImageSlider2);
    transformValue = computedStyle.getPropertyValue('transform');      
    transformMatrix = new DOMMatrix(transformValue);
    translateX = transformMatrix.m41;
    translateY = transformMatrix.m42;
    viewportWidth = window.innerWidth;
    translateXInVw = (translateX / viewportWidth) * 100;



    if (window.innerWidth <= 1150) {
    if (translateXInVw > 85 && translateXInVw < 91 || translateXInVw > -5 && translateXInVw < 5) {
      nextButton.style.transform = "scale(1.3)";
      setTimeout(()=> {
        nextButton.style.transform = "scale(1)";
      }, 200)
        translateCountMobile-= 90;
        sliders.style.transform = `translate(${translateCountMobile}vw, 0%)`;
        if (translateXInVw > 85 && translateXInVw < 91) {
          prevButton.style.cursor = "pointer";
          // prevButton.style.backgroundColor = "wheat";
          prevButton.style.color = "wheat";
          sliders.children[1].style.opacity = `1`;
          sliders.children[1].style.transform = `scale(1)`;
          sliders.children[0].style.opacity = `0`;
        } else if (translateXInVw > -5 && translateXInVw < 5) {
          sliders.children[2].style.opacity = `1`;
          sliders.children[2].style.transform = `scale(1)`;
          sliders.children[1].style.opacity = `0`;
          // nextButton.style.backgroundColor = "rgba(198, 198, 198, 0.247)";
          nextButton.style.color = "rgba(198, 198, 198, 0.247)";
          nextButton.style.cursor = "auto";
        }
  }
    } else {
      if (translateXInVw > 45 && translateXInVw < 51 || translateXInVw > -5 && translateXInVw < 5) {
        nextButton.style.transform = "scale(1.3)";
        setTimeout(()=> {
          nextButton.style.transform = "scale(1)";
        }, 200)
          translateCount-= 50;
          sliders.style.transform = `translate(${translateCount}vw, 0%)`;
          if (translateXInVw > 45 && translateXInVw < 51) {
            prevButton.style.cursor = "pointer";

            prevButton.style.color = "wheat";
            sliders.children[1].style.opacity = `1`;
            sliders.children[1].style.transform = `scale(1)`;
            sliders.children[0].style.opacity = `0`;
          } else if (translateXInVw > -5 && translateXInVw < 5) {
            sliders.children[2].style.opacity = `1`;
            sliders.children[2].style.transform = `scale(1)`;
            sliders.children[1].style.opacity = `0`;

            nextButton.style.color = "rgba(198, 198, 198, 0.247)";
            nextButton.style.cursor = "auto";
          }
    }
  }
}

  function prevImage() {
    computedStyle = window.getComputedStyle(projectImageSlider2);
    transformValue = computedStyle.getPropertyValue('transform');      
    transformMatrix = new DOMMatrix(transformValue);
    translateX = transformMatrix.m41;
    translateY = transformMatrix.m42;
    viewportWidth = window.innerWidth;
    translateXInVw = (translateX / viewportWidth) * 100;

    if (window.innerWidth <= 1150) {
    if (translateXInVw < -85 && translateXInVw > -91 || translateXInVw > -5 && translateXInVw < 5) {
      prevButton.style.transform = "scale(1.3)";
      setTimeout(()=> {
        prevButton.style.transform = "scale(1)";
      }, 200)
      translateCountMobile+=90;
    sliders.style.transform = `translate(${translateCountMobile}vw, 0%)`;
    if (translateXInVw > -5 && translateXInVw < 5) {
      prevButton.style.cursor = "auto";

      prevButton.style.color = "rgba(198, 198, 198, 0.247)";
      sliders.children[1].style.opacity = `.5`;
      sliders.children[1].style.transform = `scale(.5)`;
      sliders.children[0].style.opacity = `1`;
    } else if (translateXInVw < -85 && translateXInVw > -91) {
      sliders.children[2].style.opacity = `.5`;
      sliders.children[2].style.transform = `scale(.5)`;
      sliders.children[1].style.opacity = `1`;

      nextButton.style.color = "wheat";
      nextButton.style.cursor = "pointer";
    }
  }
    } else {
      if (translateXInVw < -45 && translateXInVw > -51 || translateXInVw > -5 && translateXInVw < 5) {
        prevButton.style.transform = "scale(1.3)";
        setTimeout(()=> {
          prevButton.style.transform = "scale(1)";
        }, 200)
      translateCount+=50;
      sliders.style.transform = `translate(${translateCount}vw, 0%)`;
      if (translateXInVw > -5 && translateXInVw < 5) {
        prevButton.style.cursor = "auto";

        prevButton.style.color = "rgba(198, 198, 198, 0.247)";
        sliders.children[1].style.opacity = `.5`;
        sliders.children[1].style.transform = `scale(.5)`;
        sliders.children[0].style.opacity = `1`;
      } else if (translateXInVw < -45 && translateXInVw > -51) {
        sliders.children[2].style.opacity = `.5`;
        sliders.children[2].style.transform = `scale(.5)`;
        sliders.children[1].style.opacity = `1`;

        nextButton.style.color = "wheat";
        nextButton.style.cursor = "pointer";
      }
    }
  }
}
        prevButton.addEventListener("click", prevImage);

        nextButton.addEventListener("click", nextImage);
    });


function getTime() {
    const now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();
    
    if(hours <= 9) {
      hours = `0${hours}`;
    }
    if(minutes <= 9) {
      minutes = `0${minutes}`;
    }
    if(seconds <= 9) {
      seconds = `0${seconds}`;
    }

    digitalTime.textContent = `${hours} : ${minutes} : ${seconds} Uhr`;
  }
  
setInterval(getTime, 1000);