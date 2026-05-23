let button =
document.querySelector(".right-nav");

let modeText =
document.querySelector(".right-nav h2");

let icon =
document.querySelector(".icon");

button.addEventListener(
"click",
function(){

    document.body.classList.toggle(
        "dark-mode"
    );

    if(
        document.body.classList.contains(
            "dark-mode"
        )
    ){

        modeText.textContent =
        "Dark Mode";

        icon.classList.remove(
            "bi-sun"
        );

        icon.classList.add(
            "bi-moon-stars"
        );

    }

    else{

        modeText.textContent =
        "Light Mode";

        icon.classList.remove(
            "bi-moon-stars"
        );

        icon.classList.add(
            "bi-sun"
        );

    }

});