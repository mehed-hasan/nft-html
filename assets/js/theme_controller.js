
let themeChangerBtnElem = document.querySelector('.changeTheme');

document.getElementById("sun_svg").style.display = "block"; 
document.getElementById("moon_svg").style.display = "none";


if(localStorage.currentTheme == null){
    console.log('currentTheme does not exist', );
    localStorage.currentTheme = "night"
}else{
    console.log('CurrentTheme does exist', );
    console.log('Localstorage: ', localStorage.currentTheme);
}

updateUI();
function updateUI(){
    if(localStorage.currentTheme == "day"){

        document.body.style.setProperty("--primary-color", "white");
        document.body.style.setProperty("-nav-button-bg", "#BE1954");
        document.body.style.setProperty("--secondary-color", "#1E3C72");
        document.body.style.setProperty("--light-primary-color", "linear-gradient(180deg, rgba(20, 30, 54, 0.5) 0%, rgba(42, 82, 152, 0.075) 100%)");
        document.body.style.setProperty("--btn-border", "linear-gradient(to right, rgba(30, 60, 114, 1),rgba(42, 82, 152, 0))");
        document.body.style.setProperty("--btn-bg", "linear-gradient(90deg, #7303C0 -7.55%, #EC38BC 99.16%, #F6AFE2 118.12%)");
        // document.body.style.setProperty("--btn-bg", "linear-gradient(90deg, #7303C0 -7.55%, #EC38BC 99.16%, #F6AFE2 118.12%)");
        document.body.style.setProperty("--btn-color", "#FFFFFF");
        document.body.style.setProperty("--light-bg", "#ffffff");
        document.body.style.setProperty("--card-bg", "rgba(255, 255, 255, 0.5)");
        document.body.style.setProperty("--shrink-color", "rgba(227, 173, 103, 0.9)");
        document.body.style.setProperty("--dark-50", "#ffffff");
        document.body.style.setProperty("--svg-color", "white");
        document.body.style.setProperty("--form-border", "#ec38bc80");
        document.getElementById("sun_svg").style.display = "none"; 
        document.getElementById("moon_svg").style.display = "block";


    }else if (localStorage.currentTheme == "night"){
        document.body.style.setProperty("--primary-color", "#141E36");
        document.body.style.setProperty("-nav-button-bg", "#BE1954");
        document.body.style.setProperty("--secondary-color", "white");
        document.body.style.setProperty("--light-primary-color", "linear-gradient(180deg, rgba(20, 30, 54, 0.5) 0%, rgba(42, 82, 152, 0.075) 100%)");
        document.body.style.setProperty("--btn-border", "linear-gradient(to right, rgba(30, 60, 114, 1),rgba(42, 82, 152, 0))");
        document.body.style.setProperty("--btn-bg", "white");
        document.body.style.setProperty("--btn-color", "#141E36");
        document.body.style.setProperty("--light-bg", "#182546");
        document.body.style.setProperty("--card-bg", "rgba(30, 41, 59, 0.5)");
        document.body.style.setProperty("--shrink-color", "#B9A1FF");
        document.body.style.setProperty("--dark-50", "rgba(30, 41, 59, 0.5)");
        document.body.style.setProperty("--svg-color", "black");
        document.body.style.setProperty("--form-border", "white");
 
        document.getElementById("moon_svg").style.display = "none"; 
        document.getElementById("sun_svg").style.display = "block"; 



    }
}


themeChangerBtnElem.addEventListener('click',()=>{
    if(localStorage.currentTheme == "night"){
        localStorage.currentTheme = "day"
    }else if (localStorage.currentTheme == "day"){
        localStorage.currentTheme = "night"
    }
    updateUI();
});


const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});

document.addEventListener('click', e => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});
