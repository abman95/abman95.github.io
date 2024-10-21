export function initializeHeaderAnimation() {
    const header = document.querySelector(".header");
    const headerFixedBackground = document.querySelector(
        ".headerFixedBackground",
    );
    let isScaled = false;

    document.addEventListener("scroll", function () {
        const headerRect = header.getBoundingClientRect();

        if (headerRect.bottom <= -50) {
            if (!isScaled) {
                headerFixedBackground.style.display = "flex";
                headerFixedBackground.style.scale = "1.2";
                headerFixedBackground.style.transition = "scale .4s ease-out";
                setTimeout(() => {
                    headerFixedBackground.style.scale = "1";
                    headerFixedBackground.style.transition =
                        "scale .1s ease-in";
                    isScaled = true;
                }, 400);
            }
        } else if (headerRect.bottom >= 0) {
            setTimeout(() => {
                headerFixedBackground.style.scale = "0";
                headerFixedBackground.style.transition = "scale .3s ease-in";
                isScaled = false;
            }, 400);
        }
    });
}
