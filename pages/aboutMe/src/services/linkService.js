// services/LinkService.js
export class LinkService {
    constructor() {
        this.aboutMeHeader6 = document.querySelector(
            ".aboutMePageIntroductoryHeader6",
        );
        this.aboutMeText6 = document.querySelector(
            ".aboutMePageIntroductoryText6",
        );
    }

    init() {
        this.setupCVDownload();
        this.setupGithubLink();
    }

    setupCVDownload() {
        this.aboutMeHeader6.addEventListener("click", () => {
            const pdfFilePath = "../../assets/cv/CV - Abdullah Sögüt.pdf";

            const link = document.createElement("a");
            link.href = pdfFilePath;
            link.target = "_blank";
            link.download = "Abdullah_Sogut_CV.pdf";

            link.click();
        });
    }

    setupGithubLink() {
        this.aboutMeText6.addEventListener("click", () => {
            const gitHubPath = "https://github.com/abman95";

            const link = document.createElement("a");
            link.href = gitHubPath;
            link.target = "_blank";

            link.click();
        });
    }
}
