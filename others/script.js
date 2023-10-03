let init_animation = () => {
    setTimeout(()=>{
        document.querySelector('.logo_container').style.display = 'block';
        document.querySelector('.logo_container').style.animationName = 'init_logo_container';
    }, 2000);
};

init_animation();