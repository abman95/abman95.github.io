import {
    updateProjectDescription,
    addLetterHeadingContainer1,
    requireCurrentLanguage,
} from "./languageSwitcher.js";

let chosenLanguage;

export const dialogTexts = {
    German: {
        dialogHome: ["STARTSEITE", "startseite"],
        dialogAboutMe: ["ÜBER MICH", "über mich"],
        dialogContact: ["KONTAKT", "kontakt"],
        dialogLanguageButton: ["SPRACHE", "sprache"],
        languageEnglish: ["ENGLISCH", "englisch"],
        languageGerman: ["DEUTSCH", "deutsch"],
    },
    English: {
        dialogHome: ["HOME", "home"],
        dialogAboutMe: ["ABOUT ME", "about me"],
        dialogContact: ["CONTACT", "contact"],
        dialogLanguageButton: ["LANGUAGE", "language"],
        languageEnglish: ["ENGLISH", "english"],
        languageGerman: ["GERMAN", "german"],
    },
};

export const personalIntroduction = {
    English:
        "I am an experienced Web Designer and Software Engineer with expertise in WordPress, HTML, CSS, JavaScript, React, NodeJS, ExpressJS, SQL and PHP. My diverse background includes entrepreneurship, marketing, logistics, and customer service, making me a valuable asset for your team. Explore my portfolio today!",
    German: "Ich bin erfahrener Webdesigner und Softwareentwickler mit Expertise in WordPress, HTML, CSS, JavaScript, React, NodeJS, ExpressJS, SQL und PHP. Mein Hintergrund in Unternehmertum, Marketing, Logistik und Kundenservice bereichert Ihr Team. Entdecken Sie heute mein Portfolio!",
};

export const PROJECT_DESCRIPTIONS_EN = {
    mp3: "My biggest project, which I worked on after 3 1/2 months of intensive learning in JavaScript, CSS, and HTML, is my MP3 player. This MP3 player is a powerful and user-friendly application. It allows you to play MP3 files, fast-forward and rewind, enable auto-play and enjoy shuffle playback. With its media library list, you can easily switch between your songs in the playlist, upload them, and enjoy.",
    typing: "My Typing Speed App, developed after 2 1/2 months of learning JavaScript, CSS, and HTML, lets you test and improve your typing skills. It provides accurate speed and accuracy metrics, helping you become a faster and more precise typist.",
    toDo: "My ToDo App is a simple and efficient task manager. Designed after 2 months of learning JavaScript, CSS, and HTML, it helps you organize your tasks, set priorities, and stay productive with ease.",
    timer: "My Timer App, created after 1 1/2 months of mastering JavaScript, CSS, and HTML, offers precise timing capabilities. Use it for various purposes, from cooking to workouts, with reliability and accuracy.",
    clock: "My Clock App is a straightforward timekeeping tool, crafted after 1 months of JavaScript, CSS, and HTML learning. It displays the time accurately, keeping you informed at a glance.",
    keyGen: "My KeyGenerator Tool, born after 3 months of studying JavaScript, CSS, and HTML, generates secure and random keys for various purposes. Enhance your security with ease using this efficient utility.",
};

