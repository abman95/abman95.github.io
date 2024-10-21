export function initializeProjectModal() {
    const projectImageSlider1ButtonContainerBackground = document.querySelector(
        ".projectImageSlider1ButtonContainerBackground",
    );
    const projectImageSlider1ButtonListingNew = document.querySelector(
        ".projectImageSlider1ButtonListingNew",
    );
    const dialogCloseButtonProjects = document.querySelector(
        ".dialogCloseButtonProjects",
    );

    projectImageSlider1ButtonContainerBackground.addEventListener(
        "click",
        openModal,
    );
    dialogCloseButtonProjects.addEventListener("click", closeModal);
    projectImageSlider1ButtonListingNew.addEventListener(
        "click",
        handleOutsideClick,
    );

    function openModal() {
        projectImageSlider1ButtonListingNew.showModal();
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        projectImageSlider1ButtonListingNew.classList.add("closed");
        setTimeout(() => {
            projectImageSlider1ButtonListingNew.close();
            projectImageSlider1ButtonListingNew.classList.remove("closed");
            resetBodyOverflow();
        }, 300);
    }

    function handleOutsideClick(event) {
        const rect =
            projectImageSlider1ButtonListingNew.getBoundingClientRect();
        const isOutside =
            event.clientX < rect.left ||
            event.clientX >= rect.right ||
            event.clientY < rect.top ||
            event.clientY >= rect.bottom;

        if (isOutside) {
            projectImageSlider1ButtonListingNew.classList.add("closed");
            resetBodyOverflow();
            setTimeout(() => {
                projectImageSlider1ButtonListingNew.close();
                projectImageSlider1ButtonListingNew.classList.remove("closed");
                resetBodyOverflow();
            }, 300);
        }
    }

    function resetBodyOverflow() {
        document.body.style.overflow = "auto";
        document.body.style.overflowX = "hidden";
    }
}
