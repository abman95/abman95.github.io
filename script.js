const abdullahImage = document.querySelector('.abdullahSogutPicture');
const aboutMeHeadingElement = document.querySelector('.aboutMeHeading');
const aboutMeTextElements = document.querySelector('.aboutMeText');

const projectOnePicture = document.querySelector('.projectOnePicture');
const projectOneName = document.querySelector('.projectOneName');
const projectOneDescription = document.querySelector('.projectOneDescription');
const aboutMeButton = document.querySelector('.aboutMeButton');
const aboutMeButtonBorder = document.querySelector('.aboutMeButtonBorder');

const projectTwoRight = document.querySelector('.projectTwoRight');
const projectTwoPicture = document.querySelector('.projectTwoPicture');
const projectTwoName = document.querySelector('.projectTwoName');
const projectTwoDescription = document.querySelector('.projectTwoDescription');

const projectThreePicture = document.querySelector('.projectThreePicture');
const projectThreeName = document.querySelector('.projectThreeName');
const projectThreeDescription = document.querySelector('.projectThreeDescription');

const projectFourPicture = document.querySelector('.projectFourPicture');
const projectFourName = document.querySelector('.projectFourName');
const projectFourDescription = document.querySelector('.projectFourDescription');

const digitalTime = document.querySelector('#digitalTime');
const projectSlider = document.querySelector('.projectSlider');
const container3 = document.getElementById('container3');
const projectImageSlider2Images = document.querySelector('.projectImageSlider2Images');



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
addInteractiveAnimation('jobDegreeText');
addInteractiveAnimation('aboutMeButton');
addInteractiveAnimation('abdullahfooterIcon');





function addInteractiveAnimationOnLocatedInGermany(className) {
  const element = document.querySelector(`.${className}`);
  const elementWidth = element.getBoundingClientRect().width;
  const maxOffsetX = elementWidth / 8;
  let isMouseDown = false;
  let startMouseX;
  let startElementX;
  let animationTimeout;

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

      // Begrenze die Verschiebung auf maximal 50% der Breite
      newElementX = Math.max(-maxOffsetX, Math.min(maxOffsetX, newElementX));

      element.style.transform = `translate(${newElementX}px, ${0}px)`;
    }
  });

  document.addEventListener('mouseup', function() {
    if (isMouseDown) {
      isMouseDown = false;

      element.style.transition = 'transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
      element.style.transform = 'translate(0, 0)';

      animationTimeout = setTimeout(() => {
        element.style.transition = '';
      }, 300);
    }
  });
}

addInteractiveAnimationOnLocatedInGermany('locatedInContainerBackground');










const projectImageSlider1ButtonContainerBackground = document.querySelector('.projectImageSlider1ButtonContainerBackground');
const projectImageSlider1ButtonListing = document.querySelector('.projectImageSlider1ButtonListing');
let isClick = false;

// Füge einen Klick-Eventlistener zum Container hinzu
projectImageSlider1ButtonContainerBackground.addEventListener('click', () => {
  if (!isClick) {
    projectImageSlider1ButtonListing.style.transition = "transform 0.5s ease, height 0.5s ease, width 0.5s ease"; // Übergangseigenschaft hinzugefügt
    projectImageSlider1ButtonListing.style.display = "flex";
    projectImageSlider1ButtonListing.classList.add('active'); // Schaltet die Liste ein/aus
    projectImageSlider1ButtonListing.style.transform = " rotateX(0deg) translateY(0%)";
    projectImageSlider1ButtonListing.style.transformOrigin = "top";
  
  } else {
    projectImageSlider1ButtonListing.style.transition = "transform 0.5s ease, height 0.5s ease, width 0.5s ease"; // Übergangseigenschaft hinzugefügt
    projectImageSlider1ButtonListing.style.display = "flex";
    projectImageSlider1ButtonListing.classList.remove('active'); // Schaltet die Liste ein/aus
    projectImageSlider1ButtonListing.style.transform = "rotateX(-90deg) translateY(0%)";
    projectImageSlider1ButtonListing.style.transformOrigin = "top";
  }
  isClick = !isClick;
});












