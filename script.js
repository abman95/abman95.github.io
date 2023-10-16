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
const projectOneDescription = document.querySelector('.projectOneDescription');
const aboutMeButton = document.querySelector('.aboutMeButton');
const aboutMeButtonBorder = document.querySelector('.aboutMeButtonBorder');

const digitalTime = document.querySelector('#digitalTime');
const projectSlider = document.querySelector('.projectSlider');
const container1 = document.querySelector('#container1');
const container3 = document.querySelector('#container3');
const projectImageSlider2Images = document.querySelector('.projectImageSlider2Images');


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
      }, 300);
    }
    }
  );
  





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
  
  dialogPageTextAnimation("dialogHome");
  dialogPageTextAnimation("dialogAboutMe");
  dialogPageTextAnimation("dialogContact");
  
  
  
  









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
addInteractiveAnimation('jobDegreeText');
addInteractiveAnimation('aboutMeButton');
addInteractiveAnimation('abdullahfooterIcon');
addInteractiveAnimation('headerFixedBackground');




function addInteractiveAnimationOnLocatedInGermany(className) {
  const element = document.querySelector(`.${className}`);
  const elementWidth = element.getBoundingClientRect().width;
  const maxOffsetX = elementWidth / 8;
  let isMouseDown = false;
  let startMouseX;
  let startElementX;
  let animationTimeout;
  let dontPullMeDialogCount = 0;

  element.addEventListener('mousedown', function(e) {
    isMouseDown = true;
    startMouseX = e.clientX;
    startElementX = parseFloat(getComputedStyle(element).transform.split(',')[4] || 0);
    element.style.transition = 'none';
  });

  document.addEventListener('mousemove', function(e) {
    if (isMouseDown) {
      const moveX = e.clientX - startMouseX;
      let newElementX = startElementX + moveX;

      newElementX = Math.max(-maxOffsetX, Math.min(maxOffsetX, newElementX));

      element.style.transform = `translate(${newElementX}px, ${0}px)`;
    }
  });

  document.addEventListener('mouseup', function() {
    if (isMouseDown) {

      const dontPullMeDialog = document.querySelector('.dontPullMeDialog');
      const dialogHeadline = document.querySelector('.dialogHeadline');
      const dontPullMeDialogCloseButton = document.querySelector('.dontPullMeDialogCloseButton');

      isMouseDown = false;
      dontPullMeDialogCount++;
      element.style.transition = 'transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
      element.style.transform = 'translate(0, 0)';

        if (dontPullMeDialogCount === 1) {
          dontPullMeDialog.showModal();
      } else if (dontPullMeDialogCount === 2) {
          dialogHeadline.textContent = "Seriously Stop.";
          dontPullMeDialogCloseButton.textContent = "Okay";
          dontPullMeDialog.showModal();
      } else if (dontPullMeDialogCount === 3) {
        dialogHeadline.textContent = "You asked for it";
        dontPullMeDialogCloseButton.textContent = "...";
        dontPullMeDialog.showModal();
        setTimeout(()=> {
          dontPullMeDialog.close();


          const pdfFilePath = 'CV/CV - Abdullah Sögüt.pdf';

          const link = document.createElement('a');

          link.href = pdfFilePath;
          link.target = '_blank';
          // link.download = 'Abdullah_Sogut_CV.pdf';
          link.click();
        },2000);
      } else if (dontPullMeDialogCount === 4) {
        dialogHeadline.textContent = `Now tell me "YOU ARE HIRED!"!`;
        dontPullMeDialogCloseButton.textContent = "calling...";
        dontPullMeDialog.showModal();
        setTimeout(()=> {

          const callingAbdullah = document.createElement('a');

          callingAbdullah.href = "tel:01731905742";
          callingAbdullah.click();
          dontPullMeDialogCloseButton.textContent = "close...";
        },2000);
      }
      animationTimeout = setTimeout(() => {
        element.style.transition = '';
      }, 300);
    }
  });
}

addInteractiveAnimationOnLocatedInGermany('locatedInContainerBackground');





