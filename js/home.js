var userName = localStorage.getItem("name");
document.querySelector("#textTo").innerHTML = `Welcom ${userName}`;

var btnOut = document.querySelector("#btnOut");
btnOut.addEventListener("click", function () {
    setTimeout(() => {
        window.location.replace("./login.html");
    }, 900);
})