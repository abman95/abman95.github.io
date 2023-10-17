const header = document.querySelector('.header');
const headerFixedBackground = document.querySelector('.headerFixedBackground');
const dialogCloseButton = document.querySelector('.dialogCloseButton');
const headerFixedMenu = document.querySelector('.headerFixedMenu');
const headerFixed = document.querySelector('.headerFixed');
const dialogHeaderListing = document.querySelector('#dialogHeaderListing');


const dialogHome = document.querySelector('.dialogHome');
const dialogAboutMe = document.querySelector('.dialogAboutMe');
const dialogContact = document.querySelector('.dialogContact');


document.body.style.overflowX = 'hidden';




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
  



  let headerFixedBackgroundAnimation = 0;
  let animationTimeout;
  
  headerFixedBackground.addEventListener('mouseover', () => {
    startAnimation();
  });
  
  headerFixedBackground.addEventListener('mouseout', () => {
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
    if (headerFixedBackgroundAnimation <= 120) {
      headerFixed.style.transition = "filter ease .5s";
      headerFixed.style.filter = "invert(1)";
      headerFixedBackground.style.backgroundImage = `linear-gradient(#1a1a1a ${headerFixedBackgroundAnimation}%, wheat 0%)`;
      headerFixedBackgroundAnimation = headerFixedBackgroundAnimation + 2;
      animationTimeout = setTimeout(animate, 1);
    }
  }
  
  function reverseAnimate() {
    if (headerFixedBackgroundAnimation >= -20) {
      headerFixed.style.transition = "filter ease .5s";
      headerFixed.style.filter = "invert(0)";
      headerFixedBackground.style.backgroundImage = `linear-gradient(to top, #1a1a1a ${headerFixedBackgroundAnimation}%, wheat 0%)`;
      headerFixedBackgroundAnimation = headerFixedBackgroundAnimation - 2;
      animationTimeout = setTimeout(reverseAnimate, 1);
    }
  }





  function dialogPageTextAnimation(className) {
    const element = document.querySelector(`.${className}`);
    const dialogTexts = {
      dialogHome: ["HOME", "home"],
      dialogAboutMe: ["ABOUT ME", "about me"],
      dialogContact: ["CONTACT", "contact"]
    };
    let index = 0;
    let text;
    let animationDirection = "forward";
    let animationTextTimeout;
  
    element.addEventListener('mousemove', function() {
      animationDirection = "forward";
      clearTimeout(animationTextTimeout);
      animateText(dialogTexts[className][0]);
    });

    element.addEventListener('mouseenter', function() {
      animationDirection = "forward";
      clearTimeout(animationTextTimeout);
      animateText(dialogTexts[className][0]);
    });
  
    element.addEventListener('mouseout', function() {
      animationDirection = "backward";
      clearTimeout(animationTextTimeout);
      animateText(dialogTexts[className][1]);
    });

    element.addEventListener('mouseleave', function() {
      animationDirection = "backward";
      clearTimeout(animationTextTimeout);
      animateText(dialogTexts[className][1]);
    });
  
    function animateText(targetText) {
      if (text !== targetText) {
        text = targetText;
        index = 0;
        element.textContent = "";
      }
      if (index < text.length) {
        element.textContent += text[index];
        index++;
        animationTextTimeout = setTimeout(() => {
          animateText(targetText);
        }, 100);
      }
    }
  }
  
  // Verwende die Funktion für deine Elemente
  dialogPageTextAnimation("dialogHome");
  dialogPageTextAnimation("dialogAboutMe");
  dialogPageTextAnimation("dialogContact")






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
  
  // Anwenden der Funktion auf verschiedene Klassen
  addInteractiveAnimation('portfolioIcon');
  addInteractiveAnimation('headerAboutMe');
  addInteractiveAnimation('headerHome');
  addInteractiveAnimation('headerContact');
  addInteractiveAnimation('submitButton');
  addInteractiveAnimation('abdullahfooterIcon');




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
