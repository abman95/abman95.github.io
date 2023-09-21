const aboutMePageIntroductoryText = document.querySelector(".aboutMePageIntroductoryText");
const aboutMePageIntroductoryText1 = document.querySelector(".aboutMePageIntroductoryText1");
const aboutMePageIntroductoryText2 = document.querySelector(".aboutMePageIntroductoryText2");
const aboutMePageIntroductoryText3 = document.querySelector(".aboutMePageIntroductoryText3");
const aboutMePageIntroductoryText4 = document.querySelector(".aboutMePageIntroductoryText4");
const aboutMePageIntroductoryText5 = document.querySelector(".aboutMePageIntroductoryText5");
const aboutMePageIntroductoryText6 = document.querySelector(".aboutMePageIntroductoryText6");
const aboutMePageIntroductoryHeader = document.querySelector(".aboutMePageIntroductoryHeader");
const aboutMePageIntroductoryHeader1 = document.querySelector(".aboutMePageIntroductoryHeader1");
const aboutMePageIntroductoryHeader2 = document.querySelector(".aboutMePageIntroductoryHeader2");
const aboutMePageIntroductoryHeader3 = document.querySelector(".aboutMePageIntroductoryHeader3");
const aboutMePageIntroductoryHeader4 = document.querySelector(".aboutMePageIntroductoryHeader4");
const aboutMePageIntroductoryHeader5 = document.querySelector(".aboutMePageIntroductoryHeader5");
const aboutMePageIntroductoryHeader6 = document.querySelector(".aboutMePageIntroductoryHeader6");
const fixedImage = document.querySelector(".fixed-image");
const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const container3 = document.getElementById("container3");
const container4 = document.getElementById("container4");
const container5 = document.getElementById("container5");
const footer = document.querySelector("#footer");





function containerGlow(className) {
  const element = document.querySelector(`.${className}`);
  rect = element.getBoundingClientRect();

  element.addEventListener('mousemove', function(e) {
    xPosition = e.clientX / rect.left ;
    yPosition = e.clientY / rect.top;
    x = (e.clientX*5)/xPosition;
    y = (e.clientY*5)/yPosition;

    console.log(`MausX ${e.clientX} | ContainerX ${rect.left} | XBERECHNET ${x}`)
    console.log(`MausY ${e.clientY} | ContainerY ${rect.top} | yBERECHNET ${y}`)

    element.style.setProperty("--mouse-x", `${xPosition}px`);
    element.style.setProperty("--mouse-y", `${yPosition}px`);
  });
  // element.addEventListener('mouseout', function() {
  // });
}


containerGlow('work1');
containerGlow('work2');
containerGlow('work3');
containerGlow('work4');
containerGlow('work5');
containerGlow('work6');










document.addEventListener("DOMContentLoaded", () => {
  setTimeout(()=> {
    document.querySelector('.container1Container').classList.add("show");
    fixedImage.classList.add("show");
  }, 500)
});


const firstElementLine = document.querySelector('.firstElementLine');
const secondElementLine = document.querySelector('.secondElementLine');
const thirdElementLine = document.querySelector('.thirdElementLine');
const fourthElementLine = document.querySelector('.fourthElementLine');
const fifthElementLine = document.querySelector('.fifthElementLine');
const sixthElementLine = document.querySelector('.sixthElementLine');
const seventhElementLine = document.querySelector('.seventhElementLine');

const firstElement = document.querySelector(".firstElement");
const secondElement = document.querySelector(".secondElement");
const thirdElement = document.querySelector(".thirdElement");
const fourthElement = document.querySelector(".fourthElement");
const fifthElement = document.querySelector(".fifthElement");
const sixthElement = document.querySelector(".sixthElement");
const seventhElement = document.querySelector(".seventhElement");