export const PROJECT_DESCRIPTIONS_DE = {
    mp3: "Mein größtes Projekt, an dem ich nach 3 1/2 Monaten intensiven Lernens in JavaScript, CSS und HTML gearbeitet habe, ist mein MP3-Player. Dieser MP3-Player ist eine leistungsstarke und benutzerfreundliche Anwendung. Sie ermöglicht das Abspielen von MP3-Dateien, Vor- und Zurückspulen, das Aktivieren der automatischen Wiedergabe und das Genießen des Zufallsspielmodus. Mit seiner Mediathek-Liste können Sie einfach zwischen Ihren Liedern in der Wiedergabeliste wechseln, sie hochladen und genießen.",
    typing: "Meine Typing Speed App, entwickelt nach 2 1/2 Monaten des Lernens von JavaScript, CSS und HTML, ermöglicht es Ihnen, Ihre Schreibfähigkeiten zu testen und zu verbessern. Sie bietet genaue Geschwindigkeits- und Genauigkeitsmetriken, die Ihnen helfen, ein schnellerer und präziserer Tipper zu werden.",
    toDo: "Meine ToDo-App ist ein einfaches und effizientes Aufgabenmanagement-Tool. Entwickelt nach 2 Monaten des Lernens von JavaScript, CSS und HTML, hilft es Ihnen, Ihre Aufgaben zu organisieren, Prioritäten zu setzen und produktiv zu bleiben.",
    timer: "Meine Timer-App, erstellt nach 1 1/2 Monaten des intensiven Lernens von JavaScript, CSS und HTML, bietet präzise Zeitmessfunktionen. Verwenden Sie sie für verschiedene Zwecke, vom Kochen bis zum Training, mit Zuverlässigkeit und Genauigkeit.",
    clock: "Meine Uhren-App ist ein einfaches Zeitmessungstool, das nach 1 Monat des Lernens von JavaScript, CSS und HTML entwickelt wurde. Sie zeigt die Zeit genau an und hält Sie auf einen Blick informiert.",
    keyGen: "Mein KeyGenerator-Tool, entstanden nach 3 Monaten des Studiums von JavaScript, CSS und HTML, generiert sichere und zufällige Schlüssel für verschiedene Zwecke. Verbessern Sie Ihre Sicherheit mühelos mit diesem effizienten Dienstprogramm.",
};

export const easterEggTranslations = {
    undefined: {
        0: {
            headline: "Please don't click me.",
            closeButton: "Got It!",
        },
        1: {
            headline: "Please don't pull me.",
            closeButton: "Got It!",
        },
        2: { headline: "Seriously Stop.", closeButton: "Okay" },
        3: { headline: "You asked for it", closeButton: "..." },
        4: {
            headline: `Now tell me "YOU ARE HIRED!"!`,
            closeButton: "calling...",
        },
        5: {
            headline: `Now tell me "YOU ARE HIRED!"!`,
            closeButton: "close...",
        },
    },
    English: {
        0: {
            headline: "Please don't click me.",
            closeButton: "Got It!",
        },
        1: {
            headline: "Please don't pull me.",
            closeButton: "Got It!",
        },
        2: { headline: "Seriously Stop.", closeButton: "Okay" },
        3: { headline: "You asked for it", closeButton: "..." },
        4: {
            headline: `Now tell me "YOU ARE HIRED!"!`,
            closeButton: "calling...",
        },
        5: {
            headline: `Now tell me "YOU ARE HIRED!"!`,
            closeButton: "close...",
        },
    },
    German: {
        0: {
            headline: "Bitte klick mich nicht.",
            closeButton: "Verstanden!",
        },
        1: {
            headline: "Bitte zieh mich nicht.",
            closeButton: "Verstanden!",
        },
        2: {
            headline: "Im Ernst jetzt, hör auf.",
            closeButton: "Okay",
        },
        3: { headline: "Du hast es provoziert.", closeButton: "..." },
        4: {
            headline: "Jetzt musst du mich aber einstellen!",
            closeButton: "rufe an...",
        },
        5: {
            headline: "Jetzt musst du mich aber einstellen!",
            closeButton: "schließen...",
        },
    },
};

export function updateEnglishContent() {
    document.querySelector(".clockHeader").textContent = "Local Time";
    document.querySelector(".headerHome").textContent = "Home";
    document.querySelector(".headerAboutMe").textContent = "About Me";
    document.querySelector(".headerContact").textContent = "Contact";
    document.querySelector(".headerLanguageButton").textContent = "Language";

    chosenLanguage = requireCurrentLanguage();

    if (window.location.href.includes("/homepage.html")) {
        footerUpdater(undefined, 1);
        updateEnglishHomepage();
    } else if (window.location.href.includes("/aboutMe.html")) {
        footerUpdater(undefined, 2);
        updateEnglishAboutMe();
    } else if (window.location.href.includes("/contact.html")) {
        footerUpdater(undefined, 3);
        updateEnglishContact();
    }
}

