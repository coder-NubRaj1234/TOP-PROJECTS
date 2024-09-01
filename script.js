const aboutContainer = document.querySelector("#info-contontainer");
const btns = document.querySelectorAll(".tab-bnt");
const infoElements = document.querySelectorAll(".info")

aboutContainer.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    btns.forEach(function (btn) {
        if (id) {
            btn.classList.remove("active");
            e.target.classList.add("active");

            infoElements.forEach(function (elm) {
                elm.classList.remove("active");
            });

            const element = document.getElementById(id);
            element.classList.add("active");
        };
    });
});