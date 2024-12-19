import {
    updateProjectDescription,
    addLetterHeadingContainer1,
    requireCurrentLanguage,
} from "./languageSwitcher.js";

let chosenLanguage;

export async function loadTranslationsDe() {
    const response = await fetch("../../locales/de.json");
    return await response.json();
}

export async function loadTranslationsEn() {
    const response = await fetch("../../locales/en.json");
    return await response.json();
}

export async function loadTranslations() {
    chosenLanguage = requireCurrentLanguage();

    let translations = {};
    if (chosenLanguage === "English") {
        translations = await loadTranslationsEn();
    } else if (chosenLanguage === "German") {
        translations = await loadTranslationsDe();
    }

    const dialogTexts = {
        German: {
            dialogHome: [
                `${translations.navigation.home.uppercase}`,
                `${translations.navigation.home.lowercase}`,
            ],
            dialogAboutMe: [
                `${translations.navigation.aboutMe.uppercase}`,
                `${translations.navigation.aboutMe.lowercase}`,
            ],
            dialogContact: [
                `${translations.navigation.contact.uppercase}`,
                `${translations.navigation.contact.lowercase}`,
            ],
            dialogLanguageButton: [
                `${translations.navigation.language.uppercase}`,
                `${translations.navigation.language.lowercase}`,
            ],
            languageEnglish: [
                `${translations.languageSelection.english.uppercase}`,
                `${translations.languageSelection.english.lowercase}`,
            ],
            languageGerman: [
                `${translations.languageSelection.german.uppercase}`,
                `${translations.languageSelection.german.lowercase}`,
            ],
        },
        English: {
            dialogHome: [
                `${translations.navigation.home.standard}`,
                `${translations.navigation.home.lowercase}`,
            ],
            dialogAboutMe: [
                `${translations.navigation.aboutMe.standard}`,
                `${translations.navigation.aboutMe.lowercase}`,
            ],
            dialogContact: [
                `${translations.navigation.contact.standard}`,
                `${translations.navigation.contact.lowercase}`,
            ],
            dialogLanguageButton: [
                `${translations.navigation.language.standard}`,
                `${translations.navigation.language.lowercase}`,
            ],
            languageEnglish: [
                `${translations.languageSelection.english.standard}`,
                `${translations.languageSelection.english.lowercase}`,
            ],
            languageGerman: [
                `${translations.languageSelection.german.standard}`,
                `${translations.languageSelection.german.lowercase}`,
            ],
        },
    };

    const personalIntroduction = {
        English: `${translations.general.extendedDescription}`,
        German: `${translations.general.extendedDescription}`,
    };

    const PROJECT_DESCRIPTIONS_EN = {
        mp3: `${translations.projects.mp3Player.description}`,
        typing: `${translations.projects.typingSpeed.description}`,
        toDo: `${translations.projects.toDo.description}`,
        timer: `${translations.projects.timer.description}`,
        clock: `${translations.projects.clock.description}`,
        keyGen: `${translations.projects.keyGenerator.description}`,
        eyesightTest: `${translations.projects.eyesightTest.description}`
    };

    const PROJECT_DESCRIPTIONS_DE = {
        mp3: `${translations.projects.mp3Player.description}`,
        typing: `${translations.projects.typingSpeed.description}`,
        toDo: `${translations.projects.toDo.description}`,
        timer: `${translations.projects.timer.description}`,
        clock: `${translations.projects.clock.description}`,
        keyGen: `${translations.projects.keyGenerator.description}`,
        eyesightTest: `${translations.projects.eyesightTest.description}`
    };

    const easterEggTranslations = {
        undefined: {
            0: {
                headline: `${translations.easterEgg.dontClick}`,
                closeButton: `${translations.easterEgg.gotIt}`,
            },
            1: {
                headline: `${translations.easterEgg.dontPull}`,
                closeButton: `${translations.easterEgg.gotIt}`,
            },
            2: {
                headline: `${translations.easterEgg.seriouslyStop}`,
                closeButton: `${translations.easterEgg.okay}`,
            },
            3: {
                headline: `${translations.easterEgg.youAskedForIt}`,
                closeButton: `${translations.easterEgg.ellipsis}`,
            },
            4: {
                headline: `${translations.easterEgg.hireMe}`,
                closeButton: `${translations.easterEgg.calling}`,
            },
            5: {
                headline: `${translations.easterEgg.hireMe}`,
                closeButton: `${translations.easterEgg.close}`,
            },
        },
        English: {
            0: {
                headline: `${translations.easterEgg.dontClick}`,
                closeButton: `${translations.easterEgg.gotIt}`,
            },
            1: {
                headline: `${translations.easterEgg.dontPull}`,
                closeButton: `${translations.easterEgg.gotIt}`,
            },
            2: {
                headline: `${translations.easterEgg.seriouslyStop}`,
                closeButton: `${translations.easterEgg.okay}`,
            },
            3: {
                headline: `${translations.easterEgg.youAskedForIt}`,
                closeButton: `${translations.easterEgg.ellipsis}`,
            },
            4: {
                headline: `${translations.easterEgg.hireMe}`,
                closeButton: `${translations.easterEgg.calling}`,
            },
            5: {
                headline: `${translations.easterEgg.hireMe}`,
                closeButton: `${translations.easterEgg.close}`,
            },
        },
        German: {
            0: {
                headline: `${translations.easterEgg.dontClick}`,
                closeButton: `${translations.easterEgg.gotIt}`,
            },
            1: {
                headline: `${translations.easterEgg.dontPull}`,
                closeButton: `${translations.easterEgg.gotIt}`,
            },
            2: {
                headline: `${translations.easterEgg.seriouslyStop}`,
                closeButton: `${translations.easterEgg.okay}`,
            },
            3: {
                headline: `${translations.easterEgg.youAskedForIt}`,
                closeButton: `${translations.easterEgg.ellipsis}`,
            },
            4: {
                headline: `${translations.easterEgg.hireMe}`,
                closeButton: `${translations.easterEgg.calling}`,
            },
            5: {
                headline: `${translations.easterEgg.hireMe}`,
                closeButton: `${translations.easterEgg.close}`,
            },
        },
    };

    return {
        dialogTexts,
        personalIntroduction,
        PROJECT_DESCRIPTIONS_EN,
        PROJECT_DESCRIPTIONS_DE,
        easterEggTranslations,
    };
}

