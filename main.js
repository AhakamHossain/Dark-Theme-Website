let icon = document.getElementById(`icon`);

icon.addEventListener(`click`,changeTheme);

function changeTheme(){
    document.body.classList.toggle(`darkTheme`);

    if(document.body.classList == "darkTheme"){
        icon.src = `./sun.png`;
    }else{
        icon.src = `./moon.png`;
    }
}