const headerLanguageButton = document.querySelector('.headerLanguageButton');
const headerFixedMenuLanguage = document.querySelector('.headerFixedMenuLanguage');
const dialogCloseButtonLanguage = document.querySelector('.dialogCloseButtonLanguage');
const languageEnglish = document.querySelector('.languageEnglish');
const languageGerman = document.querySelector('.languageGerman');
const dialogLanguageButton = document.querySelector('.dialogLanguageButton');
const projectOneDescription = document.querySelector('.projectOneDescription');




dialogLanguageButton.addEventListener('click', function () {
  headerFixedMenuLanguage.showModal();
  document.body.style.overflow = 'hidden';
});

headerLanguageButton.addEventListener('click', function () {
    headerFixedMenuLanguage.showModal();
    document.body.style.overflow = 'hidden';
});



dialogCloseButtonLanguage.addEventListener("click", function outsideClickHandler(event) {
    headerFixedMenuLanguage.classList.add("closed");
    document.body.style.overflow = 'auto';
    document.body.style.overflowX = 'hidden';
      setTimeout(function() {
        document.querySelector('.headerFixedBackground').style.transform = `translate(0px, 0px)`;
        headerFixedMenuLanguage.close();
        headerFixedMenuLanguage.classList.remove("closed");
        document.body.style.overflow = 'auto';
        document.body.style.overflowX = 'hidden';  
      }, 300);
    })
  ;

  headerFixedMenuLanguage.addEventListener("click", function outsideClickHandler(event) {
    var rect = headerFixedMenuLanguage.getBoundingClientRect();
    var xAchse = event.clientX;
    var yAchse = event.clientY;
  
    if (xAchse < rect.left || xAchse >= rect.right || yAchse < rect.top || yAchse >= rect.bottom) {
      headerFixedMenuLanguage.classList.add("closed");
      document.body.style.overflow = 'auto';
      document.body.style.overflowX = 'hidden';
      setTimeout(function() {
        document.querySelector('.headerFixedBackground').style.transform = `translate(0px, 0px)`;
        headerFixedMenuLanguage.close();
        headerFixedMenuLanguage.classList.remove("closed");
        document.body.style.overflow = 'auto';
        document.body.style.overflowX = 'hidden';  
      }, 300);
    }
    }
  );


  function dialogLanguageAnimation(className) {
    const element = document.querySelector(`.${className}`);

    let index = 0;
    let text;
    let animationDirection = "forward";
    let animationTextTimeout;
  
    element.addEventListener('mousemove', function() {
      if (chosenLanguage === "German") {
     dialogTexts = {
      languageEnglish: ["ENGLISCH", "englisch"],
      languageGerman: ["DEUTSCH", "deutsch"]
      };
   } else if (chosenLanguage === "English") {
     dialogTexts = {
      languageEnglish: ["ENGLISH", "english"],
      languageGerman: ["GERMAN", "german"]
      };
   }
      animationDirection = "forward";
      clearTimeout(animationTextTimeout);
      animateText(dialogTexts[className][0]);
    });

    element.addEventListener('mouseenter', function() {
      if (chosenLanguage === "German") {
     dialogTexts = {
      languageEnglish: ["ENGLISCH", "englisch"],
      languageGerman: ["DEUTSCH", "deutsch"]
      };
   } else if (chosenLanguage === "English") {
     dialogTexts = {
      languageEnglish: ["ENGLISH", "english"],
      languageGerman: ["GERMAN", "german"]
      };
   }
      animationDirection = "forward";
      clearTimeout(animationTextTimeout);
      animateText(dialogTexts[className][0]);
    });
  
    element.addEventListener('mouseout', function() {
      if (chosenLanguage === "German") {
     dialogTexts = {
      languageEnglish: ["ENGLISCH", "englisch"],
      languageGerman: ["DEUTSCH", "deutsch"]
      };
   } else if (chosenLanguage === "English") {
     dialogTexts = {
      languageEnglish: ["ENGLISH", "english"],
      languageGerman: ["GERMAN", "german"]
      };
   }
      animationDirection = "backward";
      clearTimeout(animationTextTimeout);
      animateText(dialogTexts[className][1]);
    });

    element.addEventListener('mouseleave', function() {
      if (chosenLanguage === "German") {
     dialogTexts = {
      languageEnglish: ["ENGLISCH", "englisch"],
      languageGerman: ["DEUTSCH", "deutsch"]
      };
   } else if (chosenLanguage === "English") {
     dialogTexts = {
      languageEnglish: ["ENGLISH", "english"],
      languageGerman: ["GERMAN", "german"]
      };
   }
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
  
  dialogLanguageAnimation("languageEnglish");
  dialogLanguageAnimation("languageGerman");






let chosenLanguage = localStorage.getItem("chosenLanguage");







if (window.location.href.includes('/homepage.html')) {
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
          if (chosenLanguage === undefined || chosenLanguage === null || chosenLanguage === "") {
            if(window.innerWidth < 1150) {
              dialogHeadline.textContent = "Please don't click me.";
            } else {
            dialogHeadline.textContent = "Please don't pull me.";
          }
          dontPullMeDialogCloseButton.textContent = "Got It!";
          } else if (chosenLanguage === "English") {
            if(window.innerWidth < 1150) {
              dialogHeadline.textContent = "Please don't click me.";
            } else {
            dialogHeadline.textContent = "Please don't pull me.";
          }
          dontPullMeDialogCloseButton.textContent = "Got It!";
          } else if (chosenLanguage === "German") {
            if(window.innerWidth < 1150) {
            dialogHeadline.textContent = "Bitte klick mich nicht.";
          } else {
            dialogHeadline.textContent = "Bitte zieh mich nicht.";
          }
          dontPullMeDialogCloseButton.textContent = "Verstanden!";
        }
          dontPullMeDialog.showModal();
      } else if (dontPullMeDialogCount === 2) {
        if (chosenLanguage === undefined || chosenLanguage === null || chosenLanguage === "") {
          dialogHeadline.textContent = "Seriously Stop.";
          dontPullMeDialogCloseButton.textContent = "Okay";
        } else if (chosenLanguage === "English") {
          dialogHeadline.textContent = "Seriously Stop.";
          dontPullMeDialogCloseButton.textContent = "Okay";
        } else if (chosenLanguage === "German") {
          dialogHeadline.textContent = "Im Ernst jetzt, hör auf.";
          dontPullMeDialogCloseButton.textContent = "Okay";
        }
          dontPullMeDialog.showModal();
      } else if (dontPullMeDialogCount === 3) {
        if (chosenLanguage === undefined || chosenLanguage === null || chosenLanguage === "") {
          dialogHeadline.textContent = "You asked for it";
          dontPullMeDialogCloseButton.textContent = "...";
      } else if (chosenLanguage === "English") {
        dialogHeadline.textContent = "You asked for it";
        dontPullMeDialogCloseButton.textContent = "...";
      } else if (chosenLanguage === "German") {
        dialogHeadline.textContent = "Du hast es provoziert.";
        dontPullMeDialogCloseButton.textContent = "...";
      }
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
        if (chosenLanguage === undefined || chosenLanguage === null || chosenLanguage === "") {
          dialogHeadline.textContent = `Now tell me "YOU ARE HIRED!"!`;
          dontPullMeDialogCloseButton.textContent = "calling...";
        } else if (chosenLanguage === "English") {
          dialogHeadline.textContent = `Now tell me "YOU ARE HIRED!"!`;
          dontPullMeDialogCloseButton.textContent = "calling...";
        } else if (chosenLanguage === "German") {
          dialogHeadline.textContent = `Jetzt musst du mich aber einstellen!`;
          dontPullMeDialogCloseButton.textContent = "rufe an...";
        }
        dontPullMeDialog.showModal();
        setTimeout(()=> {

          const callingAbdullah = document.createElement('a');

          callingAbdullah.href = "tel:01731905742";
          callingAbdullah.click();
          if (chosenLanguage === undefined || chosenLanguage === null || chosenLanguage === "") {
            dontPullMeDialogCloseButton.textContent = "close...";
          } else if (chosenLanguage === "English") {
          dontPullMeDialogCloseButton.textContent = "close...";
        } else if (chosenLanguage === "German") {
          dontPullMeDialogCloseButton.textContent = "schließen...";
        }
        },2000);
      }
      animationTimeout = setTimeout(() => {
        element.style.transition = '';
      }, 300);
    }
  });
}

addInteractiveAnimationOnLocatedInGermany('locatedInContainerBackground');
}





let container1Heading = localStorage.getItem("container1Heading");

if (chosenLanguage === "English"){
container1Heading = "I am an experienced Web Designer and Private Software Engineer with expertise in WordPress, HTML, CSS, JavaScript, React, NodeJS, ExpressJS, SQL and PHP. My diverse background includes entrepreneurship, marketing, logistics, and customer service, making me a valuable asset for your team. Explore my portfolio today!";
} else if (chosenLanguage === "German") {
  container1Heading = "Ich bin erfahrener Webdesigner und Softwareentwickler mit Expertise in WordPress, HTML, CSS, JavaScript, React, NodeJS, ExpressJS, SQL und PHP. Mein Hintergrund in Unternehmertum, Marketing, Logistik und Kundenservice bereichert Ihr Team. Entdecken Sie heute mein Portfolio!";
} else if (container1Heading === undefined || container1Heading === null || container1Heading === "") {
  container1Heading = "I am an experienced Web Designer and Private Software Engineer with expertise in WordPress, HTML, CSS, JavaScript, React, NodeJS, ExpressJS, SQL and PHP. My diverse background includes entrepreneurship, marketing, logistics, and customer service, making me a valuable asset for your team. Explore my portfolio today!";
}

let i = 0;