export async function updateEnglishContent() {
    const translations = await loadTranslationsEn();

    document.querySelector(".clockHeader").textContent =
        `${translations.general.localTime}`;
    document.querySelector(".headerHome").textContent =
        `${translations.navigation.home.standard}`;
    document.querySelector(".headerAboutMe").textContent =
        `${translations.navigation.aboutMe.standard}`;
    document.querySelector(".headerContact").textContent =
        `${translations.navigation.contact.standard}`;
    document.querySelector(".headerLanguageButton").textContent =
        `${translations.navigation.language.standard}`;
    document.querySelector("#dialogHeadlineLanguage").textContent =
        `${translations.languageSelection.title}`;

    chosenLanguage = requireCurrentLanguage();

    if (window.location.href.includes("/homepage.html")) {
        footerUpdater(undefined, 1, translations);
        updateEnglishHomepage(translations);
    } else if (window.location.href.includes("/aboutMe.html")) {
        footerUpdater(undefined, 2, translations);
        updateEnglishAboutMe(translations);
    } else if (window.location.href.includes("/contact.html")) {
        footerUpdater(undefined, 3, translations);
        updateEnglishContact(translations);
    }
}

export async function updateGermanContent() {
    const translations = await loadTranslationsDe();

    document.querySelector(".clockHeader").textContent =
        `${translations.general.localTime}`;
    document.querySelector(".headerHome").textContent =
        `${translations.navigation.home.standard}`;
    document.querySelector(".headerAboutMe").textContent =
        `${translations.navigation.aboutMe.standard}`;
    document.querySelector(".headerContact").textContent =
        `${translations.navigation.contact.standard}`;
    document.querySelector(".headerLanguageButton").textContent =
        `${translations.navigation.language.standard}`;
    document.querySelector("#dialogHeadlineLanguage").textContent =
        `${translations.languageSelection.title}`;

    chosenLanguage = requireCurrentLanguage();

    if (window.location.href.includes("/homepage.html")) {
        footerUpdater(true, 1, translations);
        updateGermanHomepage(translations);
    } else if (window.location.href.includes("/aboutMe.html")) {
        footerUpdater(true, 2, translations);
        updateGermanAboutMe(translations);
    } else if (window.location.href.includes("/contact.html")) {
        footerUpdater(true, 3, translations);
        updateGermanContact(translations);
    }
}

