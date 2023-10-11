let projectNameReturnPortfolioSite = localStorage.getItem("projectNameReturnPortfolioSite");

if (!projectNameReturnPortfolioSite) {
  projectNameReturnPortfolioSite = null;
}

const returnPortfolioSite = document.querySelector('.returnPortfolioSite');

returnPortfolioSite.addEventListener('click', () => {
  if (window.location.href.endsWith('/mp3Index.html')) {
    projectNameReturnPortfolioSite = "mp3";
  } else if (window.location.href.endsWith('/typingIndex.html')) {
    projectNameReturnPortfolioSite = "typing";
  } else if (window.location.href.endsWith('/toDoIndex.html')) {
    projectNameReturnPortfolioSite = "toDo";
  } else if (window.location.href.endsWith('/timerIndex.html')) {
    projectNameReturnPortfolioSite = "timer";
  } else if (window.location.href.endsWith('/clockIndex.html')) {
    projectNameReturnPortfolioSite = "clock";
  } else if (window.location.href.endsWith('/keyGenIndex.html')) {
    projectNameReturnPortfolioSite = "keyGen";
  }

  localStorage.setItem("projectNameReturnPortfolioSite", projectNameReturnPortfolioSite);

  const createLink = document.createElement('a');
  createLink.href = 'homepage.html#projectImageSlider1Header';
  createLink.click();
});







function projectClicker (projectNameReturnPortfolioSite) {
        const clickedProject = document.querySelector(`.${projectNameReturnPortfolioSite}`);
                if (clickedProject) {
            const nameOfClass = projectNameReturnPortfolioSite;
        
            const projectHeader = getProjectHeader(nameOfClass);
            const projectText = getProjectText(nameOfClass);
        
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




            const projectImageSlider2 = document.querySelector('.projectImageSlider2');
            const projectImageSlider1Header = document.querySelector('.projectImageSlider1Header');
            const projectImageSlider2ImagesProjectDescription = document.querySelector('.projectImageSlider2ImagesProjectDescription');
        
            const projectImageSlider2Images1 = document.querySelector('#projectImageSlider2Images1');
            const projectImageSlider2Images2 = document.querySelector('#projectImageSlider2Images2');
            const projectImageSlider2Images3 = document.querySelector('#projectImageSlider2Images3');
            const projectImageSlider2ImagesAfterPseudoDiv = document.querySelector('#projectImageSlider2ImagesAfterPseudoDiv');



           
            
          
                  computedStyle = window.getComputedStyle(projectImageSlider2);
                  transformValue = computedStyle.getPropertyValue('transform');      
                  const transformMatrix = new DOMMatrix(transformValue);
                  const translateX = transformMatrix.m41;
                  const translateY = transformMatrix.m42;
                  const viewportWidth = window.innerWidth;
                  translateXInVw = (translateX / viewportWidth) * 100;

                  projectImageSlider2Images1.style.opacity = `0`;
                  projectImageSlider2Images2.style.opacity = `0`;
                  projectImageSlider2.style.transform = 'translate(-50vw, 0%)';

                  projectImageSlider2Images1.src = `Pictures/Projects/${nameOfClass}/${nameOfClass}Picture.png`;
                  projectImageSlider1Header.textContent = `${projectHeader}`;
                  projectImageSlider2ImagesProjectDescription.textContent = `${projectText}`;
                  projectImageSlider2Images3.src = `Pictures/Projects/${nameOfClass}/${nameOfClass}Picture1.png`;
  
                  projectImageSlider2ImagesAfterPseudoDiv.style.opacity = `1`;
                  projectImageSlider2ImagesAfterPseudoDiv.style.transform = `scale(1)`;
        }
    }
          

                  document.addEventListener('DOMContentLoaded', () => {
                    if (window.location.hash === '#projectImageSlider1Header') {
                       projectClicker(projectNameReturnPortfolioSite);
                
                        const projectImageSlider2 = document.querySelector('.projectImageSlider2');
                        if (projectImageSlider2) {
                            projectImageSlider2.style.transform = 'translate(-50vw, 0%)';
                        }
                    }
                });



                document.addEventListener('DOMContentLoaded', () => {
                console.log(projectNameReturnPortfolioSite);
            });