dontPullMeDialog.addEventListener("click", function outsideClickHandler(event) {
  var rect = dontPullMeDialog.getBoundingClientRect();
  var xAchse = event.clientX;
  var yAchse = event.clientY;

  if (xAchse < rect.left || xAchse >= rect.right || yAchse < rect.top || yAchse >= rect.bottom) {
      dontPullMeDialog.close();
  }
  }
);






/*
const projectImageSlider1ButtonContainerBackground = document.querySelector('.projectImageSlider1ButtonContainerBackground');
const projectImageSlider1ButtonListing = document.querySelector('.projectImageSlider1ButtonListing');
let isClick = false;

projectImageSlider1ButtonContainerBackground.addEventListener('click', () => {
  if (!isClick) {
    projectImageSlider1ButtonListing.style.transition = "transform 0.5s ease, height 0.5s ease, width 0.5s ease";
    projectImageSlider1ButtonListing.style.display = "flex";
    projectImageSlider1ButtonListing.classList.add('active');
    projectImageSlider1ButtonListing.style.transform = " rotateX(0deg) translateY(0%)";
    projectImageSlider1ButtonListing.style.transformOrigin = "top";
  
  } else {
    projectImageSlider1ButtonListing.style.transition = "transform 0.5s ease, height 0.5s ease, width 0.5s ease";
    projectImageSlider1ButtonListing.style.display = "flex";
    projectImageSlider1ButtonListing.classList.remove('active');
    projectImageSlider1ButtonListing.style.transform = "rotateX(-90deg) translateY(0%)";
    projectImageSlider1ButtonListing.style.transformOrigin = "top";
  }
  isClick = !isClick;
});
*/



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
  // projectSlider.style.transformOrigin = `${(container3Rect.right/2)-(windowWidth*0.004)}px`;

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
      // projectImageSlider1.classList.add('show');
      projectSlider.style.color = `black`;
    } else if (scaledValue < 100) {
      projectImageSlider1.style.opacity = `${container3ContentOpacity}`;
      // projectImageSlider1.classList.remove('show');
      projectSlider.style.color = `black`;
    }
    if(footerRect.top >= 600) {
    projectSlider.style.transform = `scale(${scaledValue})`;
  }
});


/*
addInteractiveAnimation('mp3');
addInteractiveAnimation('typing');
addInteractiveAnimation('toDo');
addInteractiveAnimation('timer');
addInteractiveAnimation('clock');
addInteractiveAnimation('keyGen');
*/





const container1Heading = "I am an experienced Web Designer and Private Software Engineer with expertise in WordPress, HTML, CSS, and JavaScript. My diverse background includes entrepreneurship, marketing, logistics, and customer service, making me a valuable asset for your team. Explore my portfolio today!"



let i = 0;

function addLetterHeadingContainer1() {
  return new Promise(resolve => {
    if (i < container1Heading.length) {
      projectOneDescription.textContent += container1Heading[i];
      i++;
      setTimeout(() => {
        addLetterHeadingContainer1().then(resolve);
      }, 40);
    } else {
      resolve();
    }
  });
}