document.addEventListener('scroll', function() {
  const container1Rect = container1.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  const firstElementRect = firstElement.getBoundingClientRect();
  const secondElementRect = secondElement.getBoundingClientRect();
  const thirdElementRect = thirdElement.getBoundingClientRect();
  const fourthElementRect = fourthElement.getBoundingClientRect();
  const fifthElementRect = fifthElement.getBoundingClientRect();
  const sixthElementRect = sixthElement.getBoundingClientRect();
  const seventhElementRect = seventhElement.getBoundingClientRect();

  const firstElementLineRect = firstElementLine.getBoundingClientRect();
  const secondElementLineRect = secondElementLine.getBoundingClientRect();
  const thirdElementLineRect = thirdElementLine.getBoundingClientRect();
  const fourthElementLineRect = fourthElementLine.getBoundingClientRect();
  const fifthElementLineRect = fifthElementLine.getBoundingClientRect();
  const sixthElementLineRect = sixthElementLine.getBoundingClientRect();
  const seventhElementLineRect = seventhElementLine.getBoundingClientRect();

  console.log(windowHeight); 
  console.log(secondElementRect.top); 
  console.log(-1*(firstElementRect.top-(windowHeight/2))); 




  //TextAbschnitt1
  if (windowHeight/2 >= firstElementRect.top) {
    firstElementLine.style.backgroundImage = `linear-gradient(black ${-1*(firstElementRect.top-(windowHeight/2))}px, lightGrey 0%)`;
    aboutMePageIntroductoryHeader.classList.add("show");
    aboutMePageIntroductoryText.classList.add("show");
    firstElement.classList.add("show");
  } else if (windowHeight/2 <= firstElementRect.top) {
    firstElementLine.style.backgroundImage = `linear-gradient(black ${-1*(firstElementRect.top-(windowHeight/2))}px, lightGrey 0%)`;
    firstElement.classList.remove("show");
    aboutMePageIntroductoryHeader.classList.remove("show");
    aboutMePageIntroductoryText.classList.remove("show");
  }  
  //TextAbschnitt2
  if (windowHeight/2 >= secondElementRect.top) {
    secondElementLine.style.backgroundImage = `linear-gradient(black ${-1*(secondElementRect.top-(windowHeight/2))}px, lightGrey 0%)`;
    aboutMePageIntroductoryHeader1.classList.add("show");
    aboutMePageIntroductoryText1.classList.add("show");
    secondElement.classList.add("show");
  } else if (windowHeight/2 <= secondElementRect.top) {
    secondElementLine.style.backgroundImage = `linear-gradient(black ${-1*(secondElementRect.top-(windowHeight/2))}px, lightGrey 0%)`;
    secondElement.classList.remove("show");
    aboutMePageIntroductoryHeader1.classList.remove("show");
    aboutMePageIntroductoryText1.classList.remove("show");
  }
  //TextAbschnitt3
  if (windowHeight/2 >= thirdElementRect.top) {
    thirdElementLine.style.backgroundImage = `linear-gradient(black ${-1*(thirdElementRect.top-(windowHeight/2))}px, lightGrey 0%)`;
    aboutMePageIntroductoryHeader2.classList.add("show");
    aboutMePageIntroductoryText2.classList.add("show");
    thirdElement.classList.add("show");
  } else if (windowHeight/2 <= thirdElementRect.top) {
    thirdElementLine.style.backgroundImage = `linear-gradient(black ${-1*(thirdElementRect.top-(windowHeight/2))}px, lightGrey 0%)`;
    thirdElement.classList.remove("show");
    aboutMePageIntroductoryHeader2.classList.remove("show");
    aboutMePageIntroductoryText2.classList.remove("show");
  }  
  //TextAbschnitt4
  if (windowHeight/2 >= fourthElementRect.top) {
    fourthElementLine.style.backgroundImage = `linear-gradient(black ${-1*(fourthElementRect.top-(windowHeight/2))}px, lightGrey 0%)`;
    aboutMePageIntroductoryHeader3.classList.add("show");
    aboutMePageIntroductoryText3.classList.add("show");
    fourthElement.classList.add("show");
  } else if (windowHeight/2 <= fourthElementRect.top) {
    fourthElementLine.style.backgroundImage = `linear-gradient(black ${-1*(fourthElementRect.top-(windowHeight/2))}px, lightGrey 0%)`;
    fourthElement.classList.remove("show");
    aboutMePageIntroductoryHeader3.classList.remove("show");
    aboutMePageIntroductoryText3.classList.remove("show");
  }
  //TextAbschnitt5
  if (windowHeight/2 >= fifthElementRect.top) {
    fifthElementLine.style.backgroundImage = `linear-gradient(black ${-1*(fifthElementRect.top-(windowHeight/2))}px, lightGrey 0%)`;
    aboutMePageIntroductoryHeader4.classList.add("show");
    aboutMePageIntroductoryText4.classList.add("show");
    fifthElement.classList.add("show");
  } else if (windowHeight/2 <= fifthElementRect.top) {
    fifthElementLine.style.backgroundImage = `linear-gradient(black ${-1*(fifthElementRect.top-(windowHeight/2))}px, lightGrey 0%)`;
    fifthElement.classList.remove("show");
    aboutMePageIntroductoryHeader4.classList.remove("show");
    aboutMePageIntroductoryText4.classList.remove("show");
  }
    //TextAbschnitt6
  if (windowHeight/2 >= sixthElementRect.top) {
    sixthElementLine.style.backgroundImage = `linear-gradient(rgb(0, 183, 0) ${-1*(sixthElementRect.top-(windowHeight/2))}px, lightGrey 0%)`;
    aboutMePageIntroductoryHeader5.classList.add("show");
    aboutMePageIntroductoryText5.classList.add("show");
    sixthElement.classList.add("show");
  } else if (windowHeight/2 <= sixthElementRect.top) {
    sixthElementLine.style.backgroundImage = `linear-gradient(rgb(0, 183, 0) ${-1*(sixthElementRect.top-(windowHeight/2))}px, lightGrey 0%)`;
    sixthElement.classList.remove("show");
    aboutMePageIntroductoryHeader5.classList.remove("show");
    aboutMePageIntroductoryText5.classList.remove("show");
  }
      //TextAbschnitt7
      if (windowHeight/2 >= seventhElementRect.top) {
        seventhElementLine.style.backgroundImage = `linear-gradient(rgb(0, 183, 0) ${-1*(seventhElementRect.top-(windowHeight/2))}px, lightGrey 0%)`;
        aboutMePageIntroductoryHeader6.classList.add("show");
        aboutMePageIntroductoryText6.classList.add("show");
        seventhElement.classList.add("show");
      } else if (windowHeight/2 <= seventhElementRect.top) {
        seventhElementLine.style.backgroundImage = `linear-gradient(rgb(0, 183, 0) ${-1*(seventhElementRect.top-(windowHeight/2))}px, lightGrey 0%)`;
        seventhElement.classList.remove("show");
        aboutMePageIntroductoryHeader6.classList.remove("show");
        aboutMePageIntroductoryText6.classList.remove("show");
      }
});



