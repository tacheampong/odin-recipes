const foodName = document.getElementById("food-name");
const toPage = document.getElementById("forward");


if(toPage){

    toPage.addEventListener("click", ChangePage);
    toPage.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior:"smooth"
    })
}

function Home() {
    return window.location.href = "../index.html";

}

function ChangePage() {

    if (window.location.href === "http://" + window.location.host.concat("/odin-recipes/recipes/cheesecake.html")) {
        return window.location.href = "http://" + window.location.host.concat("/odin-recipes/recipes/fried-chicken.html");

    }
    if (window.location.href === "http://" + window.location.host.concat("/odin-recipes/recipes/fried-chicken.html")) {
        return window.location.href = "http://" + window.location.host.concat("/odin-recipes/recipes/taco-dip.html");


    }
    if (window.location.href === "http://" + window.location.host.concat("/odin-recipes/recipes/taco-dip.html")) {
        return window.location.href = "http://" + window.location.host.concat("/odin-recipes/recipes/cheesecake.html");

    }
}