function footerUpdater(isGerman = false, currentPageValue, translations) {
    const lang = isGerman ? "de" : "en";

    const texts = {
        de: {
            header: `${translations.footer.slogan}`,
            home: `${translations.navigation.home.standard}`,
            about: `${translations.navigation.aboutMe.standard}`,
            contact: `${translations.navigation.contact.standard}`,
        },
        en: {
            header: `${translations.footer.slogan}`,
            home: `${translations.navigation.home.standard}`,
            about: `${translations.navigation.aboutMe.standard}`,
            contact: `${translations.navigation.contact.standard}`,
        },
    };

    const paths = {
        1: {
            // Homepage
            home: "homepage.html",
            about: "pages/aboutMe/aboutMe.html",
            contact: "pages/contact/contact.html",
        },
        2: {
            // About Me page
            home: "../../homepage.html",
            about: "aboutMe.html",
            contact: "../contact/contact.html",
        },
        3: {
            // Contact page
            home: "../../homepage.html",
            about: "../aboutMe/aboutMe.html",
            contact: "contact.html",
        },
    };

    const currentPaths = paths[currentPageValue];
    const imgPath = currentPageValue === 1 ? "assets/" : "../../assets/";

    document.querySelector(".footerHeader").innerHTML =
        `<img src="${imgPath}images/logos/abdullahSögütImages/abdullahSögütBackgroundImage1.jpg" class="abdullahfooterIcon">${texts[lang]["header"]}`;
    document.querySelector(".footerHome").innerHTML =
        `<a href="${currentPaths.home}">${texts[lang]["home"]}</a>`;
    document.querySelector(".footerAboutMe").innerHTML =
        `<a href="${currentPaths.about}">${texts[lang]["about"]}</a>`;
    document.querySelector(".footerContact").innerHTML =
        `<a href="${currentPaths.contact}">${texts[lang]["contact"]}</a>`;
}

async function updateEnglishHomepage(translations) {
    const translation = await loadTranslations();
    document.querySelector(".jobDegreeText").textContent =
        `${translations.general.professionalTitle}`;
    document.querySelector(".dontPullMeDialogCloseButton").textContent =
        `${translations.general.professionalTitle}`;
    document.querySelector(".locatedInCountryText").textContent =
        `${translations.general.location}`;
    document.querySelector(".aboutMeButtonHeader").textContent =
        `${translations.general.shortDescription}`;
    document.querySelector(".aboutMeButton").textContent =
        `${translations.navigation.aboutMe.standard}`;
    document.querySelector(".hrHeader").textContent =
        `${translations.general.projects}`;
    document.querySelector(".projectSlider").textContent =
        `${translations.aboutMe.sections.projects.title}`;
    document.querySelector(
        ".projectImageSlider1ButtonContainerBackgroundText",
    ).textContent = `${translations.general.projects}`;
    document
        .querySelector("#projectImageSlider2ImagesAfterPseudoDiv")
        .style.setProperty(
            "--pseudo-Content",
            `"${translations.general.clickToTry}"`,
        );
    document.querySelector("#dialogHeadlineProjects").textContent =
        `${translations.general.projects}`;
    addLetterHeadingContainer1(
        translation.personalIntroduction[chosenLanguage],
        true,
        false,
    );
    updateProjectDescription(translation.PROJECT_DESCRIPTIONS_EN);
}