aboutMePageIntroductoryHeader6.addEventListener('click', function () {
  const pdfFilePath = 'CV/CV - Abdullah Sögüt.pdf';

  // Create a temporary link element
  const link = document.createElement('a');
  link.href = pdfFilePath;
  link.target = '_blank'; // Open the PDF in a new tab/window (optional)
  link.download = 'Abdullah_Sogut_CV.pdf'; // Specify the downloaded file name

  // Trigger a click event on the link to initiate the download
  link.click();
});


aboutMePageIntroductoryText6.addEventListener('click', function () {
  const gitHubPath = 'https://github.com/abman95';

  // Create a temporary link element
  const link = document.createElement('a');
  link.href = gitHubPath;
  link.target = '_blank'; // Open the PDF in a new tab/window (optional)

  // Trigger a click event on the link to initiate the download
  link.click();
});



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
addInteractiveAnimation('abdullahfooterIcon');








function degreeSlider(className) {
  const element = document.querySelector(`.${className}`);
  const elementLogo = document.querySelector(`.${className}Logo`);

  element.addEventListener('mousemove', function(e) {
    elementLogo.style.opacity = `1`;
    element.style.transform = `translateX(0vw)`;
    element.style.transition = 'transform .7s ease';
  });

  element.addEventListener('mouseout', function() {
    elementLogo.style.opacity = `0`;
    element.style.transition = 'transform .7s ease';
    element.style.transform = `translateX(-29.375vw)`;
  });
}


degreeSlider('school');
degreeSlider('university');








document.addEventListener('scroll', function() {
  const container5Rect = container5.getBoundingClientRect();
  const footerRect = footer.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Abstand, damit das Bild außerhalb des Footers bleibt
  const distanceFromBottom4 = Math.min(0, (container5Rect.bottom - windowHeight));
  const distanceFromBottom = Math.min(0, (footerRect.top - windowHeight));
  // console.log(windowHeight);
  // console.log(distanceFromBottom);
  // console.log(footerRect.top);
  
  fixedImage.style.setProperty('--scroll-padding', 1+distanceFromBottom4*-1 + 'px');
  fixedImage.style.transition = "auto";
});






 















function addShowClassDelayed(element, delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      element.classList.add('show');
      resolve();
    }, delay);
  });
}

async function scrollHandler() {
  const elementsToShow = document.querySelectorAll('.element-to-show');
  let delay = 0;

  for (const element of elementsToShow) {
    await addShowClassDelayed(element, delay);
    // Hier könntest du weitere Aktionen nach dem Hinzufügen der 'show'-Klasse durchführen
    delay += 500; // Verzögerung für das nächste Element, in Millisekunden
  }
}

// Füge deinen Scroll-Event-Listener hinzu
window.addEventListener('scroll', scrollHandler);