export function updateGermanContent() {
    document.querySelector(".clockHeader").textContent = "Lokale Zeit";
    document.querySelector(".headerHome").textContent = "Startseite";
    document.querySelector(".headerAboutMe").textContent = "Über Mich";
    document.querySelector(".headerContact").textContent = "Kontakt";
    document.querySelector(".headerLanguageButton").textContent = "Sprache";

    chosenLanguage = requireCurrentLanguage();

    if (window.location.href.includes("/homepage.html")) {
        footerUpdater(true, 1);
        updateGermanHomepage();
    } else if (window.location.href.includes("/aboutMe.html")) {
        footerUpdater(true, 2);
        updateGermanAboutMe();
    } else if (window.location.href.includes("/contact.html")) {
        footerUpdater(true, 3);
        updateGermanContact();
    }
}

function footerUpdater(isGerman = false, currentPageValue) {
    const lang = isGerman ? "de" : "en";

    const texts = {
        de: {
            header: "Ihre Zukunft, meine Expertise.",
            home: "Startseite",
            about: "Über Mich",
            contact: "Kontakt",
        },
        en: {
            header: "Your Future, my Expertise.",
            home: "Home",
            about: "About Me",
            contact: "Contact",
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

function updateEnglishHomepage() {
    document.querySelector(".jobDegreeText").textContent =
        "Industrial Engineer";
    document.querySelector(".dontPullMeDialogCloseButton").textContent =
        "Industrial Engineer";
    document.querySelector(".dialogHome").textContent = "home";
    document.querySelector(".dialogAboutMe").textContent = "about me";
    document.querySelector(".dialogContact").textContent = "contact";
    document.querySelector(".dialogLanguageButton").textContent = "language";
    document.querySelector("#dialogHeadlineLanguage").textContent =
        "Select Your Language";
    document.querySelector(".locatedInCountryText").textContent =
        "Located in Germany";
    document.querySelector(".aboutMeButtonHeader").textContent =
        "Versatile professional with expertise in web design, entrepreneurship, marketing, logistics, and customer service, ready to enhance your team's capabilities.";
    document.querySelector(".aboutMeButton").textContent = "About Me";
    document.querySelector(".hrHeader").textContent = "Projects";
    document.querySelector(".projectSlider").textContent = "Projects:";
    document.querySelector(
        ".projectImageSlider1ButtonContainerBackgroundText",
    ).textContent = "Projects";
    document
        .querySelector("#projectImageSlider2ImagesAfterPseudoDiv")
        .style.setProperty("--pseudo-Content", '"click to try me"');
    document.querySelector("#dialogHeadlineProjects").textContent = "Projects";
    addLetterHeadingContainer1(
        personalIntroduction[chosenLanguage],
        true,
        false,
    );
    updateProjectDescription(PROJECT_DESCRIPTIONS_EN);
}

function updateGermanHomepage() {
    document.querySelector(".jobDegreeText").textContent =
        "Wirtschaftsingenieur";
    document.querySelector(".dontPullMeDialogCloseButton").textContent =
        "Wirtschaftsingenieur";
    document.querySelector(".dialogHome").textContent = "startseite";
    document.querySelector(".dialogAboutMe").textContent = "über mich";
    document.querySelector(".dialogContact").textContent = "kontakt";
    document.querySelector(".dialogLanguageButton").textContent = "sprache";
    document.querySelector("#dialogHeadlineLanguage").textContent =
        "Wähle deine Sprache";
    document.querySelector(".locatedInCountryText").textContent =
        "Ansässig in Deutschland";
    document.querySelector(".aboutMeButtonHeader").textContent =
        "Vielseitige Expertise mit Fachkenntnissen in Webdesign, Unternehmertum, Marketing, Logistik und Kundenservice, bereit, die Fähigkeiten Ihres Teams zu erweitern.";
    document.querySelector(".aboutMeButton").textContent = "Über Mich";
    document.querySelector(".hrHeader").textContent = "Projekte";
    document.querySelector(".projectSlider").textContent = "Projekte:";
    document.querySelector(
        ".projectImageSlider1ButtonContainerBackgroundText",
    ).textContent = "Projekte";
    document
        .querySelector("#projectImageSlider2ImagesAfterPseudoDiv")
        .style.setProperty("--pseudo-Content", '"zum testen klicken"');
    document.querySelector("#dialogHeadlineProjects").textContent = "Projekte";
    addLetterHeadingContainer1(
        personalIntroduction[chosenLanguage],
        true,
        false,
    );
    updateProjectDescription(PROJECT_DESCRIPTIONS_DE);
}

function updateEnglishAboutMe() {
    document.querySelector("#dialogHeadlineLanguage").textContent =
        "Select Your Language";
    document.querySelector(".dialogHome").textContent = "home";
    document.querySelector(".dialogAboutMe").textContent = "about me";
    document.querySelector(".dialogContact").textContent = "contact";
    document.querySelector(".dialogLanguageButton").textContent = "language";
    document.querySelector(".container1ContainerHeader").innerHTML =
        "From Business to Code<br>My Journey in Software Development and Creative Web Design";
    document.querySelector(".aboutMePageIntroductoryHeader").textContent =
        "Introduction";
    document.querySelector(".aboutMePageIntroductoryText").textContent =
        "Hello! My name is Abdullah Sögüt. I am 27 years old and was born in Bremen, Germany.";
    document.querySelector(".aboutMePageIntroductoryHeader1").textContent =
        "Aspiration";
    document.querySelector(".aboutMePageIntroductoryText1").textContent =
        "I aspire to bring my creative potential into the digital world as a passionate software developer. With a Bachelor of Science in Production Engineering, I have built a strong foundation in analytical thinking and problem-solving skills.";
    document.querySelector(".aboutMePageIntroductoryHeader2").textContent =
        "Experience";
    document.querySelector(".aboutMePageIntroductoryText2").textContent =
        "My passion for software development was born during my time as a business manager at an e-commerce company, where I gained extensive experience in web and graphic design using WordPress Elementor. With pride, I have successfully created websites such as:";
    document.querySelector(".aboutMePageIntroductoryHeader3").textContent =
        "Projects";
    document.querySelector(".aboutMePageIntroductoryHeader4").textContent =
        "Evolution";
    document.querySelector(".aboutMePageIntroductoryText4").textContent =
        "When I reached the limits of WordPress Elementor, my curiosity for programming was ignited. With enthusiasm, I delved deep into the world of HTML, CSS, JavaScript, React, NodeJS, ExpressJS, SQL and PHP to implement additional functionalities and expand my technical skills.";
    document.querySelector(".aboutMePageIntroductoryHeader5").textContent =
        "Conclusion";
    document.querySelector(".aboutMePageIntroductoryText5").textContent =
        "Therefore laying the foundation to develop projects, many of which I share on my GitHub . Examples include this portfolio site, which was created using only HTML, CSS, and Vanilla JavaScript.";
    document.querySelector(".aboutMePageIntroductoryText6").innerHTML =
        'Check Out My GitHub <img src="assets/images/degrees/gitHubIcon.svg" class="gitHubIcon">';
    document.querySelector(".degreesHeader").textContent = "Degrees:";
    document.querySelector(".universityDuration").innerHTML =
        "INDUSTRIAL ENGINEERING – UNIVERSITY BREMEN<br>2015 – 2021";
    document.querySelector(".schoolTitle").textContent = "HIGH SCHOOL DIPLOMA";
    document.querySelector(".schoolDuration").innerHTML =
        "ALEXANDER VON HUMBOLDT HIGH SCHOOL BREMEN<br>2014 – 2015</p>";
    document.querySelector(".workExperienceHeader").textContent =
        "Work Experience:";
    document.querySelector(".work1Title").textContent =
        "WEB DESIGN & Private Software Engineer";
    document.querySelector(".work1Description").textContent =
        "Self-Employed | 10/2022 -";
    document.querySelector(".work1DescriptionEnumeration1").textContent =
        "Building websites, shop pages using WordPress";
    document.querySelector(".work1DescriptionEnumeration2").textContent =
        "Functionality enhancements using HTML, CSS, PHP, JavaScript";
    document.querySelector(".work1DescriptionEnumeration3").textContent =
        "GitHub: Abman95";
    document.querySelector(".work2Title").textContent =
        "PARTNER OF SOGEKING GBR";
    document.querySelector(".work2Description").textContent =
        "Sogeking GbR Bremen | 07/2017 -";
    document.querySelector(".work2DescriptionEnumeration1").textContent =
        "Import and trade of goods -> EBAY, Amazon & website";
    document.querySelector(".work2DescriptionEnumeration2").textContent =
        "Patent and trademark applications";
    document.querySelector(".work2DescriptionEnumeration3").textContent =
        "Web Designing";
    document.querySelector(".work2DescriptionEnumeration4").textContent =
        "Marketing -> Keeping statistics, Online Marketing";
    document.querySelector(".work2DescriptionEnumeration5").textContent =
        "Image editing";
    document.querySelector(".work2DescriptionEnumeration6").textContent =
        "Logistics -> Organization & planning";
    document.querySelector(".work2DescriptionEnumeration7").textContent =
        "Tax registration -> Accounting & bureaucracy";
    document.querySelector(".work2DescriptionEnumeration8").textContent =
        "Customer service";

    document.querySelector(".work3Title").textContent =
        "SALES REPRESENTATIVE FOR SOLAR SALES";
    document.querySelector(".work3Description").textContent =
        "Energiekonzepte Mitteldeutschland GmbH | 05/2021 until 09/2022";
    document.querySelector(".work3DescriptionEnumeration1").textContent =
        "Consultation, planning, organization, and economic calculations of photovoltaic systems";
    document.querySelector(".work3DescriptionEnumeration2").textContent =
        "PV SOL Premium economic calculation";

    document.querySelector(".work4Title").textContent =
        "FIELD WORKER FOR 2LOCATE";
    document.querySelector(".work4Description").textContent =
        "2locate GmbH | 11/2020 until 11/2021";
    document.querySelector(".work4DescriptionEnumeration1").textContent =
        "Lead acquisition";
    document.querySelector(".work4DescriptionEnumeration2").textContent =
        "Door-to-Door sales";
    document.querySelector(".work4DescriptionEnumeration3").textContent =
        "Planning, consultation, and organization of customer appointments and contract appointments";

    document.querySelector(".work5Title").textContent =
        "ACCOUNTING & MARKETING & RETURNS FOR THE ONLINE PHARMACY EURAPON";
    document.querySelector(".work5Description").textContent =
        "Eurapon Pharmahandel GmbH | 06/2018 until 05/2019";
    document.querySelector(".work5DescriptionEnumeration1").textContent =
        "Processing of collection cases/dunning cases";
    document.querySelector(".work5DescriptionEnumeration2").textContent =
        "Checking and processing account reconciliations";
    document.querySelector(".work5DescriptionEnumeration3").textContent =
        "Processing returns & creating credit notes";
    document.querySelector(".work5DescriptionEnumeration4").textContent =
        "Handling customer emails";
    document.querySelector(".work5DescriptionEnumeration5").textContent =
        "Picking of goods";
    document.querySelector(".work5DescriptionEnumeration6").textContent =
        "Product data maintenance in the marketing department";

    document.querySelector(".work6Title").textContent =
        "CUSTOMER ADVISOR FOR DEUTSCHE TELEKOM";
    document.querySelector(".work6Description").textContent =
        "Simon & Focken Bremen GmbH | 09/2017 until 03/2018";
    document.querySelector(".work6DescriptionEnumeration1").textContent =
        "Processing inbound and outbound calls";
    document.querySelector(".work6DescriptionEnumeration2").textContent =
        "Handling written correspondence and emails";
    document.querySelector(".work6DescriptionEnumeration3").textContent =
        "Data entry and address qualification in the Invitel program";
    document.querySelector(".work6DescriptionEnumeration4").textContent =
        "Telephone consulting and sales";
}

function updateGermanAboutMe() {
    document.querySelector("#dialogHeadlineLanguage").textContent =
        "Wähle deine Sprache";

    document.querySelector(".dialogHome").textContent = "startseite";
    document.querySelector(".dialogAboutMe").textContent = "über mich";
    document.querySelector(".dialogContact").textContent = "kontakt";
    document.querySelector(".dialogLanguageButton").textContent = "sprache";
    document.querySelector(".headerHome").textContent = "Startseite";
    document.querySelector(".headerAboutMe").textContent = "Über Mich";
    document.querySelector(".headerContact").textContent = "Kontakt";
    document.querySelector(".headerLanguageButton").textContent = "Sprache";
    if (window.innerWidth <= 1150) {
        document.querySelector(".container1ContainerHeader").innerHTML =
            "Von Business zu Code<br>Meine Reise in der Software entwicklung und im kreativen Webdesign";
    } else {
        document.querySelector(".container1ContainerHeader").innerHTML =
            "Von Business zu Code<br>Meine Reise in der Software entwicklung und im kreativen Webdesign";
    }
    document.querySelector(".aboutMePageIntroductoryHeader").textContent =
        "Einleitung";
    document.querySelector(".aboutMePageIntroductoryText").textContent =
        "Hallo! Mein Name ist Abdullah Sögüt. Ich bin 27 Jahre alt und bin in Bremen, Deutschland geboren.";
    document.querySelector(".aboutMePageIntroductoryHeader1").textContent =
        "Ambition";
    document.querySelector(".aboutMePageIntroductoryText1").textContent =
        "Ich strebe danach, mein kreatives Potenzial als leidenschaftlicher Softwareentwickler in die digitale Welt zu bringen. Mit einem Bachelor of Science in Wirtschaftsingenieurwesen habe ich eine solide Grundlage im analytischen Denken und in Problemlösungsfähigkeiten aufgebaut.";
    document.querySelector(".aboutMePageIntroductoryHeader2").textContent =
        "Erfahrung";
    document.querySelector(".aboutMePageIntroductoryText2").textContent =
        "Meine Leidenschaft für die Softwareentwicklung entstand während meiner Zeit als Geschäftsleiter in einem E-Commerce-Unternehmen, wo ich umfangreiche Erfahrungen im Web- und Grafikdesign mit WordPress Elementor sammelte. Mit Stolz habe ich erfolgreich Websites erstellt, wie zum Beispiel:";
    document.querySelector(".aboutMePageIntroductoryHeader3").textContent =
        "Projekte";
    document.querySelector(".aboutMePageIntroductoryHeader4").textContent =
        "Entwicklung";
    document.querySelector(".aboutMePageIntroductoryText4").textContent =
        "Als ich die Grenzen von WordPress Elementor erreichte, wurde meine Neugier auf das Programmieren entfacht. Mit Begeisterung tauchte ich tief in die Welt von HTML, CSS, JavaScript, React, NodeJS, ExpressJS, SQL und PHP ein, um zusätzliche Funktionalitäten zu implementieren und meine technischen Fähigkeiten zu erweitern.";
    document.querySelector(".aboutMePageIntroductoryHeader5").textContent =
        "Fazit";
    document.querySelector(".aboutMePageIntroductoryText5").textContent =
        "Demzufolge habe ich das Fundament für die Umsetzung von Projekten geschaffen, von denen zahlreiche auf meinem GitHub-Repository geteilt werden. Zu den exemplarischen Arbeiten zählt unter anderem diese Portfolio-Website, die vollständig mithilfe von HTML, CSS und Vanilla JavaScript entwickelt wurde.";
    document.querySelector(".aboutMePageIntroductoryText6").innerHTML =
        'Besuche mein GitHub <img src="assets/images/degrees/gitHubIcon.svg" class="gitHubIcon">';

    document.querySelector(".degreesHeader").textContent = "Abschlüsse:";
    document.querySelector(".universityDuration").innerHTML =
        "WIRTSCHAFTSINGENIEUR – UNIVERSITÄT BREMEN<br>2015 – 2021";
    document.querySelector(".schoolTitle").textContent =
        "ABITUR - ALLGEMEINE HOCHSCHULREIFE";
    document.querySelector(".schoolDuration").innerHTML =
        "ALEXANDER VON HUMBOLDT GYMNASIUM BREMEN<br>2014 – 2015</p>";

    if (window.innerWidth > 450 && window.innerWidth < 1150) {
        document.querySelector(".workExperienceHeader").style.marginTop =
            "17.5vw";
    }
    document.querySelector(".workExperienceHeader").textContent =
        "Berufserfahrung:";

    document.querySelector(".work1Title").textContent =
        "WEBDESIGN & Private Software Engineer";
    document.querySelector(".work1Description").textContent =
        "Selbstständig | 10/2022 -";
    document.querySelector(".work1DescriptionEnumeration1").textContent =
        "Aufbau von Internetpräsenz, Shop Seiten über Wordpress";
    document.querySelector(".work1DescriptionEnumeration2").textContent =
        "Funktionsergänzungen über HTML, CSS, PHP, JavaScript";
    document.querySelector(".work1DescriptionEnumeration3").textContent =
        "GitHub: Abman95";

    document.querySelector(".work2Title").textContent =
        "GESELLSCHAFTER DER SOGEKING GBR";
    document.querySelector(".work2Description").textContent =
        "Sogeking GbR Bremen | 07/2017 -";
    document.querySelector(".work2DescriptionEnumeration1").textContent =
        "Import und Handel von Waren -> EBAY, Amazon & Webseite";
    document.querySelector(".work2DescriptionEnumeration2").textContent =
        "Patentanmeldung & Markenanmeldung";
    document.querySelector(".work2DescriptionEnumeration3").textContent =
        "Web Designing";
    document.querySelector(".work2DescriptionEnumeration4").textContent =
        "Marketing -> Statistiken führen, Online Marketing";
    document.querySelector(".work2DescriptionEnumeration5").textContent =
        "Bildbearbeitung";
    document.querySelector(".work2DescriptionEnumeration6").textContent =
        "Logistik -> Organisierung & Planung";
    document.querySelector(".work2DescriptionEnumeration7").textContent =
        "Steuererfassung -> Buchhaltung & Bürokratie";
    document.querySelector(".work2DescriptionEnumeration8").textContent =
        "Kundenservice";

    document.querySelector(".work3Title").textContent =
        "HANDELSVERTRETER FÜR SOLARVERTRIEB";
    document.querySelector(".work3Description").textContent =
        "Energiekonzepte Mitteldeutschland GmbH | 05/2021 bis 09/2022";
    document.querySelector(".work3DescriptionEnumeration1").textContent =
        "Beratung, Planung, Organisation und Wirtschaftlichkeitsrechnungen von Photovoltaikanlagen";
    document.querySelector(".work3DescriptionEnumeration2").textContent =
        "PV SOL Premium Wirtschaftlichkeitsrechnung";

    document.querySelector(".work4Title").textContent =
        "AUSSENDIENST ARBEITER DER 2LOCATE";
    document.querySelector(".work4Description").textContent =
        "2locate GmbH | 11/2020 bis 11/2021";
    document.querySelector(".work4DescriptionEnumeration1").textContent =
        "Leadakquise";
    document.querySelector(".work4DescriptionEnumeration2").textContent =
        "Door2Door Vertrieb";
    document.querySelector(".work4DescriptionEnumeration3").textContent =
        "Planung, Beratung und Organisation von Kundenterminen sowie Vertragsterminen";

    document.querySelector(".work5Title").textContent =
        "BUCHHALTUNG & MARKETING & RETOUREN DER ONLINE APOTHEKE EURAPON";
    document.querySelector(".work5Description").textContent =
        "Eurapon Pharmahandel GmbH | 06/2018 bis 05/2019";
    document.querySelector(".work5DescriptionEnumeration1").textContent =
        "Bearbeitung von Inkassofällen/Mahnfällen";
    document.querySelector(".work5DescriptionEnumeration2").textContent =
        "Kontoabstimmungen überprüfen und bearbeiten";
    document.querySelector(".work5DescriptionEnumeration3").textContent =
        "Bearbeitung von Rückläufern & Erstellung von Gutschriften";
    document.querySelector(".work5DescriptionEnumeration4").textContent =
        "Abarbeitung von Kundenmails";
    document.querySelector(".work5DescriptionEnumeration5").textContent =
        "Kommissionierung von Waren";
    document.querySelector(".work5DescriptionEnumeration6").textContent =
        "Produktdatenpflege im Marketingbereich";

    document.querySelector(".work6Title").textContent =
        "KUNDENBERATER DER DEUTSCHEN TELEKOM";
    document.querySelector(".work6Description").textContent =
        "Simon & Focken Bremen GmbH | 09/2017 bis 03/2018";
    document.querySelector(".work6DescriptionEnumeration1").textContent =
        "Bearbeitung von In- und Outboundcalls";
    document.querySelector(".work6DescriptionEnumeration2").textContent =
        "Bearbeitung von Schriftverkehr und E-Mails";
    document.querySelector(".work6DescriptionEnumeration3").textContent =
        "Datenerfassung und Adressqualifizierung im Programm Invitel";
    document.querySelector(".work6DescriptionEnumeration4").textContent =
        "Telefonberatung und Vertrieb";
}

function updateEnglishContact() {
    document.querySelector("#dialogHeadlineLanguage").textContent =
        "Select Your Language";
    document.querySelector(".headerHome").textContent = "Home";
    document.querySelector(".headerAboutMe").textContent = "About Me";
    document.querySelector(".headerContact").textContent = "Contact";
    document.querySelector(".dialogHome").textContent = "home";
    document.querySelector(".dialogAboutMe").textContent = "about me";
    document.querySelector(".dialogContact").textContent = "contact";
    document.querySelector(".dialogLanguageButton").textContent = "language";
    document.querySelector(".headerLanguageButton").textContent = "Language";

    if (window.innerWidth <= 450) {
        document.querySelector(".contactHeader").style.marginTop = "285vw";
    }
    document.querySelector(".contactHeader").innerHTML =
        "Get in Touch for<br>further<br>information";

    document.querySelector(".contactPageNameField").innerHTML =
        'Name:<input type="text" id="name" name="name" placeholder="Please write your name" required>';

    document.querySelector(".contactPageEmailField").innerHTML =
        'E-Mail:<input type="email" id="email" name="email" placeholder="Please write your E-Mail address" required>';

    document.querySelector(".contactPageMessageField").innerHTML =
        'Message:<textarea id="message" name="message" rows="4" placeholder="Please write your message" required></textarea>';

    document.querySelector(".submitButton").textContent = "Send";

    document.querySelector(".contactInformationHeader1").textContent =
        "Contact Information:";

    document.querySelector(".contactInformationHeader2").textContent =
        "Qualification:";

    document.querySelector(".contactInformationListing2Number4").textContent =
        "Graphic Design";

    document.querySelector(".contactInformationListing3Number1").textContent =
        "Reading";
    document.querySelector(".contactInformationListing3Number2").textContent =
        "Fitness";
    document.querySelector(".contactInformationListing3Number3").textContent =
        "Further education in the field of";
    document.querySelector(".contactInformationListing3Number4").textContent =
        "General knowledge";
}

function updateGermanContact() {
    document.querySelector("#dialogHeadlineLanguage").textContent =
        "Wähle deine Sprache";

    document.querySelector(".dialogHome").textContent = "startseite";
    document.querySelector(".dialogAboutMe").textContent = "über mich";
    document.querySelector(".dialogContact").textContent = "kontakt";
    document.querySelector(".dialogLanguageButton").textContent = "sprache";
    document.querySelector(".headerHome").textContent = "Startseite";
    document.querySelector(".headerAboutMe").textContent = "Über Mich";
    document.querySelector(".headerContact").textContent = "Kontakt";
    document.querySelector(".headerLanguageButton").textContent = "Sprache";

    if (window.innerWidth <= 450) {
        document.querySelector(".contactHeader").style.marginTop = "271vw";
    }

    document.querySelector(".contactHeader").innerHTML =
        "Kontaktieren Sie<br> mich für weitere<br>Informationen";

    document.querySelector(".contactPageNameField").innerHTML =
        'Name:<input type="text" id="name" name="name" placeholder="Ihr Vor-/Nachname" required>';

    document.querySelector(".contactPageEmailField").innerHTML =
        'E-Mail:<input type="email" id="email" name="email" placeholder="Ihre E-Mail-Adresse" required>';

    document.querySelector(".contactPageMessageField").innerHTML =
        'Ihre Nachricht:<textarea id="message" name="message" rows="4" placeholder="Ihre Nachricht" required></textarea>';

    document.querySelector(".submitButton").textContent = "Senden";

    document.querySelector(".contactInformationHeader1").textContent =
        "Kontakt Information:";

    document.querySelector(".contactInformationHeader2").textContent =
        "Qualifikation:";

    document.querySelector(".contactInformationListing2Number4").textContent =
        "Grafikdesign";

    document.querySelector(".contactInformationListing3Number1").textContent =
        "Lesen";
    document.querySelector(".contactInformationListing3Number2").textContent =
        "Fitness";
    document.querySelector(".contactInformationListing3Number3").textContent =
        "Weiterbildung im Bereich";
    document.querySelector(".contactInformationListing3Number4").textContent =
        "Allgemeinwissen";
}