document.addEventListener('scroll', () => {
  const footerRect = document.querySelector('#footer').getBoundingClientRect();

  console.log(`FooterTop: ${footerRect.top}`);
  console.log(`FooterBottom: ${footerRect.bottom}`);

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
  console.log(container3Rect.top);
  console.log(windowHeight);
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



addInteractiveAnimation('mp3');
addInteractiveAnimation('typing');
addInteractiveAnimation('toDo');
addInteractiveAnimation('timer');
addInteractiveAnimation('clock');
addInteractiveAnimation('keyGen');






const container1Heading = "I am a experienced Web Designer & Private Software Engineer with expertise in WordPress, HTML, CSS and JavaScript. My diverse background includes entrepreneurship, marketing, logistics, and customer service, making me a valuable asset for your team! Explore my portfolio today!"



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
      console.log('Aktueller Abschnitt:', entry.target.id);
      if (entry.target.id === "container1") {
        // document.documentElement.style.background = "black";
        setTimeout(() => {
          abdullahImage.classList.add('show');
        }, 1000);
    } else if (entry.target.id === "container2") {
      setTimeout(()=> {
        projectOneDescription.classList.add('show');
      addLetterHeadingContainer1();

    }, 1000);


    } else if (entry.target.id === "container3") {
        // document.documentElement.style.background = "#888888";
            projectTwoPicture.classList.add('show');
                projectTwoName[i].classList.add('show');
                projectTwoDescription[i].classList.add('show');
    } else if (entry.target.id === "container4") {
        // document.documentElement.style.background = "#39525F";
            projectThreePicture.classList.add('show');
                projectThreeName[i].classList.add('show');
                projectThreeDescription[i].classList.add('show');
    } else if (entry.target.id === "container5") {
        // document.documentElement.style.background = "#FFCD00";
            projectFourPicture.classList.add('show');
                projectFourName[i].classList.add('show');
                projectFourDescription[i].classList.add('show');
    }
   }
 })
}
  


  const sectionElements = document.querySelectorAll('.container');
  

  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.2 // Wert zwischen 0 und 1, der angibt, zu welchem Anteil das Element sichtbar sein muss, um als im Viewport sichtbar zu gelten
  });
  
  sectionElements.forEach(section => {
    observer.observe(section);
  });
  

  


  document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelector(".projectImageSlider2");
    const prevButton = document.querySelector(".prevButton");
    const nextButton = document.querySelector(".nextButton");

    let translateCount = 75;

    
        function nextImage() {
          if(translateCount > -26) {
            nextButton.style.transform = "scale(1.1)";
            setTimeout(()=> {
              nextButton.style.transform = "scale(1)";
            }, 200)
          translateCount-= 50;
          sliders.style.transform = `translate(${translateCount}vw, 0%)`;
          if (translateCount === 25) {
            prevButton.style.cursor = "pointer";
            prevButton.style.backgroundColor = "wheat";
            sliders.children[1].style.opacity = `1`;
            sliders.children[1].style.transform = `scale(1)`;
            sliders.children[0].style.opacity = `0`;
          } else if (translateCount === -25) {
            sliders.children[2].style.opacity = `1`;
            sliders.children[2].style.transform = `scale(1)`;
            sliders.children[1].style.opacity = `0`;
          } else if (translateCount === -75) {
            sliders.children[3].style.opacity = `1`;
            sliders.children[3].style.transform = `scale(1)`;
            sliders.children[2].style.opacity = `0`;
            nextButton.style.backgroundColor = "rgba(198, 198, 198, 0.247)";
            nextButton.style.cursor = "auto";
          } 
        }
      }
        function prevImage() {
          if(translateCount < 75) {
            prevButton.style.transform = "scale(1.1)";
            setTimeout(()=> {
              prevButton.style.transform = "scale(1)";
            }, 200)
          translateCount+=50;
          sliders.style.transform = `translate(${translateCount}vw, 0%)`;
          if (translateCount === 75) {
            prevButton.style.cursor = "auto";
            prevButton.style.backgroundColor = "rgba(198, 198, 198, 0.247)";
            sliders.children[1].style.opacity = `.5`;
            sliders.children[1].style.transform = `scale(.5)`;
            sliders.children[0].style.opacity = `1`;
          } else if (translateCount === 25) {
            sliders.children[2].style.opacity = `.5`;
            sliders.children[2].style.transform = `scale(.5)`;
            sliders.children[1].style.opacity = `1`;
          } else if (translateCount === -25) {
            sliders.children[3].style.opacity = `.5`;
            sliders.children[3].style.transform = `scale(.5)`;
            sliders.children[2].style.opacity = `1`;
            nextButton.style.backgroundColor = "wheat";
            nextButton.style.cursor = "pointer";
          }
        }
    }

        // Zurück- und Vorwärtsbuttons hinzufügen
        prevButton.addEventListener("click", prevImage);

        nextButton.addEventListener("click", nextImage);
    });

    
    // Anwenden der Funktion auf verschiedene Klassen
    addInteractiveAnimation('portfolioIcon');
    addInteractiveAnimation('headerAboutMe');
    addInteractiveAnimation('headerHome');
    addInteractiveAnimation('headerContact');
    addInteractiveAnimation('jobDegreeText');
    addInteractiveAnimation('aboutMeButton');
    addInteractiveAnimation('abdullahfooterIcon');






   

    function projectListSelector(className) {
      const element = document.querySelector(`.${className}`);
      const nameOfClass = className;
      const projectImageSlider2Images1 = document.querySelector('#projectImageSlider2Images1');
      const projectImageSlider2Images2 = document.querySelector('#projectImageSlider2Images2');
      const projectImageSlider2Images3 = document.querySelector('#projectImageSlider2Images3');
      const projectImageSlider2Images4 = document.querySelector('#projectImageSlider2Images4');
    
      element.addEventListener('click', function() {
        new Promise(resolve => {
          projectImageSlider2Images1.style.opacity = `0`;
          projectImageSlider2Images2.style.opacity = `0`;
          projectImageSlider2Images3.style.opacity = `0`;
          projectImageSlider2Images4.style.opacity = `0`;
          setTimeout(() => {
            resolve();
          }, 500);
        }).then(() => {
          projectImageSlider2Images1.style.transition = `all ease 1s`;
          projectImageSlider2Images2.style.transition = `all ease 1s`;
          projectImageSlider2Images3.style.transition = `all ease 1s`;
          projectImageSlider2Images4.style.transition = `all ease 1s`;
          projectImageSlider2Images1.src = `Pictures/Projects/${nameOfClass}/${nameOfClass}Picture.png`;
          projectImageSlider2Images2.src = `Pictures/Projects/${nameOfClass}/${nameOfClass}Picture1.png`;
          projectImageSlider2Images3.src = `Pictures/Projects/${nameOfClass}/${nameOfClass}Picture2.png`;
          projectImageSlider2Images4.src = `Pictures/Projects/${nameOfClass}/${nameOfClass}Picture3.png`;
          // Warten Sie hier, bis die Bilder geladen sind
          return new Promise(resolve => {
            setTimeout(() => {
              resolve();
            }, 500);
          });
        }).then(() => {
          projectImageSlider2Images1.style.opacity = `1`;
          projectImageSlider2Images2.style.opacity = `1`;
          projectImageSlider2Images3.style.opacity = `1`;
          projectImageSlider2Images4.style.opacity = `1`;
        });
      });
    }
    
    
    projectListSelector("mp3");
    projectListSelector("typing");
    projectListSelector("toDo");
    projectListSelector("timer");
    projectListSelector("clock");
    projectListSelector("keyGen");
    

  
  

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









  projectTwoRight.addEventListener("mouseenter", () => {
      projectTwoRight.classList.remove('moving'); // Entferne die Klasse, um das Bild anzuhalten
  });
  
  projectTwoRight.addEventListener("mouseleave", () => {
      projectTwoRight.classList.add('moving'); // Füge die Klasse hinzu, um das Bild fortzusetzen
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
  
//Sorgt dafür, dass die Funktion jede Sekunde wieder neu ausgeführt wird
//und somit jede Sekunde der Uhrzeit neu erfasst und aktull dargestellt wird
setInterval(getTime, 1000);