async function updateGermanHomepage(translations) {
    const translation = await loadTranslations();
    document.querySelector(".jobDegreeText").textContent =
        `${translations.general.professionalTitle.professionalTitle}`;
    document.querySelector(".dontPullMeDialogCloseButton").textContent =
        `${translations.general.professionalTitle.professionalTitle}`;
    document.querySelector(".locatedInCountryText").textContent =
        `${translations.general.location}`;
    document.querySelector(".aboutMeButtonHeader").textContent =
        `${translations.general.shortDescription}`;
    document.querySelector(".aboutMeButton").textContent =
        `${translations.navigation.aboutMe.standard}`;
    document.querySelector(".hrHeader").textContent =
        `${translations.general.projects}`;
    document.querySelector(".projectSlider").textContent =
        `${translations.general.projects}:`;
    document.querySelector(
        ".projectImageSlider1ButtonContainerBackgroundText",
    ).textContent = `${translations.general.projects}`;
    document
        .querySelector("#projectImageSlider2ImagesAfterPseudoDiv")
        .style.setProperty(
            "--pseudo-Content",
            `"${translations.general.clickToTry}"`,
        );
    document.querySelector("#dialogHeadlineProjects").textContent =
        `${translations.general.projects}`;
    addLetterHeadingContainer1(
        translation.personalIntroduction[chosenLanguage],
        true,
        false,
    );
    updateProjectDescription(translation.PROJECT_DESCRIPTIONS_DE);
}