function handleIntersection(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.id === "container1") {
    } else if (entry.target.id === "container2") {
      setTimeout(()=> {
        projectOneDescription.classList.add('show');
      addLetterHeadingContainer1();
    }, 1000);
    } else if (entry.target.id === "container3") {
    }
   }
 })
}
  
  const sectionElements = document.querySelectorAll('.container');
  

  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.2
  });
  
  sectionElements.forEach(section => {
    observer.observe(section);
  });





  
  document.addEventListener('scroll', function() {
    const container3Rect = container3.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const projectSliderRect = projectSlider.getBoundingClientRect();
  
    console.log(container3Rect.top);

  
  
    if (window.innerWidth <= 450) {
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
























  

  


  let projectPath = localStorage.getItem("projectPath");

  function projectListSelector(className) {
    const element = document.querySelector(`.${className}`);
    const nameOfClass = className;


    const projectImageSlider2 = document.querySelector('.projectImageSlider2');
    const projectImageSlider1Header = document.querySelector('.projectImageSlider1Header');
    const projectImageSlider2ImagesProjectDescription = document.querySelector('.projectImageSlider2ImagesProjectDescription');

    const projectImageSlider2Images1 = document.querySelector('#projectImageSlider2Images1');
    const projectImageSlider2Images2 = document.querySelector('#projectImageSlider2Images2');
    const projectImageSlider2Images3 = document.querySelector('#projectImageSlider2Images3');
    const projectImageSlider2ImagesAfterPseudoDiv = document.querySelector('#projectImageSlider2ImagesAfterPseudoDiv');


    if (!(window.location.hash === '#projectImageSlider1Header')) {
      projectPath = `mp3Index.html`;
    }
    



    const projectText = getProjectText(nameOfClass);
    const projectHeader = getProjectHeader(nameOfClass);



    function getProjectHeader(className) {
      switch (className) {
        case "mp3":
          return "MP3 Player";
        case "typing":
          return "Typing Speed App";
        case "toDo":
          return "To Do App";
        case "timer":
          return "Timer";
        case "clock":
          return "Clock";
        case "keyGen":
          return "Key Generator";
        default:
          return "";  
      }
    }


    function getProjectText(className) {
      switch (className) {
        case "mp3":
          return "My biggest project, which I worked on after 3 1/2 months of intensive learning in JavaScript, CSS, and HTML, is my MP3 player. This MP3 player is a powerful and user-friendly application. It allows you to play MP3 files, fast-forward and rewind, enable auto-play and enjoy shuffle playback. With its media library list, you can easily switch between your songs in the playlist, upload them, and enjoy.";
        case "typing":
          return "My Typing Speed App, developed after 2 1/2 months of learning JavaScript, CSS, and HTML, lets you test and improve your typing skills. It provides accurate speed and accuracy metrics, helping you become a faster and more precise typist.";
        case "toDo":
          return "My ToDo App is a simple and efficient task manager. Designed after 2 months of learning JavaScript, CSS, and HTML, it helps you organize your tasks, set priorities, and stay productive with ease.";
        case "timer":
          return "My Timer App, created after 1 1/2 months of mastering JavaScript, CSS, and HTML, offers precise timing capabilities. Use it for various purposes, from cooking to workouts, with reliability and accuracy.";
        case "clock":
          return "My Clock App is a straightforward timekeeping tool, crafted after 1 months of JavaScript, CSS, and HTML learning. It displays the time accurately, keeping you informed at a glance.";
        case "keyGen":
          return "My KeyGenerator Tool, born after 3 months of studying JavaScript, CSS, and HTML, generates secure and random keys for various purposes. Enhance your security with ease using this efficient utility.";
        default:
          return "";  
      }
    }




    let translateXInVw;

  
    element.addEventListener('click', function() {
      new Promise(resolve => {
        projectPath = `${nameOfClass}Index.html`;
        localStorage.setItem("projectPath", projectPath);
        console.log(projectPath);

        computedStyle = window.getComputedStyle(projectImageSlider2);
        transformValue = computedStyle.getPropertyValue('transform');      
        const transformMatrix = new DOMMatrix(transformValue);
        const translateX = transformMatrix.m41;
        const translateY = transformMatrix.m42;
        const viewportWidth = window.innerWidth;
        translateXInVw = (translateX / viewportWidth) * 100;
        
        projectImageSlider2Images1.style.opacity = `0`;
        projectImageSlider2Images2.style.opacity = `0`;
        // projectImageSlider2Images3.style.opacity = `0`;
        projectImageSlider2ImagesAfterPseudoDiv.style.opacity = `0`;
        projectImageSlider1Header.style.opacity = `0`;
        setTimeout(() => {
          resolve();
        }, 500);
      }).then(() => {
        projectImageSlider2Images1.style.transition = `all ease .5s`;
        projectImageSlider2Images2.style.transition = `all ease .5s`;
        projectImageSlider2Images3.style.transition = `all ease .5s`;
        projectImageSlider1Header.style.transition = `all ease .5s`;
        projectImageSlider2Images1.src = `Pictures/Projects/${nameOfClass}/${nameOfClass}Picture.png`;
        projectImageSlider1Header.textContent = `${projectHeader}`;
        projectImageSlider2ImagesProjectDescription.textContent = `${projectText}`;
        projectImageSlider2Images3.src = `Pictures/Projects/${nameOfClass}/${nameOfClass}Picture1.png`;
        return new Promise(resolve => {
          setTimeout(() => {
            resolve();
          }, 500);
        });
      }).then(() => {
        console.log(translateXInVw);
        if (window.innerWidth <= 450) {
        if (translateXInVw > 85 && translateXInVw < 95) {
          projectImageSlider2Images1.style.opacity = `1`;
          projectImageSlider2Images2.style.opacity = `1`;
          // projectImageSlider2Images3.style.opacity = `1`;
          projectImageSlider2ImagesAfterPseudoDiv.style.opacity = `1`;
        }
        if (translateXInVw > -5 && translateXInVw < 5) {
          projectImageSlider2Images2.style.opacity = `1`;
          // projectImageSlider2Images3.style.opacity = `1`;
          projectImageSlider2ImagesAfterPseudoDiv.style.opacity = `1`;
        }
        else if (translateXInVw > -95 && translateXInVw < -85) {
          // projectImageSlider2Images3.style.opacity = `1`;
          projectImageSlider2ImagesAfterPseudoDiv.style.opacity = `1`;
        }
        projectImageSlider1Header.style.opacity = `1`;
      } else {
        if (translateXInVw === 50) {
          projectImageSlider2Images1.style.opacity = `1`;
          projectImageSlider2Images2.style.opacity = `1`;
          // projectImageSlider2Images3.style.opacity = `1`;
          projectImageSlider2ImagesAfterPseudoDiv.style.opacity = `1`;
        }
        if (translateXInVw === 0) {
          projectImageSlider2Images2.style.opacity = `1`;
          // projectImageSlider2Images3.style.opacity = `1`;
          projectImageSlider2ImagesAfterPseudoDiv.style.opacity = `1`;
        }
        else if (translateXInVw === -50) {
          // projectImageSlider2Images3.style.opacity = `1`;
          projectImageSlider2ImagesAfterPseudoDiv.style.opacity = `1`;
        }
        projectImageSlider1Header.style.opacity = `1`;
      }
      });
    });

    // projectImageSlider2Images3.addEventListener('click', function() {
    projectImageSlider2ImagesAfterPseudoDiv.addEventListener('click', function() {


      const link = document.createElement('a');
      link.href = projectPath;
      // link.target = '_blank';
      link.click();


      /*
      if (!document.projectImageSlider2Images3) {
        projectImageSlider2Images3.style.transition = "none";

        projectImageSlider2Images3.requestFullscreen().then(() => {
            setTimeout(() => {


              const link = document.createElement('a');
              link.href = projectPath;
              // link.target = '_blank';
              link.click();
            }, 500);
        });
    } else {
        document.exitFullscreen();
    }
    */
    });

  }
  
  
  projectListSelector("mp3");
  projectListSelector("typing");
  projectListSelector("toDo");
  projectListSelector("timer");
  projectListSelector("clock");
  projectListSelector("keyGen");
    

  






  document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelector(".projectImageSlider2");
    const prevButton = document.querySelector(".prevButton");
    const nextButton = document.querySelector(".nextButton");


    let translateCount = 50;
    let translateCountMobile = 90;


    if (window.innerWidth <= 450) {
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



    if (window.innerWidth <= 450) {
    if (translateXInVw > 85 && translateXInVw < 911 || translateXInVw > -5 && translateXInVw < 5) {
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

    if (window.innerWidth <= 450) {
    if (translateXInVw < -85 && translateXInVw > -91 || translateXInVw > -5 && translateXInVw < 5) {
      prevButton.style.transform = "scale(1.3)";
      setTimeout(()=> {
        prevButton.style.transform = "scale(1)";
      }, 200)
      translateCountMobile+=90;
    sliders.style.transform = `translate(${translateCountMobile}vw, 0%)`;
    if (translateXInVw > -5 && translateXInVw < 5) {
      prevButton.style.cursor = "auto";
      // prevButton.style.backgroundColor = "rgba(198, 198, 198, 0.247)";
      prevButton.style.color = "rgba(198, 198, 198, 0.247)";
      sliders.children[1].style.opacity = `.5`;
      sliders.children[1].style.transform = `scale(.5)`;
      sliders.children[0].style.opacity = `1`;
    } else if (translateXInVw < -85 && translateXInVw > -91) {
      sliders.children[2].style.opacity = `.5`;
      sliders.children[2].style.transform = `scale(.5)`;
      sliders.children[1].style.opacity = `1`;
      // nextButton.style.backgroundColor = "wheat";
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
        // prevButton.style.backgroundColor = "rgba(198, 198, 198, 0.247)";
        prevButton.style.color = "rgba(198, 198, 198, 0.247)";
        sliders.children[1].style.opacity = `.5`;
        sliders.children[1].style.transform = `scale(.5)`;
        sliders.children[0].style.opacity = `1`;
      } else if (translateXInVw < -45 && translateXInVw > -51) {
        sliders.children[2].style.opacity = `.5`;
        sliders.children[2].style.transform = `scale(.5)`;
        sliders.children[1].style.opacity = `1`;
        // nextButton.style.backgroundColor = "wheat";
        nextButton.style.color = "wheat";
        nextButton.style.cursor = "pointer";
      }
    }
  }
}
        prevButton.addEventListener("click", prevImage);

        nextButton.addEventListener("click", nextImage);
    });









  
/*
  let projectImageSlider1ButtonContainerBackgroundRect;
  let projectImageSlider1ButtonContainerBackgroundCenterX;
  let projectImageSlider1ButtonContainerBackgroundCenterY;
  let projectImageSlider1ButtonContainerBackgroundMoveX;
  let projectImageSlider1ButtonContainerBackgroundMoveY;
  
  projectImageSlider1ButtonContainerBackground.addEventListener('mousemove', function(e) {
    projectImageSlider1ButtonContainerBackgroundRect = projectImageSlider1ButtonContainerBackground.getBoundingClientRect();
    projectImageSlider1ButtonContainerBackgroundCenterX = projectImageSlider1ButtonContainerBackgroundRect.left + projectImageSlider1ButtonContainerBackgroundRect.width / 2;
    projectImageSlider1ButtonContainerBackgroundCenterY = projectImageSlider1ButtonContainerBackgroundRect.top + projectImageSlider1ButtonContainerBackgroundRect.height / 2;
  
    projectImageSlider1ButtonContainerBackgroundMoveX = (e.clientX - projectImageSlider1ButtonContainerBackgroundCenterX);
    projectImageSlider1ButtonContainerBackgroundMoveY = (e.clientY - projectImageSlider1ButtonContainerBackgroundCenterY);
  
    if (isClick) {
    projectImageSlider1ButtonListing.style.transition = 'transform 0.3s ease';
    projectImageSlider1ButtonListing.style.transform = `translate(${projectImageSlider1ButtonContainerBackgroundMoveX}px, ${projectImageSlider1ButtonContainerBackgroundMoveY}px)`;
    }
    projectImageSlider1ButtonContainerBackground.style.transition = 'transform 0.3s ease';
    projectImageSlider1ButtonContainerBackground.style.transform = `translate(${projectImageSlider1ButtonContainerBackgroundMoveX}px, ${projectImageSlider1ButtonContainerBackgroundMoveY}px)`;
  });
projectImageSlider1ButtonContainerBackground.addEventListener('mouseout', function() {
  if (isClick) {
    projectImageSlider1ButtonListing.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
    projectImageSlider1ButtonListing.style.transform = `translate(${(projectImageSlider1ButtonContainerBackgroundMoveX * -1)*0.5}px, ${(projectImageSlider1ButtonContainerBackgroundMoveY * -1)*0.5}px)`;
  }
  
  projectImageSlider1ButtonContainerBackground.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
  projectImageSlider1ButtonContainerBackground.style.transform = `translate(${(projectImageSlider1ButtonContainerBackgroundMoveX * -1)*0.5}px, ${(projectImageSlider1ButtonContainerBackgroundMoveY * -1)*0.5}px)`;

  setTimeout(() => {
    if (isClick) {
      projectImageSlider1ButtonListing.style.transition = 'transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
      projectImageSlider1ButtonListing.style.transform = 'translate(0, 0)';
    }
    
    projectImageSlider1ButtonContainerBackground.style.transition = 'transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
    projectImageSlider1ButtonContainerBackground.style.transform = 'translate(0, 0)';
  }, 200);
});
*/


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