languageEnglish.addEventListener('click', function () {
    chosenLanguage = "English";

    container1Heading = "I am an experienced Web Designer and Private Software Engineer with expertise in WordPress, HTML, CSS, JavaScript, React, NodeJS, ExpressJS, SQL and PHP. My diverse background includes entrepreneurship, marketing, logistics, and customer service, making me a valuable asset for your team. Explore my portfolio today!";
    localStorage.setItem("container1Heading", container1Heading);

    if (window.innerWidth >= 1150) {
      document.querySelector('.languageEnglish').textContent = "english";
      document.querySelector('.languageGerman').textContent = "german";
      } else {
        document.querySelector('.languageGerman').textContent = "german";
      }

    if (window.innerWidth <= 1150) {
    document.querySelector('.footerButtonsArea').style.marginTop = '30%';
    document.querySelector('.footerHr').style.marginTop = '25%';

    if(window.innerWidth > 450 && window.innerWidth < 1150) {
      document.querySelector('.phoneNumber').style.marginTop = "25%";
    }
}
    document.querySelector('.footerHeader').innerHTML = '<img src="Pictures/abdullahSögütBackgroundImage1.jpg" class="abdullahfooterIcon">Your Future, my Expertise.';
    document.querySelector('.clockHeader').textContent = "Local Time";
    document.querySelector('.footerHome').innerHTML = '<a href="homepage.html">Home</a>';
    document.querySelector('.footerAboutMe').innerHTML = '<a href="aboutMe.html">About Me</a>';
    document.querySelector('.footerContact').innerHTML = '<a href="contact.html">Contact</a>';
    
    if (window.location.href.includes('/homepage.html')) {
    document.querySelector('.jobDegreeText').textContent = "Industrial Engineer";
    document.querySelector('.dontPullMeDialogCloseButton').textContent = "Industrial Engineer";
    document.querySelector('.dialogHome').textContent = "home";
    document.querySelector('.dialogAboutMe').textContent = "about me";
    document.querySelector('.dialogContact').textContent = "contact";
    document.querySelector('.dialogLanguageButton').textContent = "language";
    document.querySelector('#dialogHeadlineLanguage').textContent = "Select Your Language";


    document.querySelector('.headerHome').textContent = "Home";
    document.querySelector('.headerAboutMe').textContent = "About Me";
    document.querySelector('.headerContact').textContent = "Contact";
    document.querySelector('.headerLanguageButton').textContent = "Language";
    document.querySelector('.locatedInCountryText').textContent = "Located in Germany";
    document.querySelector('.aboutMeButtonHeader').textContent = "Versatile professional with expertise in web design, entrepreneurship, marketing, logistics, and customer service, ready to enhance your team's capabilities.";
    document.querySelector('.aboutMeButton').textContent = "About Me";
    document.querySelector('.hrHeader').textContent = "Projects";
    document.querySelector('.projectSlider').textContent = "Projects:";
    document.querySelector('.projectImageSlider1ButtonContainerBackgroundText').textContent = "Projects";


    i = 0;
    const container2Rect = document.querySelector('#container2').getBoundingClientRect();
    if(container2Rect.top < 100) {
      i = -1;
      addLetterHeadingContainer1()
    }
    document.querySelector('.projectOneDescription').textContent = "";

    document.querySelector('#projectImageSlider2ImagesAfterPseudoDiv').style.setProperty("--pseudo-Content", '"click to try me"');

    document.querySelector('#dialogHeadlineProjects').textContent = "Projects";



    projectListSelector("mp3");
    projectListSelector("typing");
    projectListSelector("toDo");
    projectListSelector("timer");
    projectListSelector("clock");
    projectListSelector("keyGen");




    const projectImageSlider1Header = document.querySelector('.projectImageSlider1Header');
    const projectImageSlider2ImagesProjectDescription = document.querySelector('.projectImageSlider2ImagesProjectDescription');

    const projectImageSlider1HeaderTextContent = projectImageSlider1Header.textContent;

    let projectText = getProjectHeader(projectImageSlider1HeaderTextContent);
    let getProjectTextContent = getProjectText(projectText);

    projectImageSlider2ImagesProjectDescription.textContent = getProjectTextContent;




    function getProjectHeader(className) {
      switch (className) {
        case "MP3 Player":
          return "mp3";
        case "Typing Speed App":
          return "typing";
        case "To Do App":
          return "toDo";
        case "Timer":
          return "timer";
        case "Clock":
          return "clock";
        case "Key Generator":
          return "keyGen";
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
  }




    else if (window.location.href.includes('/aboutMe.html')) {
    document.querySelector('#dialogHeadlineLanguage').textContent = "Select Your Language";
    document.querySelector('.headerHome').textContent = "Home";
    document.querySelector('.headerAboutMe').textContent = "About Me";
    document.querySelector('.headerContact').textContent = "Contact";
    document.querySelector('.dialogHome').textContent = "home";
    document.querySelector('.dialogAboutMe').textContent = "about me";
    document.querySelector('.dialogContact').textContent = "contact";
    document.querySelector('.dialogLanguageButton').textContent = "language";
    document.querySelector('.headerLanguageButton').textContent = "Language";
    document.querySelector('.container1ContainerHeader').innerHTML = "From Business to Code<br>My Journey in Software Development and Creative Web Design";
    document.querySelector('.aboutMePageIntroductoryHeader').textContent = "Introduction";
    document.querySelector('.aboutMePageIntroductoryText').textContent = "Hello! My name is Abdullah Sögüt. I am 27 years old and was born in Bremen, Germany.";
    document.querySelector('.aboutMePageIntroductoryHeader1').textContent = "Aspiration";
    document.querySelector('.aboutMePageIntroductoryText1').textContent = "I aspire to bring my creative potential into the digital world as a passionate software developer. With a Bachelor of Science in Production Engineering, I have built a strong foundation in analytical thinking and problem-solving skills.";
    document.querySelector('.aboutMePageIntroductoryHeader2').textContent = "Experience";
    document.querySelector('.aboutMePageIntroductoryText2').textContent = "My passion for software development was born during my time as a business manager at an e-commerce company, where I gained extensive experience in web and graphic design using WordPress Elementor. With pride, I have successfully created websites such as:";
    document.querySelector('.aboutMePageIntroductoryHeader3').textContent = "Projects";
    document.querySelector('.aboutMePageIntroductoryHeader4').textContent = "Evolution";
    document.querySelector('.aboutMePageIntroductoryText4').textContent = "When I reached the limits of WordPress Elementor, my curiosity for programming was ignited. With enthusiasm, I delved deep into the world of HTML, CSS, JavaScript, React, NodeJS, ExpressJS, SQL and PHP to implement additional functionalities and expand my technical skills.";
    document.querySelector('.aboutMePageIntroductoryHeader5').textContent = "Conclusion";
    document.querySelector('.aboutMePageIntroductoryText5').textContent = "Therefore laying the foundation to develop projects, many of which I share on my GitHub . Examples include this portfolio site, which was created using only HTML, CSS, and Vanilla JavaScript.";
    document.querySelector('.aboutMePageIntroductoryText6').innerHTML = 'Check Out My GitHub <img src="Pictures/Degrees/gitHubIcon.svg" class="gitHubIcon">';
    
    document.querySelector('.degreesHeader').textContent = "Degrees:";
    document.querySelector('.universityDuration').innerHTML = "INDUSTRIAL ENGINEERING – UNIVERSITY BREMEN<br>2015 – 2021"
    document.querySelector('.schoolTitle').textContent = "HIGH SCHOOL DIPLOMA";
    document.querySelector('.schoolDuration').innerHTML = "ALEXANDER VON HUMBOLDT HIGH SCHOOL BREMEN<br>2014 – 2015</p>";
  
    if(window.innerWidth > 450 && window.innerWidth < 1150) {
      document.querySelector('.workExperienceHeader').style.marginTop = "7vw";
  }
    document.querySelector('.workExperienceHeader').textContent = 'Work Experience:';

    document.querySelector('.work1Title').textContent = 'WEB DESIGN & Private Software Engineer';
    document.querySelector('.work1Description').textContent = 'Self-Employed | 10/2022 -';
    document.querySelector('.work1DescriptionEnumeration1').textContent = 'Building websites, shop pages using WordPress';
    document.querySelector('.work1DescriptionEnumeration2').textContent = 'Functionality enhancements using HTML, CSS, PHP, JavaScript';
    document.querySelector('.work1DescriptionEnumeration3').textContent = 'GitHub: Abman95';

    document.querySelector('.work2Title').textContent = 'PARTNER OF SOGEKING GBR';
    document.querySelector('.work2Description').textContent = 'Sogeking GbR Bremen | 07/2017 -';
    document.querySelector('.work2DescriptionEnumeration1').textContent = 'Import and trade of goods -> EBAY, Amazon & website';
    document.querySelector('.work2DescriptionEnumeration2').textContent = 'Patent and trademark applications';
    document.querySelector('.work2DescriptionEnumeration3').textContent = 'Web Designing';
    document.querySelector('.work2DescriptionEnumeration4').textContent = 'Marketing -> Keeping statistics, Online Marketing';
    document.querySelector('.work2DescriptionEnumeration5').textContent = 'Image editing';
    document.querySelector('.work2DescriptionEnumeration6').textContent = 'Logistics -> Organization & planning';
    document.querySelector('.work2DescriptionEnumeration7').textContent = 'Tax registration -> Accounting & bureaucracy';
    document.querySelector('.work2DescriptionEnumeration8').textContent = 'Customer service';

    document.querySelector('.work3Title').textContent = 'SALES REPRESENTATIVE FOR SOLAR SALES';
    document.querySelector('.work3Description').textContent = 'Energiekonzepte Mitteldeutschland GmbH | 05/2021 until 09/2022';
    document.querySelector('.work3DescriptionEnumeration1').textContent = 'Consultation, planning, organization, and economic calculations of photovoltaic systems';
    document.querySelector('.work3DescriptionEnumeration2').textContent = 'PV SOL Premium economic calculation';

    document.querySelector('.work4Title').textContent = 'FIELD WORKER FOR 2LOCATE';
    document.querySelector('.work4Description').textContent = '2locate GmbH | 11/2020 until 11/2021';
    document.querySelector('.work4DescriptionEnumeration1').textContent ='Lead acquisition'; 
    document.querySelector('.work4DescriptionEnumeration2').textContent = 'Door-to-Door sales';
    document.querySelector('.work4DescriptionEnumeration3').textContent = 'Planning, consultation, and organization of customer appointments and contract appointments';

    document.querySelector('.work5Title').textContent = 'ACCOUNTING & MARKETING & RETURNS FOR THE ONLINE PHARMACY EURAPON';
    document.querySelector('.work5Description').textContent = 'Eurapon Pharmahandel GmbH | 06/2018 until 05/2019';
    document.querySelector('.work5DescriptionEnumeration1').textContent = 'Processing of collection cases/dunning cases';
    document.querySelector('.work5DescriptionEnumeration2').textContent = 'Checking and processing account reconciliations';
    document.querySelector('.work5DescriptionEnumeration3').textContent = 'Processing returns & creating credit notes';
    document.querySelector('.work5DescriptionEnumeration4').textContent = 'Handling customer emails';
    document.querySelector('.work5DescriptionEnumeration5').textContent = 'Picking of goods';
    document.querySelector('.work5DescriptionEnumeration6').textContent = 'Product data maintenance in the marketing department';

    document.querySelector('.work6Title').textContent = 'CUSTOMER ADVISOR FOR DEUTSCHE TELEKOM';
    document.querySelector('.work6Description').textContent = 'Simon & Focken Bremen GmbH | 09/2017 until 03/2018';
    document.querySelector('.work6DescriptionEnumeration1').textContent = 'Processing inbound and outbound calls';
    document.querySelector('.work6DescriptionEnumeration2').textContent = 'Handling written correspondence and emails';
    document.querySelector('.work6DescriptionEnumeration3').textContent = 'Data entry and address qualification in the Invitel program';
    document.querySelector('.work6DescriptionEnumeration4').textContent = 'Telephone consulting and sales';

    if(window.innerWidth > 450 && window.innerWidth < 1150) {
      document.querySelector('#container7').style.height = "350vw";
    }
    }
    else if (window.location.href.includes('/contact.html')) {
      document.querySelector('#dialogHeadlineLanguage').textContent = "Select Your Language";
      document.querySelector('.headerHome').textContent = "Home";
      document.querySelector('.headerAboutMe').textContent = "About Me";
      document.querySelector('.headerContact').textContent = "Contact";
      document.querySelector('.dialogHome').textContent = "home";
      document.querySelector('.dialogAboutMe').textContent = "about me";
      document.querySelector('.dialogContact').textContent = "contact";
      document.querySelector('.dialogLanguageButton').textContent = "language";
      document.querySelector('.headerLanguageButton').textContent = "Language";

      if (window.innerWidth <= 450) {
        document.querySelector('.contactHeader').style.marginTop = "285vw";
      }
      document.querySelector('.contactHeader').innerHTML = 'Get in Touch for<br>further<br>information';

      document.querySelector('.contactPageNameField').innerHTML ='Name:<input type="text" id="name" name="name" placeholder="Please write your name" required>';

      document.querySelector('.contactPageEmailField').innerHTML = 'E-Mail:<input type="email" id="email" name="email" placeholder="Please write your E-Mail address" required>';
  
      document.querySelector('.contactPageMessageField').innerHTML = 'Message:<textarea id="message" name="message" rows="4" placeholder="Please write your message" required></textarea>';

      document.querySelector('.submitButton').textContent = "Send";

      document.querySelector('.contactInformationHeader1').textContent = "Contact Information:";
      
      document.querySelector('.contactInformationHeader2').textContent = "Qualification:";

      document.querySelector('.contactInformationListing2Number4').textContent = "Graphic Design";

      document.querySelector('.contactInformationListing3Number1').textContent = "Reading";
      document.querySelector('.contactInformationListing3Number2').textContent = "Fitness";
      document.querySelector('.contactInformationListing3Number3').textContent = "Further education in the field of";
      document.querySelector('.contactInformationListing3Number4').textContent = "General knowledge";


   }

    localStorage.setItem("chosenLanguage", chosenLanguage);
});





languageGerman.addEventListener('click', function () {
    chosenLanguage = "German";


    container1Heading = "Ich bin erfahrener Webdesigner und Softwareentwickler mit Expertise in WordPress, HTML, CSS, JavaScript, React, NodeJS, ExpressJS, SQL und PHP. Mein Hintergrund in Unternehmertum, Marketing, Logistik und Kundenservice bereichert Ihr Team. Entdecken Sie heute mein Portfolio!";
    localStorage.setItem("container1Heading", container1Heading);

    if (window.innerWidth >= 1150) {
      document.querySelector('.languageEnglish').textContent = "englisch";
      document.querySelector('.languageGerman').textContent = "deutsch";
      } else {
        document.querySelector('.languageEnglish').textContent = "englisch";
      }

    if (window.innerWidth <= 1150) {
    document.querySelector('.footerButtonsArea').style.marginTop = '40%';
    document.querySelector('.footerHr').style.marginTop = '15%';
}

if(window.innerWidth > 450 && window.innerWidth < 1150) {
  document.querySelector('.phoneNumber').style.marginTop = "10%";
}
    document.querySelector('.footerHeader').innerHTML = '<img src="Pictures/abdullahSögütBackgroundImage1.jpg" class="abdullahfooterIcon">Ihre Zukunft, meine Expertise.';
    document.querySelector('.clockHeader').textContent = "Lokale Zeit";
    document.querySelector('.footerHome').innerHTML = '<a href="homepage.html">Startseite</a>';
    document.querySelector('.footerAboutMe').innerHTML = '<a href="aboutMe.html">Über Mich</a>';
    document.querySelector('.footerContact').innerHTML = '<a href="contact.html">Kontakt</a>';


if (window.location.href.includes('/homepage.html')) {
    if (window.innerWidth <= 1150) {
    document.querySelector('.jobDegreeText').textContent = "Wirtschafts ingenieur";
    } else {
      document.querySelector('.jobDegreeText').textContent = "Wirtschaftsingenieur";
    }
    document.querySelector('.dontPullMeDialogCloseButton').textContent = "Wirtschaftsingenieur";
    document.querySelector('.dialogHome').textContent = "startseite";
    document.querySelector('.dialogAboutMe').textContent = "über mich";
    document.querySelector('.dialogContact').textContent = "kontakt";
    document.querySelector('.dialogLanguageButton').textContent = "sprache";
    document.querySelector('#dialogHeadlineLanguage').textContent = "Wähle deine Sprache";

    document.querySelector('.headerHome').textContent = "Startseite";
    document.querySelector('.headerAboutMe').textContent = "Über Mich";
    document.querySelector('.headerContact').textContent = "Kontakt";
    document.querySelector('.headerLanguageButton').textContent = "Sprache";
    document.querySelector('.locatedInCountryText').textContent = "Ansässig in Deutschland";
    document.querySelector('.aboutMeButtonHeader').textContent = "Vielseitige Expertise mit Fachkenntnissen in Webdesign, Unternehmertum, Marketing, Logistik und Kundenservice, bereit, die Fähigkeiten Ihres Teams zu erweitern.";
   

    i = 0;
    const container2Rect = document.querySelector('#container2').getBoundingClientRect();
    if(container2Rect.top < 100) {
      i = -1;
      addLetterHeadingContainer1()
    }
    document.querySelector('.projectOneDescription').textContent = "";

    document.querySelector('.aboutMeButton').textContent = "Über Mich";
    document.querySelector('.hrHeader').textContent = "Projekte";
    document.querySelector('.projectSlider').textContent = "Projekte:";
    document.querySelector('.projectImageSlider1ButtonContainerBackgroundText').textContent = "Projekte";

    document.querySelector('#projectImageSlider2ImagesAfterPseudoDiv').style.setProperty("--pseudo-Content", '"zum testen klicken"');

    document.querySelector('#dialogHeadlineProjects').textContent = "Projekte";


    projectListSelector("mp3");
    projectListSelector("typing");
    projectListSelector("toDo");
    projectListSelector("timer");
    projectListSelector("clock");
    projectListSelector("keyGen");




    const projectImageSlider1Header = document.querySelector('.projectImageSlider1Header');
    const projectImageSlider2ImagesProjectDescription = document.querySelector('.projectImageSlider2ImagesProjectDescription');

    const projectImageSlider1HeaderTextContent = projectImageSlider1Header.textContent;

    let projectText = getProjectHeader(projectImageSlider1HeaderTextContent);
    let getProjectTextContent = getProjectText(projectText);

    projectImageSlider2ImagesProjectDescription.textContent = getProjectTextContent;




    function getProjectHeader(className) {
      switch (className) {
        case "MP3 Player":
          return "mp3";
        case "Typing Speed App":
          return "typing";
        case "To Do App":
          return "toDo";
        case "Timer":
          return "timer";
        case "Clock":
          return "clock";
        case "Key Generator":
          return "keyGen";
        default:
          return "";  
      }
    }
  
  
    function getProjectText(className) {
      switch (className) {
        case "mp3":
              return "Mein größtes Projekt, an dem ich nach 3 1/2 Monaten intensiven Lernens in JavaScript, CSS und HTML gearbeitet habe, ist mein MP3-Player. Dieser MP3-Player ist eine leistungsstarke und benutzerfreundliche Anwendung. Sie ermöglicht das Abspielen von MP3-Dateien, Vor- und Zurückspulen, das Aktivieren der automatischen Wiedergabe und das Genießen des Zufallsspielmodus. Mit seiner Mediathek-Liste können Sie einfach zwischen Ihren Liedern in der Wiedergabeliste wechseln, sie hochladen und genießen.";
        case "typing":
              return "Meine Typing Speed App, entwickelt nach 2 1/2 Monaten des Lernens von JavaScript, CSS und HTML, ermöglicht es Ihnen, Ihre Schreibfähigkeiten zu testen und zu verbessern. Sie bietet genaue Geschwindigkeits- und Genauigkeitsmetriken, die Ihnen helfen, ein schnellerer und präziserer Tipper zu werden.";
        case "toDo":
              return "Meine ToDo-App ist ein einfaches und effizientes Aufgabenmanagement-Tool. Entwickelt nach 2 Monaten des Lernens von JavaScript, CSS und HTML, hilft es Ihnen, Ihre Aufgaben zu organisieren, Prioritäten zu setzen und produktiv zu bleiben.";
        case "timer":
              return "Meine Timer-App, erstellt nach 1 1/2 Monaten des intensiven Lernens von JavaScript, CSS und HTML, bietet präzise Zeitmessfunktionen. Verwenden Sie sie für verschiedene Zwecke, vom Kochen bis zum Training, mit Zuverlässigkeit und Genauigkeit.";
        case "clock":
              return "Meine Uhren-App ist ein einfaches Zeitmessungstool, das nach 1 Monat des Lernens von JavaScript, CSS und HTML entwickelt wurde. Sie zeigt die Zeit genau an und hält Sie auf einen Blick informiert.";
        case "keyGen":
              return "Mein KeyGenerator-Tool, entstanden nach 3 Monaten des Studiums von JavaScript, CSS und HTML, generiert sichere und zufällige Schlüssel für verschiedene Zwecke. Verbessern Sie Ihre Sicherheit mühelos mit diesem effizienten Dienstprogramm.";
          default:
              return "";  
      }
    }
  }



else if (window.location.href.includes('/aboutMe.html')) {
    document.querySelector('#dialogHeadlineLanguage').textContent = "Wähle deine Sprache";

    document.querySelector('.dialogHome').textContent = "startseite";
    document.querySelector('.dialogAboutMe').textContent = "über mich";
    document.querySelector('.dialogContact').textContent = "kontakt";
    document.querySelector('.dialogLanguageButton').textContent = "sprache";
    document.querySelector('.headerHome').textContent = "Startseite";
    document.querySelector('.headerAboutMe').textContent = "Über Mich";
    document.querySelector('.headerContact').textContent = "Kontakt";
    document.querySelector('.headerLanguageButton').textContent = "Sprache";
    if (window.innerWidth <= 1150) {
      document.querySelector('.container1ContainerHeader').innerHTML = "Von Business zu Code<br>Meine Reise in der Software entwicklung und im kreativen Webdesign";
        } else {
      document.querySelector('.container1ContainerHeader').innerHTML = "Von Business zu Code<br>Meine Reise in der Software entwicklung und im kreativen Webdesign";
        }
    document.querySelector('.aboutMePageIntroductoryHeader').textContent = "Einleitung";
    document.querySelector('.aboutMePageIntroductoryText').textContent = "Hallo! Mein Name ist Abdullah Sögüt. Ich bin 27 Jahre alt und bin in Bremen, Deutschland geboren.";
    document.querySelector('.aboutMePageIntroductoryHeader1').textContent = "Ambition";
    document.querySelector('.aboutMePageIntroductoryText1').textContent = "Ich strebe danach, mein kreatives Potenzial als leidenschaftlicher Softwareentwickler in die digitale Welt zu bringen. Mit einem Bachelor of Science in Wirtschaftsingenieurwesen habe ich eine solide Grundlage im analytischen Denken und in Problemlösungsfähigkeiten aufgebaut.";
    document.querySelector('.aboutMePageIntroductoryHeader2').textContent = "Erfahrung";
    document.querySelector('.aboutMePageIntroductoryText2').textContent = "Meine Leidenschaft für die Softwareentwicklung entstand während meiner Zeit als Geschäftsleiter in einem E-Commerce-Unternehmen, wo ich umfangreiche Erfahrungen im Web- und Grafikdesign mit WordPress Elementor sammelte. Mit Stolz habe ich erfolgreich Websites erstellt, wie zum Beispiel:";
    document.querySelector('.aboutMePageIntroductoryHeader3').textContent = "Projekte";
    document.querySelector('.aboutMePageIntroductoryHeader4').textContent = "Entwicklung";
    document.querySelector('.aboutMePageIntroductoryText4').textContent = "Als ich die Grenzen von WordPress Elementor erreichte, wurde meine Neugier auf das Programmieren entfacht. Mit Begeisterung tauchte ich tief in die Welt von HTML, CSS, JavaScript, React, NodeJS, ExpressJS, SQL und PHP ein, um zusätzliche Funktionalitäten zu implementieren und meine technischen Fähigkeiten zu erweitern.";
    document.querySelector('.aboutMePageIntroductoryHeader5').textContent = "Fazit";
    document.querySelector('.aboutMePageIntroductoryText5').textContent = "Demzufolge habe ich das Fundament für die Umsetzung von Projekten geschaffen, von denen zahlreiche auf meinem GitHub-Repository geteilt werden. Zu den exemplarischen Arbeiten zählt unter anderem diese Portfolio-Website, die vollständig mithilfe von HTML, CSS und Vanilla JavaScript entwickelt wurde.";
    document.querySelector('.aboutMePageIntroductoryText6').innerHTML = 'Besuche mein GitHub <img src="Pictures/Degrees/gitHubIcon.svg" class="gitHubIcon">';
    
    document.querySelector('.degreesHeader').textContent = "Abschlüsse:";
    document.querySelector('.universityDuration').innerHTML = "WIRTSCHAFTSINGENIEUR – UNIVERSITÄT BREMEN<br>2015 – 2021";
    document.querySelector('.schoolTitle').textContent = "ABITUR - ALLGEMEINE HOCHSCHULREIFE";
    document.querySelector('.schoolDuration').innerHTML = "ALEXANDER VON HUMBOLDT GYMNASIUM BREMEN<br>2014 – 2015</p>";

if(window.innerWidth > 450 && window.innerWidth < 1150) {
    document.querySelector('.workExperienceHeader').style.marginTop = "17.5vw";
}
    document.querySelector('.workExperienceHeader').textContent = 'Berufserfahrung:';

    document.querySelector('.work1Title').textContent = 'WEBDESIGN & Private Software Engineer';
    document.querySelector('.work1Description').textContent = 'Selbstständig | 10/2022 -';
    document.querySelector('.work1DescriptionEnumeration1').textContent = 'Aufbau von Internetpräsenz, Shop Seiten über Wordpress';
    document.querySelector('.work1DescriptionEnumeration2').textContent = 'Funktionsergänzungen über HTML, CSS, PHP, JavaScript';
    document.querySelector('.work1DescriptionEnumeration3').textContent = 'GitHub: Abman95';

    document.querySelector('.work2Title').textContent = 'GESELLSCHAFTER DER SOGEKING GBR';
    document.querySelector('.work2Description').textContent = 'Sogeking GbR Bremen | 07/2017 -';
    document.querySelector('.work2DescriptionEnumeration1').textContent = 'Import und Handel von Waren -> EBAY, Amazon & Webseite';
    document.querySelector('.work2DescriptionEnumeration2').textContent = 'Patentanmeldung & Markenanmeldung';
    document.querySelector('.work2DescriptionEnumeration3').textContent = 'Web Designing';
    document.querySelector('.work2DescriptionEnumeration4').textContent = 'Marketing -> Statistiken führen, Online Marketing';
    document.querySelector('.work2DescriptionEnumeration5').textContent = 'Bildbearbeitung';
    document.querySelector('.work2DescriptionEnumeration6').textContent = 'Logistik -> Organisierung & Planung';
    document.querySelector('.work2DescriptionEnumeration7').textContent = 'Steuererfassung -> Buchhaltung & Bürokratie';
    document.querySelector('.work2DescriptionEnumeration8').textContent = 'Kundenservice';

    document.querySelector('.work3Title').textContent = 'HANDELSVERTRETER FÜR SOLARVERTRIEB';
    document.querySelector('.work3Description').textContent = 'Energiekonzepte Mitteldeutschland GmbH | 05/2021 bis 09/2022';
    document.querySelector('.work3DescriptionEnumeration1').textContent = 'Beratung, Planung, Organisation und Wirtschaftlichkeitsrechnungen von Photovoltaikanlagen';
    document.querySelector('.work3DescriptionEnumeration2').textContent = 'PV SOL Premium Wirtschaftlichkeitsrechnung';

    document.querySelector('.work4Title').textContent = 'AUSSENDIENST ARBEITER DER 2LOCATE';
    document.querySelector('.work4Description').textContent = '2locate GmbH | 11/2020 bis 11/2021';
    document.querySelector('.work4DescriptionEnumeration1').textContent ='Leadakquise'; 
    document.querySelector('.work4DescriptionEnumeration2').textContent = 'Door2Door Vertrieb';
    document.querySelector('.work4DescriptionEnumeration3').textContent = 'Planung, Beratung und Organisation von Kundenterminen sowie Vertragsterminen';

    document.querySelector('.work5Title').textContent = 'BUCHHALTUNG & MARKETING & RETOUREN DER ONLINE APOTHEKE EURAPON';
    document.querySelector('.work5Description').textContent = 'Eurapon Pharmahandel GmbH | 06/2018 bis 05/2019';
    document.querySelector('.work5DescriptionEnumeration1').textContent = 'Bearbeitung von Inkassofällen/Mahnfällen';
    document.querySelector('.work5DescriptionEnumeration2').textContent = 'Kontoabstimmungen überprüfen und bearbeiten';
    document.querySelector('.work5DescriptionEnumeration3').textContent = 'Bearbeitung von Rückläufern & Erstellung von Gutschriften';
    document.querySelector('.work5DescriptionEnumeration4').textContent = 'Abarbeitung von Kundenmails';
    document.querySelector('.work5DescriptionEnumeration5').textContent = 'Kommissionierung von Waren';
    document.querySelector('.work5DescriptionEnumeration6').textContent = 'Produktdatenpflege im Marketingbereich';

    document.querySelector('.work6Title').textContent = 'KUNDENBERATER DER DEUTSCHEN TELEKOM';
    document.querySelector('.work6Description').textContent = 'Simon & Focken Bremen GmbH | 09/2017 bis 03/2018';
    document.querySelector('.work6DescriptionEnumeration1').textContent = 'Bearbeitung von In- und Outboundcalls';
    document.querySelector('.work6DescriptionEnumeration2').textContent = 'Bearbeitung von Schriftverkehr und E-Mails';
    document.querySelector('.work6DescriptionEnumeration3').textContent = 'Datenerfassung und Adressqualifizierung im Programm Invitel';
    document.querySelector('.work6DescriptionEnumeration4').textContent = 'Telefonberatung und Vertrieb';

    if(window.innerWidth > 450 && window.innerWidth < 1150) {
      document.querySelector('#container7').style.height = "365vw";
    }
  }

  else if (window.location.href.includes('/contact.html')) {
    document.querySelector('#dialogHeadlineLanguage').textContent = "Wähle deine Sprache";

    document.querySelector('.dialogHome').textContent = "startseite";
    document.querySelector('.dialogAboutMe').textContent = "über mich";
    document.querySelector('.dialogContact').textContent = "kontakt";
    document.querySelector('.dialogLanguageButton').textContent = "sprache";
    document.querySelector('.headerHome').textContent = "Startseite";
    document.querySelector('.headerAboutMe').textContent = "Über Mich";
    document.querySelector('.headerContact').textContent = "Kontakt";
    document.querySelector('.headerLanguageButton').textContent = "Sprache";

    if (window.innerWidth <= 450) {
      document.querySelector('.contactHeader').style.marginTop = "271vw";
    }

    document.querySelector('.contactHeader').innerHTML = 'Kontaktieren Sie<br> mich für weitere<br>Informationen';
    
    document.querySelector('.contactPageNameField').innerHTML ='Name:<input type="text" id="name" name="name" placeholder="Ihr Vor-/Nachname" required>';

    document.querySelector('.contactPageEmailField').innerHTML = 'E-Mail:<input type="email" id="email" name="email" placeholder="Ihre E-Mail-Adresse" required>';

    document.querySelector('.contactPageMessageField').innerHTML = 'Ihre Nachricht:<textarea id="message" name="message" rows="4" placeholder="Ihre Nachricht" required></textarea>';

    document.querySelector('.submitButton').textContent = "Senden";
  

    document.querySelector('.contactInformationHeader1').textContent = "Kontakt Information:";
  
    document.querySelector('.contactInformationHeader2').textContent = "Qualifikation:";

    document.querySelector('.contactInformationListing2Number4').textContent = "Grafikdesign";

    document.querySelector('.contactInformationListing3Number1').textContent = "Lesen";
    document.querySelector('.contactInformationListing3Number2').textContent = "Fitness";
    document.querySelector('.contactInformationListing3Number3').textContent = "Weiterbildung im Bereich";
    document.querySelector('.contactInformationListing3Number4').textContent = "Allgemeinwissen";


  }

    localStorage.setItem("chosenLanguage", chosenLanguage);
});












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




let projectPath = localStorage.getItem("projectPath");
if (window.location.href.includes('/homepage.html')) {
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
        if (chosenLanguage === "German") {
            return "Mein größtes Projekt, an dem ich nach 3 1/2 Monaten intensiven Lernens in JavaScript, CSS und HTML gearbeitet habe, ist mein MP3-Player. Dieser MP3-Player ist eine leistungsstarke und benutzerfreundliche Anwendung. Sie ermöglicht das Abspielen von MP3-Dateien, Vor- und Zurückspulen, das Aktivieren der automatischen Wiedergabe und das Genießen des Zufallsspielmodus. Mit seiner Mediathek-Liste können Sie einfach zwischen Ihren Liedern in der Wiedergabeliste wechseln, sie hochladen und genießen.";
        } else if (chosenLanguage === "English" || chosenLanguage === undefined || chosenLanguage === null || chosenLanguage === "") {
            return "My biggest project, which I worked on after 3 1/2 months of intensive learning in JavaScript, CSS, and HTML, is my MP3 player. This MP3 player is a powerful and user-friendly application. It allows you to play MP3 files, fast-forward and rewind, enable auto-play and enjoy shuffle playback. With its media library list, you can easily switch between your songs in the playlist, upload them, and enjoy.";
        }
      case "typing":
        if (chosenLanguage === "German") {
            return "Meine Typing Speed App, entwickelt nach 2 1/2 Monaten des Lernens von JavaScript, CSS und HTML, ermöglicht es Ihnen, Ihre Schreibfähigkeiten zu testen und zu verbessern. Sie bietet genaue Geschwindigkeits- und Genauigkeitsmetriken, die Ihnen helfen, ein schnellerer und präziserer Tipper zu werden.";
          } else if (chosenLanguage === "English" || chosenLanguage === undefined || chosenLanguage === null || chosenLanguage === "") {
            return "My Typing Speed App, developed after 2 1/2 months of learning JavaScript, CSS, and HTML, lets you test and improve your typing skills. It provides accurate speed and accuracy metrics, helping you become a faster and more precise typist.";
          }
      case "toDo":
        if (chosenLanguage === "German") {
            return "Meine ToDo-App ist ein einfaches und effizientes Aufgabenmanagement-Tool. Entwickelt nach 2 Monaten des Lernens von JavaScript, CSS und HTML, hilft es Ihnen, Ihre Aufgaben zu organisieren, Prioritäten zu setzen und produktiv zu bleiben.";
        } else if (chosenLanguage === "English" || chosenLanguage === undefined || chosenLanguage === null || chosenLanguage === "") {
            return "My ToDo App is a simple and efficient task manager. Designed after 2 months of learning JavaScript, CSS, and HTML, it helps you organize your tasks, set priorities, and stay productive with ease.";
          }        
      case "timer":
        if (chosenLanguage === "German") {
            return "Meine Timer-App, erstellt nach 1 1/2 Monaten des intensiven Lernens von JavaScript, CSS und HTML, bietet präzise Zeitmessfunktionen. Verwenden Sie sie für verschiedene Zwecke, vom Kochen bis zum Training, mit Zuverlässigkeit und Genauigkeit.";
        } else if (chosenLanguage === "English" || chosenLanguage === undefined || chosenLanguage === null || chosenLanguage === "") {
            return "My Timer App, created after 1 1/2 months of mastering JavaScript, CSS, and HTML, offers precise timing capabilities. Use it for various purposes, from cooking to workouts, with reliability and accuracy.";
          }
      case "clock":
        if (chosenLanguage === "German") {
            return "Meine Uhren-App ist ein einfaches Zeitmessungstool, das nach 1 Monat des Lernens von JavaScript, CSS und HTML entwickelt wurde. Sie zeigt die Zeit genau an und hält Sie auf einen Blick informiert.";
        } else if (chosenLanguage === "English" || chosenLanguage === undefined || chosenLanguage === null || chosenLanguage === "") {
            return "My Clock App is a straightforward timekeeping tool, crafted after 1 months of JavaScript, CSS, and HTML learning. It displays the time accurately, keeping you informed at a glance.";
          }
      case "keyGen":
        if (chosenLanguage === "German") {
            return "Mein KeyGenerator-Tool, entstanden nach 3 Monaten des Studiums von JavaScript, CSS und HTML, generiert sichere und zufällige Schlüssel für verschiedene Zwecke. Verbessern Sie Ihre Sicherheit mühelos mit diesem effizienten Dienstprogramm.";
        } else if (chosenLanguage === "English" || chosenLanguage === undefined || chosenLanguage === null || chosenLanguage === "") {
            return "My KeyGenerator Tool, born after 3 months of studying JavaScript, CSS, and HTML, generates secure and random keys for various purposes. Enhance your security with ease using this efficient utility.";
          }
        default:
            return "";  
    }
  }




  let translateXInVw;


  element.addEventListener('click', function() {
    new Promise(resolve => {
      projectPath = `${nameOfClass}Index.html`;
      localStorage.setItem("projectPath", projectPath);

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
      if (window.innerWidth <= 1150) {
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
}



  function dialogPageTextAnimation(className) {
    const element = document.querySelector(`.${className}`);


    let index = 0;
    let text;
    let animationDirection = "forward";
    let animationTextTimeout;
  
    element.addEventListener('mousemove', function() {    
      if (chosenLanguage === "German") {
       dialogTexts = {
        dialogHome: ["STARTSEITE", "startseite"],
        dialogAboutMe: ["ÜBER MICH", "über mich"],
        dialogContact: ["KONTAKT", "kontakt"],
        dialogLanguageButton: ["SPRACHE", "sprache"]
      };
    } else if (chosenLanguage === "English") {
       dialogTexts = {
        dialogHome: ["HOME", "home"],
        dialogAboutMe: ["ABOUT ME", "about me"],
        dialogContact: ["CONTACT", "contact"],
        dialogLanguageButton: ["LANGUAGE", "language"]
      };
    }
      animationDirection = "forward";
      clearTimeout(animationTextTimeout);
      animateText(dialogTexts[className][0]);
    });

    element.addEventListener('mouseenter', function() {    
      if (chosenLanguage === "German") {
       dialogTexts = {
        dialogHome: ["STARTSEITE", "startseite"],
        dialogAboutMe: ["ÜBER MICH", "über mich"],
        dialogContact: ["KONTAKT", "kontakt"],
        dialogLanguageButton: ["SPRACHE", "sprache"]
      };
    } else if (chosenLanguage === "English") {
       dialogTexts = {
        dialogHome: ["HOME", "home"],
        dialogAboutMe: ["ABOUT ME", "about me"],
        dialogContact: ["CONTACT", "contact"],
        dialogLanguageButton: ["LANGUAGE", "language"]
      };
    }
      animationDirection = "forward";
      clearTimeout(animationTextTimeout);
      animateText(dialogTexts[className][0]);
    });
  
    element.addEventListener('mouseout', function() {    
      if (chosenLanguage === "German") {
       dialogTexts = {
        dialogHome: ["STARTSEITE", "startseite"],
        dialogAboutMe: ["ÜBER MICH", "über mich"],
        dialogContact: ["KONTAKT", "kontakt"],
        dialogLanguageButton: ["SPRACHE", "sprache"]
      };
    } else if (chosenLanguage === "English") {
       dialogTexts = {
        dialogHome: ["HOME", "home"],
        dialogAboutMe: ["ABOUT ME", "about me"],
        dialogContact: ["CONTACT", "contact"],
        dialogLanguageButton: ["LANGUAGE", "language"]
      };
    }
      animationDirection = "backward";
      clearTimeout(animationTextTimeout);
      animateText(dialogTexts[className][1]);
    });

    element.addEventListener('mouseleave', function() {    
      if (chosenLanguage === "German") {
       dialogTexts = {
        dialogHome: ["STARTSEITE", "startseite"],
        dialogAboutMe: ["ÜBER MICH", "über mich"],
        dialogContact: ["KONTAKT", "kontakt"],
        dialogLanguageButton: ["SPRACHE", "sprache"]
      };
    } else if (chosenLanguage === "English") {
       dialogTexts = {
        dialogHome: ["HOME", "home"],
        dialogAboutMe: ["ABOUT ME", "about me"],
        dialogContact: ["CONTACT", "contact"],
        dialogLanguageButton: ["LANGUAGE", "language"]
      };
    }
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
  dialogPageTextAnimation("dialogLanguageButton");
  



if (chosenLanguage === "German") {

  if (window.innerWidth <= 1150) {
  document.querySelector('.footerButtonsArea').style.marginTop = '40%';
  document.querySelector('.footerHr').style.marginTop = '15%';
  }

  if(window.innerWidth > 450 && window.innerWidth < 1150) {
    document.querySelector('.phoneNumber').style.marginTop = "10%";
  }

  document.querySelector('.footerHeader').innerHTML = '<img src="Pictures/abdullahSögütBackgroundImage1.jpg" class="abdullahfooterIcon">Ihre Zukunft, meine Expertise.';
  document.querySelector('.clockHeader').textContent = "Lokale Zeit";
  document.querySelector('.footerHome').innerHTML = '<a href="homepage.html">Startseite</a>';
  document.querySelector('.footerAboutMe').innerHTML = '<a href="aboutMe.html">Über Mich</a>';
  document.querySelector('.footerContact').innerHTML = '<a href="contact.html">Kontakt</a>';
  
  if (window.location.href.includes('/homepage.html')) {
    if (window.innerWidth <= 1150) {
    document.querySelector('.jobDegreeText').textContent = "Wirtschafts ingenieur";
    } else {
      document.querySelector('.jobDegreeText').textContent = "Wirtschaftsingenieur";
    }
    document.querySelector('.dontPullMeDialogCloseButton').textContent = "Wirtschaftsingenieur";
    document.querySelector('.dialogHome').textContent = "startseite";
    document.querySelector('.dialogAboutMe').textContent = "über mich";
    document.querySelector('.dialogContact').textContent = "kontakt";
    document.querySelector('.dialogLanguageButton').textContent = "sprache";
    document.querySelector('#dialogHeadlineLanguage').textContent = "Wähle deine Sprache";
    document.querySelector('.languageEnglish').textContent = "englisch";
    document.querySelector('.languageGerman').textContent = "deutsch";
    document.querySelector('.headerHome').textContent = "Startseite";
    document.querySelector('.headerAboutMe').textContent = "Über Mich";
    document.querySelector('.headerContact').textContent = "Kontakt";
    document.querySelector('.headerLanguageButton').textContent = "Sprache";
    document.querySelector('.locatedInCountryText').textContent = "Ansässig in Deutschland";
    document.querySelector('.aboutMeButtonHeader').textContent = "Vielseitige Expertise mit Fachkenntnissen in Webdesign, Unternehmertum, Marketing, Logistik und Kundenservice, bereit, die Fähigkeiten Ihres Teams zu erweitern.";
    document.querySelector('.aboutMeButton').textContent = "Über Mich";
    document.querySelector('.hrHeader').textContent = "Projekte";
    document.querySelector('.projectSlider').textContent = "Projekte:";
    document.querySelector('.projectImageSlider1ButtonContainerBackgroundText').textContent = "Projekte";
    document.querySelector('.projectImageSlider2ImagesProjectDescription').textContent = "Mein größtes Projekt, an dem ich nach 3 1/2 Monaten intensiven Lernens in JavaScript, CSS und HTML gearbeitet habe, ist mein MP3-Player. Dieser MP3-Player ist eine leistungsstarke und benutzerfreundliche Anwendung. Sie ermöglicht das Abspielen von MP3-Dateien, Vor- und Zurückspulen, das Aktivieren der automatischen Wiedergabe und das Genießen des Zufallsspielmodus. Mit seiner Mediathek-Liste können Sie einfach zwischen Ihren Liedern in der Wiedergabeliste wechseln, sie hochladen und genießen.";
  
    document.querySelector('#projectImageSlider2ImagesAfterPseudoDiv').style.setProperty("--pseudo-Content", '"zum testen klicken"');

    document.querySelector('#dialogHeadlineProjects').textContent = "Projekte";
  }

  else if (window.location.href.includes('/aboutMe.html')) {
    document.querySelector('#dialogHeadlineLanguage').textContent = "Wähle deine Sprache";
    document.querySelector('.dialogHome').textContent = "startseite";
    document.querySelector('.dialogAboutMe').textContent = "über mich";
    document.querySelector('.dialogContact').textContent = "kontakt";
    document.querySelector('.dialogLanguageButton').textContent = "sprache";
    document.querySelector('.languageEnglish').textContent = "englisch";
    document.querySelector('.languageGerman').textContent = "deutsch";
    document.querySelector('.headerHome').textContent = "Startseite";
    document.querySelector('.headerAboutMe').textContent = "Über Mich";
    document.querySelector('.headerContact').textContent = "Kontakt";
    document.querySelector('.headerLanguageButton').textContent = "Sprache";
    if (window.innerWidth <= 1150) {
    document.querySelector('.container1ContainerHeader').innerHTML = "Von Business zu Code<br>Meine Reise in der Software entwicklung und im kreativen Webdesign";
      } else {
    document.querySelector('.container1ContainerHeader').innerHTML = "Von Business zu Code<br>Meine Reise in der Software entwicklung und im kreativen Webdesign";
      }
    document.querySelector('.aboutMePageIntroductoryHeader').textContent = "Einleitung";
    document.querySelector('.aboutMePageIntroductoryText').textContent = "Hallo! Mein Name ist Abdullah Sögüt. Ich bin 27 Jahre alt und bin in Bremen, Deutschland geboren.";
    document.querySelector('.aboutMePageIntroductoryHeader1').textContent = "Ambition";
    document.querySelector('.aboutMePageIntroductoryText1').textContent = "Ich strebe danach, mein kreatives Potenzial als leidenschaftlicher Softwareentwickler in die digitale Welt zu bringen. Mit einem Bachelor of Science in Wirtschaftsingenieurwesen habe ich eine solide Grundlage im analytischen Denken und in Problemlösungsfähigkeiten aufgebaut.";
    document.querySelector('.aboutMePageIntroductoryHeader2').textContent = "Erfahrung";
    document.querySelector('.aboutMePageIntroductoryText2').textContent = "Meine Leidenschaft für die Softwareentwicklung entstand während meiner Zeit als Geschäftsleiter in einem E-Commerce-Unternehmen, wo ich umfangreiche Erfahrungen im Web- und Grafikdesign mit WordPress Elementor sammelte. Mit Stolz habe ich erfolgreich Websites erstellt, wie zum Beispiel:";
    document.querySelector('.aboutMePageIntroductoryHeader3').textContent = "Projekte";
    document.querySelector('.aboutMePageIntroductoryHeader4').textContent = "Entwicklung";
    document.querySelector('.aboutMePageIntroductoryText4').textContent = "Als ich die Grenzen von WordPress Elementor erreichte, wurde meine Neugier auf das Programmieren entfacht. Mit Begeisterung tauchte ich tief in die Welt von HTML, CSS, JavaScript, React, NodeJS, ExpressJS, SQL und PHP, um zusätzliche Funktionalitäten zu implementieren und meine technischen Fähigkeiten zu erweitern.";
    document.querySelector('.aboutMePageIntroductoryHeader5').textContent = "Fazit";
    document.querySelector('.aboutMePageIntroductoryText5').textContent = "Demzufolge habe ich das Fundament für die Umsetzung von Projekten geschaffen, von denen zahlreiche auf meinem GitHub-Repository geteilt werden. Zu den exemplarischen Arbeiten zählt unter anderem diese Portfolio-Website, die vollständig mithilfe von HTML, CSS und Vanilla JavaScript entwickelt wurde.";
    document.querySelector('.aboutMePageIntroductoryText6').innerHTML = 'Besuche mein GitHub <img src="Pictures/Degrees/gitHubIcon.svg" class="gitHubIcon">';
    
    document.querySelector('.degreesHeader').textContent = "Abschlüsse:";
    document.querySelector('.universityDuration').innerHTML = "WIRTSCHAFTSINGENIEUR – UNIVERSITÄT BREMEN<br>2015 – 2021";
    document.querySelector('.schoolTitle').textContent = "ABITUR - ALLGEMEINE HOCHSCHULREIFE";
    document.querySelector('.schoolDuration').innerHTML = "ALEXANDER VON HUMBOLDT GYMNASIUM BREMEN<br>2014 – 2015</p>";
    
    if(window.innerWidth > 450 && window.innerWidth < 1150) {
      document.querySelector('.workExperienceHeader').style.marginTop = "17.5vw";
  }
    document.querySelector('.workExperienceHeader').textContent = 'Berufserfahrung:';

    document.querySelector('.work1Title').textContent = 'WEBDESIGN & Private Software Engineer';
    document.querySelector('.work1Description').textContent = 'Selbstständig | 10/2022 -';
    document.querySelector('.work1DescriptionEnumeration1').textContent = 'Aufbau von Internetpräsenz, Shop Seiten über Wordpress';
    document.querySelector('.work1DescriptionEnumeration2').textContent = 'Funktionsergänzungen über HTML, CSS, PHP, JavaScript';
    document.querySelector('.work1DescriptionEnumeration3').textContent = 'GitHub: Abman95';

    document.querySelector('.work2Title').textContent = 'GESELLSCHAFTER DER SOGEKING GBR';
    document.querySelector('.work2Description').textContent = 'Sogeking GbR Bremen | 07/2017 -';
    document.querySelector('.work2DescriptionEnumeration1').textContent = 'Import und Handel von Waren -> EBAY, Amazon & Webseite';
    document.querySelector('.work2DescriptionEnumeration2').textContent = 'Patentanmeldung & Markenanmeldung';
    document.querySelector('.work2DescriptionEnumeration3').textContent = 'Web Designing';
    document.querySelector('.work2DescriptionEnumeration4').textContent = 'Marketing -> Statistiken führen, Online Marketing';
    document.querySelector('.work2DescriptionEnumeration5').textContent = 'Bildbearbeitung';
    document.querySelector('.work2DescriptionEnumeration6').textContent = 'Logistik -> Organisierung & Planung';
    document.querySelector('.work2DescriptionEnumeration7').textContent = 'Steuererfassung -> Buchhaltung & Bürokratie';
    document.querySelector('.work2DescriptionEnumeration8').textContent = 'Kundenservice';

    document.querySelector('.work3Title').textContent = 'HANDELSVERTRETER FÜR SOLARVERTRIEB';
    document.querySelector('.work3Description').textContent = 'Energiekonzepte Mitteldeutschland GmbH | 05/2021 bis 09/2022';
    document.querySelector('.work3DescriptionEnumeration1').textContent = 'Beratung, Planung, Organisation und Wirtschaftlichkeitsrechnungen von Photovoltaikanlagen';
    document.querySelector('.work3DescriptionEnumeration2').textContent = 'PV SOL Premium Wirtschaftlichkeitsrechnung';

    document.querySelector('.work4Title').textContent = 'AUSSENDIENST ARBEITER DER 2LOCATE';
    document.querySelector('.work4Description').textContent = '2locate GmbH | 11/2020 bis 11/2021';
    document.querySelector('.work4DescriptionEnumeration1').textContent ='Leadakquise'; 
    document.querySelector('.work4DescriptionEnumeration2').textContent = 'Door2Door Vertrieb';
    document.querySelector('.work4DescriptionEnumeration3').textContent = 'Planung, Beratung und Organisation von Kundenterminen sowie Vertragsterminen';

    document.querySelector('.work5Title').textContent = 'BUCHHALTUNG & MARKETING & RETOUREN DER ONLINE APOTHEKE EURAPON';
    document.querySelector('.work5Description').textContent = 'Eurapon Pharmahandel GmbH | 06/2018 bis 05/2019';
    document.querySelector('.work5DescriptionEnumeration1').textContent = 'Bearbeitung von Inkassofällen/Mahnfällen';
    document.querySelector('.work5DescriptionEnumeration2').textContent = 'Kontoabstimmungen überprüfen und bearbeiten';
    document.querySelector('.work5DescriptionEnumeration3').textContent = 'Bearbeitung von Rückläufern & Erstellung von Gutschriften';
    document.querySelector('.work5DescriptionEnumeration4').textContent = 'Abarbeitung von Kundenmails';
    document.querySelector('.work5DescriptionEnumeration5').textContent = 'Kommissionierung von Waren';
    document.querySelector('.work5DescriptionEnumeration6').textContent = 'Produktdatenpflege im Marketingbereich';

    document.querySelector('.work6Title').textContent = 'KUNDENBERATER DER DEUTSCHEN TELEKOM';
    document.querySelector('.work6Description').textContent = 'Simon & Focken Bremen GmbH | 09/2017 bis 03/2018';
    document.querySelector('.work6DescriptionEnumeration1').textContent = 'Bearbeitung von In- und Outboundcalls';
    document.querySelector('.work6DescriptionEnumeration2').textContent = 'Bearbeitung von Schriftverkehr und E-Mails';
    document.querySelector('.work6DescriptionEnumeration3').textContent = 'Datenerfassung und Adressqualifizierung im Programm Invitel';
    document.querySelector('.work6DescriptionEnumeration4').textContent = 'Telefonberatung und Vertrieb';

    if(window.innerWidth > 450 && window.innerWidth < 1150) {
    document.querySelector('#container7').style.height = "365vw";
    }
  }
  else if (window.location.href.includes('/contact.html')) {
    document.querySelector('#dialogHeadlineLanguage').textContent = "Wähle deine Sprache";
    document.querySelector('.languageEnglish').textContent = "englisch";
    document.querySelector('.languageGerman').textContent = "deutsch";
    document.querySelector('.dialogHome').textContent = "startseite";
    document.querySelector('.dialogAboutMe').textContent = "über mich";
    document.querySelector('.dialogContact').textContent = "kontakt";
    document.querySelector('.dialogLanguageButton').textContent = "sprache";
    document.querySelector('.headerHome').textContent = "Startseite";
    document.querySelector('.headerAboutMe').textContent = "Über Mich";
    document.querySelector('.headerContact').textContent = "Kontakt";
    document.querySelector('.headerLanguageButton').textContent = "Sprache";

    if (window.innerWidth <= 450) {
      document.querySelector('.contactHeader').style.marginTop = "271vw";
    }
    document.querySelector('.contactHeader').innerHTML = 'Kontaktieren Sie<br> mich für weitere<br>Informationen';
    
    document.querySelector('.contactPageNameField').innerHTML ='Name:<input type="text" id="name" name="name" placeholder="Ihr Vor-/Nachname" required>';

    document.querySelector('.contactPageEmailField').innerHTML = 'E-Mail:<input type="email" id="email" name="email" placeholder="Ihre E-Mail-Adresse" required>';

    document.querySelector('.contactPageMessageField').innerHTML = 'Ihre Nachricht:<textarea id="message" name="message" rows="4" placeholder="Ihre Nachricht" required></textarea>';

    document.querySelector('.submitButton').textContent = "Senden";
    
    document.querySelector('.contactInformationHeader1').textContent = "Kontakt Information:";
  
    document.querySelector('.contactInformationHeader2').textContent = "Qualifikation:";

    document.querySelector('.contactInformationListing2Number4').textContent = "Grafikdesign";

    document.querySelector('.contactInformationListing3Number1').textContent = "Lesen";
    document.querySelector('.contactInformationListing3Number2').textContent = "Fitness";
    document.querySelector('.contactInformationListing3Number3').textContent = "Weiterbildung im Bereich";
    document.querySelector('.contactInformationListing3Number4').textContent = "Allgemeinwissen";

  }

} else if (chosenLanguage === "English") {
  if (window.innerWidth <= 1150) {
  document.querySelector('.footerButtonsArea').style.marginTop = '30%';
  document.querySelector('.footerHr').style.marginTop = '25%';
}

if(window.innerWidth > 450 && window.innerWidth < 1150) {
  document.querySelector('.phoneNumber').style.marginTop = "25%";
}

  document.querySelector('.footerHeader').innerHTML = '<img src="Pictures/abdullahSögütBackgroundImage1.jpg" class="abdullahfooterIcon">Your Future, my Expertise.';
  document.querySelector('.clockHeader').textContent = "Local Time";
  document.querySelector('.footerHome').innerHTML = '<a href="homepage.html">Home</a>';
  document.querySelector('.footerAboutMe').innerHTML = '<a href="aboutMe.html">About Me</a>';
  document.querySelector('.footerContact').innerHTML = '<a href="contact.html">Contact</a>';
  if (window.location.href.includes('/homepage.html')) {
    document.querySelector('.jobDegreeText').textContent = "Industrial Engineer";
    document.querySelector('.dontPullMeDialogCloseButton').textContent = "Industrial Engineer";
    document.querySelector('.dialogHome').textContent = "home";
    document.querySelector('.dialogAboutMe').textContent = "about me";
    document.querySelector('.dialogContact').textContent = "contact";
    document.querySelector('.dialogLanguageButton').textContent = "language";
    document.querySelector('#dialogHeadlineLanguage').textContent = "Select Your Language";
    document.querySelector('.languageEnglish').textContent = "English";
    document.querySelector('.languageGerman').textContent = "German";
    document.querySelector('.headerHome').textContent = "Home";
    document.querySelector('.headerAboutMe').textContent = "About Me";
    document.querySelector('.headerContact').textContent = "Contact";
    document.querySelector('.headerLanguageButton').textContent = "Language";
    document.querySelector('.locatedInCountryText').textContent = "Located in Germany";
    document.querySelector('.aboutMeButtonHeader').textContent = "Versatile professional with expertise in web design, entrepreneurship, marketing, logistics, and customer service, ready to enhance your team's capabilities.";
    document.querySelector('.aboutMeButton').textContent = "About Me";
    document.querySelector('.hrHeader').textContent = "Projects";
    document.querySelector('.projectSlider').textContent = "Projects:";
    document.querySelector('.projectImageSlider1ButtonContainerBackgroundText').textContent = "Projects";
    document.querySelector('.projectImageSlider2ImagesProjectDescription').textContent = "My biggest project, which I worked on after 3 1/2 months of intensive learning in JavaScript, CSS, and HTML, is my MP3 player. This MP3 player is a powerful and user-friendly application. It allows you to play MP3 files, fast-forward and rewind, enable auto-play, and enjoy shuffle playback. With its media library list, you can easily switch between your songs in the playlist, upload them, and enjoy";
    
    document.querySelector('#projectImageSlider2ImagesAfterPseudoDiv').style.setProperty("--pseudo-Content", '"click to try me"');

    document.querySelector('#dialogHeadlineProjects').textContent = "Projects";
  }



  else if (window.location.href.includes('/aboutMe.html')) {
    document.querySelector('#dialogHeadlineLanguage').textContent = "Select Your Language";
    document.querySelector('.dialogHome').textContent = "home";
    document.querySelector('.dialogAboutMe').textContent = "about me";
    document.querySelector('.dialogContact').textContent = "contact";
    document.querySelector('.dialogLanguageButton').textContent = "language";
    document.querySelector('.languageEnglish').textContent = "English";
    document.querySelector('.languageGerman').textContent = "German";
    document.querySelector('.headerHome').textContent = "Home";
    document.querySelector('.headerAboutMe').textContent = "About Me";
    document.querySelector('.headerContact').textContent = "Contact";
    document.querySelector('.headerLanguageButton').textContent = "Language";
    document.querySelector('.container1ContainerHeader').innerHTML = "From Business to Code<br>My Journey in Software Development and Creative Web Design";
    document.querySelector('.aboutMePageIntroductoryHeader').textContent = "Introduction";
    document.querySelector('.aboutMePageIntroductoryText').textContent = "Hello! My name is Abdullah Sögüt. I am 27 years old and was born in Bremen, Germany.";
    document.querySelector('.aboutMePageIntroductoryHeader1').textContent = "Aspiration";
    document.querySelector('.aboutMePageIntroductoryText1').textContent = "I aspire to bring my creative potential into the digital world as a passionate software developer. With a Bachelor of Science in Production Engineering, I have built a strong foundation in analytical thinking and problem-solving skills.";
    document.querySelector('.aboutMePageIntroductoryHeader2').textContent = "Experience";
    document.querySelector('.aboutMePageIntroductoryText2').textContent = "My passion for software development was born during my time as a business manager at an e-commerce company, where I gained extensive experience in web and graphic design using WordPress Elementor. With pride, I have successfully created websites such as:";
    document.querySelector('.aboutMePageIntroductoryHeader3').textContent = "Projects";
    document.querySelector('.aboutMePageIntroductoryHeader4').textContent = "Evolution";
    document.querySelector('.aboutMePageIntroductoryText4').textContent = "When I reached the limits of WordPress Elementor, my curiosity for programming was ignited. With enthusiasm, I delved deep into the world of HTML, CSS, JavaScript, React, NodeJS, ExpressJS, SQL and PHP to implement additional functionalities and expand my technical skills.";
    document.querySelector('.aboutMePageIntroductoryHeader5').textContent = "Conclusion";
    document.querySelector('.aboutMePageIntroductoryText5').textContent = "Therefore laying the foundation to develop projects, many of which I share on my GitHub . Examples include this portfolio site, which was created using only HTML, CSS, and Vanilla JavaScript.";
    document.querySelector('.aboutMePageIntroductoryText6').innerHTML = 'Check Out My GitHub <img src="Pictures/Degrees/gitHubIcon.svg" class="gitHubIcon">';
    
    document.querySelector('.degreesHeader').textContent = "Degrees:";
    document.querySelector('.universityDuration').innerHTML = "INDUSTRIAL ENGINEERING – UNIVERSITY BREMEN<br>2015 – 2021"
    document.querySelector('.schoolTitle').textContent = "HIGH SCHOOL DIPLOMA";
    document.querySelector('.schoolDuration').innerHTML = "ALEXANDER VON HUMBOLDT HIGH SCHOOL BREMEN<br>2014 – 2015</p>";

    if(window.innerWidth > 450 && window.innerWidth < 1150) {
      document.querySelector('.workExperienceHeader').style.marginTop = "7vw";
  }
    document.querySelector('.workExperienceHeader').textContent = 'Work Experience:';      

    document.querySelector('.work1Title').textContent = 'WEB DESIGN & Private Software Engineer';
    document.querySelector('.work1Description').textContent = 'Self-Employed | 10/2022 -';
    document.querySelector('.work1DescriptionEnumeration1').textContent = 'Building websites, shop pages using WordPress';
    document.querySelector('.work1DescriptionEnumeration2').textContent = 'Functionality enhancements using HTML, CSS, PHP, JavaScript';
    document.querySelector('.work1DescriptionEnumeration3').textContent = 'GitHub: Abman95';

    document.querySelector('.work2Title').textContent = 'PARTNER OF SOGEKING GBR';
    document.querySelector('.work2Description').textContent = 'Sogeking GbR Bremen | 07/2017 -';
    document.querySelector('.work2DescriptionEnumeration1').textContent = 'Import and trade of goods -> EBAY, Amazon & website';
    document.querySelector('.work2DescriptionEnumeration2').textContent = 'Patent and trademark applications';
    document.querySelector('.work2DescriptionEnumeration3').textContent = 'Web Designing';
    document.querySelector('.work2DescriptionEnumeration4').textContent = 'Marketing -> Keeping statistics, Online Marketing';
    document.querySelector('.work2DescriptionEnumeration5').textContent = 'Image editing';
    document.querySelector('.work2DescriptionEnumeration6').textContent = 'Logistics -> Organization & planning';
    document.querySelector('.work2DescriptionEnumeration7').textContent = 'Tax registration -> Accounting & bureaucracy';
    document.querySelector('.work2DescriptionEnumeration8').textContent = 'Customer service';

    document.querySelector('.work3Title').textContent = 'SALES REPRESENTATIVE FOR SOLAR SALES';
    document.querySelector('.work3Description').textContent = 'Energiekonzepte Mitteldeutschland GmbH | 05/2021 until 09/2022';
    document.querySelector('.work3DescriptionEnumeration1').textContent = 'Consultation, planning, organization, and economic calculations of photovoltaic systems';
    document.querySelector('.work3DescriptionEnumeration2').textContent = 'PV SOL Premium economic calculation';

    document.querySelector('.work4Title').textContent = 'FIELD WORKER FOR 2LOCATE';
    document.querySelector('.work4Description').textContent = '2locate GmbH | 11/2020 until 11/2021';
    document.querySelector('.work4DescriptionEnumeration1').textContent ='Lead acquisition'; 
    document.querySelector('.work4DescriptionEnumeration2').textContent = 'Door-to-Door sales';
    document.querySelector('.work4DescriptionEnumeration3').textContent = 'Planning, consultation, and organization of customer appointments and contract appointments';

    document.querySelector('.work5Title').textContent = 'ACCOUNTING & MARKETING & RETURNS FOR THE ONLINE PHARMACY EURAPON';
    document.querySelector('.work5Description').textContent = 'Eurapon Pharmahandel GmbH | 06/2018 until 05/2019';
    document.querySelector('.work5DescriptionEnumeration1').textContent = 'Processing of collection cases/dunning cases';
    document.querySelector('.work5DescriptionEnumeration2').textContent = 'Checking and processing account reconciliations';
    document.querySelector('.work5DescriptionEnumeration3').textContent = 'Processing returns & creating credit notes';
    document.querySelector('.work5DescriptionEnumeration4').textContent = 'Handling customer emails';
    document.querySelector('.work5DescriptionEnumeration5').textContent = 'Picking of goods';
    document.querySelector('.work5DescriptionEnumeration6').textContent = 'Product data maintenance in the marketing department';

    document.querySelector('.work6Title').textContent = 'CUSTOMER ADVISOR FOR DEUTSCHE TELEKOM';
    document.querySelector('.work6Description').textContent = 'Simon & Focken Bremen GmbH | 09/2017 until 03/2018';
    document.querySelector('.work6DescriptionEnumeration1').textContent = 'Processing inbound and outbound calls';
    document.querySelector('.work6DescriptionEnumeration2').textContent = 'Handling written correspondence and emails';
    document.querySelector('.work6DescriptionEnumeration3').textContent = 'Data entry and address qualification in the Invitel program';
    document.querySelector('.work6DescriptionEnumeration4').textContent = 'Telephone consulting and sales';

    if(window.innerWidth > 450 && window.innerWidth < 1150) {
    document.querySelector('#container7').style.height = "350vw";
    }
  }
  else if (window.location.href.includes('/contact.html')) {
    document.querySelector('#dialogHeadlineLanguage').textContent = "Select Your Language";
    document.querySelector('.languageEnglish').textContent = "English";
    document.querySelector('.languageGerman').textContent = "German";
    document.querySelector('.headerHome').textContent = "Home";
    document.querySelector('.headerAboutMe').textContent = "About Me";
    document.querySelector('.headerContact').textContent = "Contact";
    document.querySelector('.dialogHome').textContent = "home";
    document.querySelector('.dialogAboutMe').textContent = "about me";
    document.querySelector('.dialogContact').textContent = "contact";
    document.querySelector('.dialogLanguageButton').textContent = "language";
    document.querySelector('.headerLanguageButton').textContent = "Language";

    if (window.innerWidth <= 450) {
      document.querySelector('.contactHeader').style.marginTop = "285vw";
    }
    document.querySelector('.contactHeader').innerHTML = 'Get in Touch for<br>further<br>information';

    document.querySelector('.contactPageNameField').innerHTML ='Name:<input type="text" id="name" name="name" placeholder="Please write your name" required>';

    document.querySelector('.contactPageEmailField').innerHTML = 'E-Mail:<input type="email" id="email" name="email" placeholder="Please write your E-Mail address" required>';

    document.querySelector('.contactPageMessageField').innerHTML = 'Message:<textarea id="message" name="message" rows="4" placeholder="Please write your message" required></textarea>';

    document.querySelector('.submitButton').textContent = "Send";

    document.querySelector('.contactInformationHeader1').textContent = "Contact Information:";
    
    document.querySelector('.contactInformationHeader2').textContent = "Qualification:";

    document.querySelector('.contactInformationListing2Number4').textContent = "Graphic Design";

    document.querySelector('.contactInformationListing3Number1').textContent = "Reading";
    document.querySelector('.contactInformationListing3Number2').textContent = "Fitness";
    document.querySelector('.contactInformationListing3Number3').textContent = "Further education in the field of";
    document.querySelector('.contactInformationListing3Number4').textContent = "General knowledge";

 }
}