function updateEnglishAboutMe(translations) {
    document.querySelector(".container1ContainerHeader").innerHTML =
        `${translations.aboutMe.pageTitle}`;
    document.querySelector(".aboutMePageIntroductoryHeader").textContent =
        `${translations.aboutMe.sections.introduction.title}`;
    document.querySelector(".aboutMePageIntroductoryText").textContent =
        `${translations.aboutMe.sections.introduction.content}`;
    document.querySelector(".aboutMePageIntroductoryHeader1").textContent =
        `${translations.aboutMe.sections.aspiration.title}`;
    document.querySelector(".aboutMePageIntroductoryText1").textContent =
        `${translations.aboutMe.sections.aspiration.content}`;
    document.querySelector(".aboutMePageIntroductoryHeader2").textContent =
        `${translations.aboutMe.sections.experience.title}`;
    document.querySelector(".aboutMePageIntroductoryText2").textContent =
        `${translations.aboutMe.sections.experience.content}`;
    document.querySelector(".aboutMePageIntroductoryHeader3").textContent =
        `${translations.general.projects}`;
    document.querySelector(".aboutMePageIntroductoryHeader4").textContent =
        `${translations.aboutMe.sections.evolution.title}`;
    document.querySelector(".aboutMePageIntroductoryText4").textContent =
        `${translations.aboutMe.sections.evolution.content}`;
    document.querySelector(".aboutMePageIntroductoryHeader5").textContent =
        `${translations.aboutMe.sections.conclusion.title}`;
    document.querySelector(".aboutMePageIntroductoryText5").textContent =
        `${translations.aboutMe.sections.conclusion.content}`;
    document.querySelector(".aboutMePageIntroductoryText6").innerHTML =
        `${translations.aboutMe.sections.github} <img src="assets/images/degrees/gitHubIcon.svg" class="gitHubIcon">`;
    document.querySelector(".degreesHeader").textContent =
        `${translations.aboutMe.education.title}`;
    document.querySelector(".universityDuration").innerHTML =
        `${translations.aboutMe.education.degree1.diplomaDescription}`;
    document.querySelector(".schoolTitle").textContent =
        `${translations.aboutMe.education.degree2.diplomaTitle}`;
    document.querySelector(".schoolDuration").innerHTML =
        `${translations.aboutMe.education.degree2.diplomaDescription}`;

    document.querySelector(".workExperienceHeader").textContent =
        `${translations.aboutMe.workExperience.title}`;
    document.querySelector(".work1Title").textContent =
        `${translations.aboutMe.workExperience.jobs[0].title}`;
    document.querySelector(".work1Description").textContent =
        `${translations.aboutMe.workExperience.jobs[0].company}`;
    document.querySelector(".work1DescriptionEnumeration1").textContent =
        `${translations.aboutMe.workExperience.jobs[0].responsibilities[0]}`;
    document.querySelector(".work1DescriptionEnumeration2").textContent =
        `${translations.aboutMe.workExperience.jobs[0].responsibilities[1]}`;
    document.querySelector(".work1DescriptionEnumeration3").textContent =
        `${translations.aboutMe.workExperience.jobs[0].responsibilities[2]}`;
    document.querySelector(".work1DescriptionEnumeration4").textContent =
        `${translations.aboutMe.workExperience.jobs[0].responsibilities[3]}`;

    document.querySelector(".work2Title").textContent =
        `${translations.aboutMe.workExperience.jobs[1].title}`;
    document.querySelector(".work2Description").textContent =
        `${translations.aboutMe.workExperience.jobs[1].company}`;
    document.querySelector(".work2DescriptionEnumeration1").textContent =
        `${translations.aboutMe.workExperience.jobs[1].responsibilities[0]}`;
    document.querySelector(".work2DescriptionEnumeration2").textContent =
        `${translations.aboutMe.workExperience.jobs[1].responsibilities[1]}`;


    document.querySelector(".work3Title").textContent =
        `${translations.aboutMe.workExperience.jobs[2].title}`;
    document.querySelector(".work3Description").textContent =
        `${translations.aboutMe.workExperience.jobs[2].company}`;
    document.querySelector(".work3DescriptionEnumeration1").textContent =
        `${translations.aboutMe.workExperience.jobs[2].responsibilities[0]}`;


    document.querySelector(".work4Title").textContent =
        `${translations.aboutMe.workExperience.jobs[3].title}`;
    document.querySelector(".work4Description").textContent =
        `${translations.aboutMe.workExperience.jobs[3].company}`;
    document.querySelector(".work4DescriptionEnumeration1").textContent =
        `${translations.aboutMe.workExperience.jobs[3].responsibilities[0]}`;
    document.querySelector(".work4DescriptionEnumeration2").textContent =
        `${translations.aboutMe.workExperience.jobs[3].responsibilities[1]}`;
    document.querySelector(".work4DescriptionEnumeration3").textContent =
        `${translations.aboutMe.workExperience.jobs[3].responsibilities[2]}`;
    document.querySelector(".work4DescriptionEnumeration4").textContent =
        `${translations.aboutMe.workExperience.jobs[3].responsibilities[3]}`;
    document.querySelector(".work4DescriptionEnumeration5").textContent =
        `${translations.aboutMe.workExperience.jobs[3].responsibilities[4]}`;
    document.querySelector(".work4DescriptionEnumeration6").textContent =
        `${translations.aboutMe.workExperience.jobs[3].responsibilities[5]}`;
    document.querySelector(".work4DescriptionEnumeration7").textContent =
        `${translations.aboutMe.workExperience.jobs[3].responsibilities[6]}`;
    document.querySelector(".work4DescriptionEnumeration8").textContent =
        `${translations.aboutMe.workExperience.jobs[3].responsibilities[7]}`;   

    document.querySelector(".work5Title").textContent =
        `${translations.aboutMe.workExperience.jobs[4].title}`;
    document.querySelector(".work5Description").textContent =
        `${translations.aboutMe.workExperience.jobs[4].company}`;
    document.querySelector(".work5DescriptionEnumeration1").textContent =
        `${translations.aboutMe.workExperience.jobs[4].responsibilities[0]}`;
        

    document.querySelector(".work6Title").textContent =
        `${translations.aboutMe.workExperience.jobs[5].title}`;
    document.querySelector(".work6Description").textContent =
        `${translations.aboutMe.workExperience.jobs[5].company}`;
    document.querySelector(".work6DescriptionEnumeration1").textContent =
        `${translations.aboutMe.workExperience.jobs[5].responsibilities[0]}`;
    document.querySelector(".work6DescriptionEnumeration2").textContent =
        `${translations.aboutMe.workExperience.jobs[5].responsibilities[1]}`;
}

