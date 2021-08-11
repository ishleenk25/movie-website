const arrows = document.querySelectorAll(".arrow");
const playLists = document.querySelectorAll(".play-list");

arrows.forEach((arrow, i) => {
    const itemNumber = playLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
        const ratio = Math.floor(window.innerWidth / 270);
        clickCounter++;
        if (itemNumber - (4 + clickCounter) + (5 - ratio) >= 0) {
            playLists[i].style.transform = `translateX(${
        playLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
        } else {
            playLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });

    console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
    ".container,.play-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle,.featured-content2,.featured-content, .featured-desc"
);

ball.addEventListener("click", () => {
    items.forEach((item) => {
        item.classList.toggle("active");
    });
    ball.classList.toggle("active");
});