function updateGermanAboutMe(translations) {
    document.querySelector(".headerHome").textContent =
        `${translations.navigation.home.standard}`;
    document.querySelector(".headerAboutMe").textContent =
        `${translations.navigation.aboutMe.standard}`;
    document.querySelector(".headerContact").textContent =
        `${translations.navigation.contact.standard}`;
    document.querySelector(".headerLanguageButton").textContent =
        `${translations.navigation.language.standard}`;
    if (window.innerWidth <= 1200) {
        document.querySelector(".container1ContainerHeader").innerHTML =
            `${translations.aboutMe.pageTitle}`;
    } else {
        document.querySelector(".container1ContainerHeader").innerHTML =
            `${translations.aboutMe.pageTitle}`;
    }
    document.querySelector(".aboutMePageIntroductoryHeader").textContent =
        `${translations.aboutMe.sections.introduction.title}`;
    document.querySelector(".aboutMePageIntroductoryText").textContent =
        `${translations.aboutMe.sections.introduction.content}`;
    document.querySelector(".aboutMePageIntroductoryHeader1").textContent =
        `${translations.aboutMe.sections.aspiration.title}`;
    document.querySelector(".aboutMePageIntroductoryText1").textContent =
        `${translations.aboutMe.sections.aspiration.content}`;
    document.querySelector(".aboutMePageIntroductoryHeader2").textContent =
        `${translations.aboutMe.sections.experience.title}`;
    document.querySelector(".aboutMePageIntroductoryText2").textContent =
        `${translations.aboutMe.sections.experience.content}`;
    document.querySelector(".aboutMePageIntroductoryHeader3").textContent =
        `${translations.aboutMe.sections.projects.title}`;
    document.querySelector(".aboutMePageIntroductoryHeader4").textContent =
        `${translations.aboutMe.sections.evolution.title}`;
    document.querySelector(".aboutMePageIntroductoryText4").textContent =
        `${translations.aboutMe.sections.evolution.content}`;
    document.querySelector(".aboutMePageIntroductoryHeader5").textContent =
        `${translations.aboutMe.sections.conclusion.title}`;
    document.querySelector(".aboutMePageIntroductoryText5").textContent =
        `${translations.aboutMe.sections.conclusion.content}`;
    document.querySelector(".aboutMePageIntroductoryText6").innerHTML =
        `${translations.aboutMe.sections.github} <img src="assets/images/degrees/gitHubIcon.svg" class="gitHubIcon">`;

    document.querySelector(".degreesHeader").textContent =
        `${translations.aboutMe.education.title}`;
    document.querySelector(".universityDuration").innerHTML =
        `${translations.aboutMe.education.degree1.diplomaDescription}`;
    document.querySelector(".schoolTitle").textContent =
        `${translations.aboutMe.education.degree2.diplomaTitle}`;
    document.querySelector(".schoolDuration").innerHTML =
        `${translations.aboutMe.education.degree2.diplomaDescription}`;

    if (window.innerWidth > 450 && window.innerWidth < 1200) {
        document.querySelector(".workExperienceHeader").style.marginTop =
            "17.5vw";
    }
    document.querySelector(".workExperienceHeader").textContent =
        `${translations.aboutMe.workExperience.title}`;

    document.querySelector(".work1Title").textContent =
        `${translations.aboutMe.workExperience.jobs[0].title}`;
    document.querySelector(".work1Description").textContent =
        `${translations.aboutMe.workExperience.jobs[0].company}`;
    document.querySelector(".work1DescriptionEnumeration1").textContent =
        `${translations.aboutMe.workExperience.jobs[0].responsibilities[0]}`;
    document.querySelector(".work1DescriptionEnumeration2").textContent =
        `${translations.aboutMe.workExperience.jobs[0].responsibilities[1]}`;
    document.querySelector(".work1DescriptionEnumeration3").textContent =
        `${translations.aboutMe.workExperience.jobs[0].responsibilities[2]}`;
    document.querySelector(".work1DescriptionEnumeration4").textContent =
        `${translations.aboutMe.workExperience.jobs[0].responsibilities[3]}`;

    document.querySelector(".work2Title").textContent =
        `${translations.aboutMe.workExperience.jobs[1].title}`;
    document.querySelector(".work2Description").textContent =
        `${translations.aboutMe.workExperience.jobs[1].company}`;
    document.querySelector(".work2DescriptionEnumeration1").textContent =
        `${translations.aboutMe.workExperience.jobs[1].responsibilities[0]}`;
    document.querySelector(".work2DescriptionEnumeration2").textContent =
        `${translations.aboutMe.workExperience.jobs[1].responsibilities[1]}`;

    document.querySelector(".work3Title").textContent =
        `${translations.aboutMe.workExperience.jobs[2].title}`;
    document.querySelector(".work3Description").textContent =
        `${translations.aboutMe.workExperience.jobs[2].company}`;
    document.querySelector(".work3DescriptionEnumeration1").textContent =
        `${translations.aboutMe.workExperience.jobs[2].responsibilities[0]}`;

    document.querySelector(".work4Title").textContent =
        `${translations.aboutMe.workExperience.jobs[3].title}`;
    document.querySelector(".work4Description").textContent =
        `${translations.aboutMe.workExperience.jobs[3].company}`;
    document.querySelector(".work4DescriptionEnumeration1").textContent =
        `${translations.aboutMe.workExperience.jobs[3].responsibilities[0]}`;
    document.querySelector(".work4DescriptionEnumeration2").textContent =
        `${translations.aboutMe.workExperience.jobs[3].responsibilities[1]}`;
    document.querySelector(".work4DescriptionEnumeration3").textContent =
        `${translations.aboutMe.workExperience.jobs[3].responsibilities[2]}`;
    document.querySelector(".work4DescriptionEnumeration4").textContent =
        `${translations.aboutMe.workExperience.jobs[3].responsibilities[3]}`;
    document.querySelector(".work4DescriptionEnumeration5").textContent =
        `${translations.aboutMe.workExperience.jobs[3].responsibilities[4]}`;
    document.querySelector(".work4DescriptionEnumeration6").textContent =
        `${translations.aboutMe.workExperience.jobs[3].responsibilities[5]}`;
    document.querySelector(".work4DescriptionEnumeration7").textContent =
        `${translations.aboutMe.workExperience.jobs[3].responsibilities[6]}`;
    document.querySelector(".work4DescriptionEnumeration8").textContent =
        `${translations.aboutMe.workExperience.jobs[3].responsibilities[7]}`;    

    document.querySelector(".work5Title").textContent =
        `${translations.aboutMe.workExperience.jobs[4].title}`;
    document.querySelector(".work5Description").textContent =
        `${translations.aboutMe.workExperience.jobs[4].company}`;
    document.querySelector(".work5DescriptionEnumeration1").textContent =
        `${translations.aboutMe.workExperience.jobs[4].responsibilities[0]}`;

    document.querySelector(".work6Title").textContent =
        `${translations.aboutMe.workExperience.jobs[5].title}`;
    document.querySelector(".work6Description").textContent =
        `${translations.aboutMe.workExperience.jobs[5].company}`;
    document.querySelector(".work6DescriptionEnumeration1").textContent =
        `${translations.aboutMe.workExperience.jobs[5].responsibilities[0]}`;
    document.querySelector(".work6DescriptionEnumeration2").textContent =
        `${translations.aboutMe.workExperience.jobs[5].responsibilities[1]}`;
}

function updateEnglishContact(translations) {
    document.querySelector(".dialogContact").textContent =
        `${translations.navigation.contact.lowercase}`;
    document.querySelector(".dialogLanguageButton").textContent =
        `${translations.navigation.language.lowercase}`;
    document.querySelector(".headerLanguageButton").textContent =
        `${translations.navigation.language.standard}`;

    if (window.innerWidth <= 450) {
        document.querySelector(".contactHeader").style.marginTop = "285vw";
    }
    document.querySelector(".contactHeader").innerHTML =
        `${translations.contact.title}`;

    document.querySelector(".contactPageNameField").innerHTML =
        `${translations.contact.form.name.label}<input type="text" id="name" name="name" placeholder="${translations.contact.form.name.placeholder}" required>`;

    document.querySelector(".contactPageEmailField").innerHTML =
        `${translations.contact.form.email.label}<input type="email" id="email" name="email" placeholder="${translations.contact.form.email.placeholder}" required>`;

    document.querySelector(".contactPageMessageField").innerHTML =
        `${translations.contact.form.message.label}<textarea id="message" name="message" rows="4" placeholder="${translations.contact.form.message.placeholder}" required></textarea>`;

    document.querySelector(".submitButton").textContent =
        `${translations.contact.form.submit}`;

    document.querySelector(".contactInformationHeader1").textContent =
        `${translations.contact.contactInfo}`;

    document.querySelector(".contactInformationHeader2").textContent =
        `${translations.contact.qualification}`;

    document.querySelector(".contactInformationListing2Number4").textContent =
        `${translations.contact.qualificationList[3]}`;

    document.querySelector(".contactInformationListing3Number1").textContent =
        `${translations.contact.interestsList[0]}`;
    document.querySelector(".contactInformationListing3Number2").textContent =
        `${translations.contact.interestsList[1]}`;
    document.querySelector(".contactInformationListing3Number3").textContent =
        `${translations.contact.interestsList[2]}`;
    document.querySelector(".contactInformationListing3Number4").textContent =
        `${translations.contact.interestsList[3]}`;
}

function updateGermanContact(translations) {
    document.querySelector(".headerHome").textContent =
        `${translations.navigation.home.standard}`;
    document.querySelector(".headerAboutMe").textContent =
        `${translations.navigation.aboutMe.standard}`;
    document.querySelector(".headerContact").textContent =
        `${translations.navigation.contact.standard}`;
    document.querySelector(".headerLanguageButton").textContent =
        `${translations.navigation.language.standard}`;

    if (window.innerWidth <= 450) {
        document.querySelector(".contactHeader").style.marginTop = "271vw";
    }

    document.querySelector(".contactHeader").innerHTML =
        `${translations.contact.title}`;

    document.querySelector(".contactPageNameField").innerHTML =
        `${translations.contact.form.name.label}<input type="text" id="name" name="name" placeholder="${translations.contact.form.name.placeholder}" required>`;

    document.querySelector(".contactPageEmailField").innerHTML =
        `${translations.contact.form.email.label}<input type="email" id="email" name="email" placeholder="${translations.contact.form.email.placeholder}" required>`;

    document.querySelector(".contactPageMessageField").innerHTML =
        `${translations.contact.form.message.label}<textarea id="message" name="message" rows="4" placeholder="${translations.contact.form.message.placeholder}" required></textarea>`;

    document.querySelector(".submitButton").textContent =
        `${translations.contact.form.submit}`;

    document.querySelector(".contactInformationHeader1").textContent =
        `${translations.contact.contactInfo}`;

    document.querySelector(".contactInformationHeader2").textContent =
        `${translations.contact.qualification}:`;

    document.querySelector(".contactInformationListing2Number4").textContent =
        `${translations.contact.qualificationList[3]}`;

    document.querySelector(".contactInformationListing3Number1").textContent =
        `${translations.contact.interestsList[0]}`;
    document.querySelector(".contactInformationListing3Number2").textContent =
        `${translations.contact.interestsList[1]}`;
    document.querySelector(".contactInformationListing3Number3").textContent =
        `${translations.contact.interestsList[2]}`;
    document.querySelector(".contactInformationListing3Number4").textContent =
        `${translations.contact.interestsList[3]}`;
}
